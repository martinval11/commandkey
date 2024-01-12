export const CommandOption = ({
  value,
  children,
  className = '',
  ...props
}: {
  value: string | number | readonly string[] | undefined;
  id?: string;
  className?: string;
  children: React.ReactNode;
  onClick?: () => void;
}) => {
  return (
    <button
      value={value}
      className={`w-full p-4 text-left text-white outline-none bg-zinc-900 hover:bg-zinc-800 ${className}`}

      {...props}
    >
      {children}
    </button>
  );
};
