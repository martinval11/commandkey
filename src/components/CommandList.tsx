import { CommandListProps } from './types';

/**
 * @description
 * Container for the CommandOptions' Components
 * @param children: React.ReactNode;
 * @param className?: string | any;
 * @param style?: React.CSSProperties;
 */

export const CommandList = ({
  children,
  className = '',
  style = {},
}: CommandListProps) => {
  return (
    <div className={className} style={style}>
      {children}
    </div>
  );
};
