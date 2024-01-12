export const CommandInput = ({
  onChange,
  placeholder,
  style = {},
  className = '',
  ...props
}: {
  onChange?: (...args: any) => void;
  placeholder?: string;
  style?: React.CSSProperties;
  className?: string | any; // `any` in case you are using CSS Modules
  props?: any;
}) => {
  return (
    <input
      style={
        Object.keys(style).length > 0
          ? style
          : {
              outline: 'none',
              width: '100%',
              border: 'none',
              borderBottom: '1px solid rgb(39 39 42)',
              backgroundColor: 'rgb(24 24 27)',
              color: '#fff',
              padding: '16px',
            }
      }
      name="commandkey input"
      placeholder={placeholder}
      type="search"
      autoFocus
      className={className}
      onChange={onChange}
      {...props}
    />
  );
};
