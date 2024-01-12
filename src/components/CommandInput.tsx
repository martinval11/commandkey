export const CommandInput = ({
  onChange,
  placeholder,
  className = '',
  ...props
}: {
  onChange?: (...args: any) => void;
  placeholder?: string;
  className?: string;
  props?: any;
}) => {
  return (
    <input
      className={`w-full p-4 text-white border-b outline-none bg-zinc-900 border-zinc-800 ${className}`}
      name="search"
      placeholder={placeholder}
      type="search"
      autoFocus
      onChange={onChange}
      {...props}
    />
  );
};
