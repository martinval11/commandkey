import { twMerge } from 'tailwind-merge';
import { CommandListProps } from './types';

/**
 * @description
 * Container for the CommandOptions' Components
 * @param children: React.ReactNode;
 * @param className?: string | any;
 */

export const CommandList = ({
  children,
  className = '',
}: CommandListProps) => {
  return (
    <div className={twMerge('w-full', className)}>
      {children}
    </div>
  );
};
