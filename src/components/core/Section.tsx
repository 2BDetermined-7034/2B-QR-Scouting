type SectionProps = {
  children?: React.ReactNode;
  title?: string;
};

export function Section(props: SectionProps) {
  return (
    <div
      className="mb-4 rounded bg-gray-100 shadow-md dark:bg-gray-600"
      key={props.title}
    >
      {props.title && (
        <div className="mb-2 rounded-t bg-red-ethnocentric p-1 shadow-md">
          <h2 className="font-eth-it text-2xl uppercase text-white dark:text-gray-800">
            {props.title}
          </h2>
        </div>
      )}
      <div className="flex flex-col justify-start gap-2 py-2">
        {props.children}
      </div>
    </div>
  );
}
