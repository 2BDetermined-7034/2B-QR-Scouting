import { produce } from 'immer';
import { cloneDeep } from 'lodash';
import { ChangeEvent } from 'react';
import configJson from '../../config/2024/config.json';
import { Config } from '../components/inputs/BaseInputProps';
import { createStore } from './createStore';

const enableSubpages = true; // Single setting for enabling/disabling the year feature

function buildConfig(c: Config) {
  let config: Config = { ...c };
  config.sections
    .map(s => s.fields)
    .flat()
    .forEach(f => (f.value = f.defaultValue));
  return config;
}

function getDefaultConfig(): Config {
  return buildConfig(configJson as Config);
}

export function getConfig() {
  const configData = cloneDeep(useQRScoutState.getState().formData);

  configData.sections
    .map(s => s.fields)
    .flat()
    .forEach(f => delete f.value);

  return configData;
}

export interface QRScoutState {
  formData: Config;
  showQR: boolean;
}

const initialState: QRScoutState = {
  formData: getDefaultConfig(),
  showQR: false,
};

export const useQRScoutState = createStore<QRScoutState>(
  initialState,
  'qrScout',
  {
    version: 1,
  },
);

export const resetToDefaultConfig = async (year: string) => {
  if (!enableSubpages) {
    console.warn('Year feature is disabled.');
    return;
  }

  const currentYear = useQRScoutState.getState().formData.year;
  if (currentYear === year) {
    console.log('Year has not changed, no need to reset config.');
    return;
  }

  try {
    const configModule = await import(`../../config/${year}/config.json`);
    const config = configModule.default;
    setConfig(JSON.stringify(config)); // Stringify the config object
  } catch (error) {
    console.error(`Error resetting config for year ${year}:`, error);
  }
};

export function updateValue(sectionName: string, code: string, data: any) {
  useQRScoutState.setState(
    produce((state: QRScoutState) => {
      let section = state.formData.sections.find(s => s.name === sectionName);
      if (section) {
        let field = section.fields.find(f => f.code === code);
        if (field) {
          field.value = data;
        }
      }
    }),
  );
  saveFormDataToLocalStorage();
}

export function resetSections() {
  useQRScoutState.setState(
    produce((state: QRScoutState) => {
      state.formData.sections.forEach(section => {
        section.fields.forEach(field => {

          const fieldPreserveDataOnReset = field.preserveDataOnReset ?? false;

          if (!fieldPreserveDataOnReset) {
            field.value = field.defaultValue;
          } else if (
            (field.type === 'number' || field.type === 'counter') &&
            field.autoIncrementOnReset
          ) {
            field.value = field.value + 1;
          }
        });
      });
    }),
  );
  saveFormDataToLocalStorage();
}

export function setFormData(config: Config) {
  useQRScoutState.setState({ formData: buildConfig(config) });
  saveFormDataToLocalStorage();
}

export function setConfig(configText: string) {
  const jsonData = JSON.parse(configText);
  setFormData(jsonData as Config);
}

export function uploadConfig(evt: ChangeEvent<HTMLInputElement>) {
  var reader = new FileReader();
  reader.onload = function (e) {
    const configText = e.target?.result as string;
    setConfig(configText);
  };
  if (evt.currentTarget.files && evt.currentTarget.files.length > 0) {
    reader.readAsText(evt.currentTarget.files[0]);
  }
}

export const inputSelector =
  (section: string, code: string) => (state: QRScoutState) => {
    const formData = state.formData;
    return formData.sections
      .find(s => s.name === section)
      ?.fields.find(f => f.code === code);
  };

export function getFieldValue(code: string) {
  return useQRScoutState
    .getState()
    .formData.sections.map(s => s.fields)
    .flat()
    .find(f => f.code === code)?.value;
}

function saveFormDataToLocalStorage() {
  const formData = useQRScoutState.getState().formData;
  localStorage.setItem('formData', JSON.stringify(formData));
}

function loadFormDataFromLocalStorage() {
  const formData = localStorage.getItem('formData');
  if (formData) {
    setFormData(JSON.parse(formData));
  }
}

// Load form data from local storage on initialization
loadFormDataFromLocalStorage();