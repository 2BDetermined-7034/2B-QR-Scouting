import React from 'react';
import BaseInputProps from './BaseInputProps';

export interface NumberInputProps extends BaseInputProps {
  value?: number;
  min?: number;
  max?: number;
  defaultValue?: number;
}

export default function NumberInput(data: NumberInputProps) {
  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    e.preventDefault();
    const newValue = e.currentTarget.value;

    if (!isNaN(Number(newValue))) {
      data.onChange(Number(newValue));
    }
  }

  return (
    <input
      className="w-full rounded py-2 dark:bg-gray-700 dark:text-white"
      type="number"
      min={data.min}
      max={data.max}
      value={data.value || data.defaultValue || ''}
      id={data.title}
      onChange={handleChange}
    />
  );
}
