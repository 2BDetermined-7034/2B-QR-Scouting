import { useMemo } from 'preact/hooks';
import { resetToDefaultConfig, useQRScoutState } from '../../../store/store';
import { Section } from '../../core/Section';
import { CommitButton } from './CommitButton';
import { ResetButton } from './ResetButton';
import Button, { Variant } from '../../core/Button.tsx';

export type CommitAndResetSectionProps = {
  onCommit: () => void;
};

export function CommitAndResetSection({
  onCommit,
}: CommitAndResetSectionProps) {
  const formData = useQRScoutState(state => state.formData);
  const missingRequiredFields = useMemo(() => {
    return formData.sections
      .map(s => s.fields)
      .flat()
      .filter(f => f.required && (f.value === null || f.value === undefined || f.value === ''));
  }, [formData]);

  return (
    <Section>
      <CommitButton
        disabled={missingRequiredFields.length > 0}
        onClick={onCommit}
      />
      <ResetButton />

     <Button
        className="flex justify-center bg-center"
        variant={Variant.Danger}
        onClick={() => resetToDefaultConfig()}
      >
        Reset Config to Default
      </Button>
    </Section>
  );
}