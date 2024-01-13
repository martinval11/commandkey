import { CommandInputProps } from './types';

/**
 * @description
 * Input of the modal, you can use it as a search bar
 * @param onChange: (...args: any) => void;
 * @param placeholder: string;
 * @param style: React.CSSProperties;
 * @param className: string | any;
 * @param props: any;
 */

export const CommandInput = ({
  onChange,
  placeholder,
  style = {},
  className = '',
  ...props
}: CommandInputProps) => {
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
      autoComplete="off"
      className={className}
      onChange={onChange}
      {...props}
    />
  );
};
