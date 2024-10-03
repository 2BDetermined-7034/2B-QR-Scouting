export type CommitButtonProps = {
  onClick: () => void;
  disabled: boolean;
};

export function CommitButton({ onClick, disabled }: CommitButtonProps) {
  return (
    <button
      className={`rounded-2xl focus:shadow-outline mx-2 py-6 px-6 font-bold uppercase text-white focus:shadow-lg focus:outline-none ${
        disabled ? 'dark:bg-gray-500' : 'bg-red-500 hover:bg-red-700'
      }`}
      type="button"
      onClick={onClick}
      disabled={disabled}
    >
      Commit
    </button>
  );
}