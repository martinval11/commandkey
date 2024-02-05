import { twMerge } from 'tailwind-merge';
import { CommandInputProps } from './types';

/**
 * @description
 * Input of the modal, you can use it as a search bar
 * @param onChange?: (...args: any) => void;
 * @param placeholder: string;
 * @param className?: string | any;
 * @param props: any;
 */

export const CommandInput = ({
  onChange,
  placeholder,
  className = '',
  ...props
}: CommandInputProps) => {
  return (
    <input
      name="commandkey-input"
      placeholder={placeholder}
      type="search"
      autoFocus
      autoComplete="off"
      className={twMerge('w-full p-4 text-white border-b rounded outline-none bg-zinc-900 border-zinc-800', className)}
      onChange={onChange}
      {...props}
    />
  );
};
