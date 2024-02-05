import { twMerge } from 'tailwind-merge';
import { CommandOptionProps } from './types';

/**
 * @description
 * This component is used to create a button inside the CommandList
 * @param value: string | number | readonly string[] | undefined;
 * @param id: string;
 * @param className?: string | any;
 * @param onClick?: () => void;
 */

export const CommandOption = ({
  value,
  children,
  className = '',
  ...props
}: CommandOptionProps) => {
  return (
    <button
      value={value}
      className={twMerge(
        'w-full p-4 text-left text-white border-none outline-none cursor-pointer hover:bg-zinc-800',
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};
