export const CommandInput = ({
  onChange,
  placeholder,
  ...props
}: {
  onChange?: (...args: any) => void;
  placeholder?: string;
  props?: any;
}) => {
  return (
    <input
      className="w-full p-4 text-white border-b outline-none bg-zinc-900 border-zinc-800"
      name="search"
      placeholder={placeholder}
      type="search"
      autoFocus
      onChange={onChange}
      {...props}
    />
  );
};
