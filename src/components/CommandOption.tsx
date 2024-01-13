import { useState } from 'react';

/**
 * @description
 * This component is used to create a button inside the CommandList
 * @param value: string | number | readonly string[] | undefined;
 * @param id: string;
 * @param className: string | any;
 * @param style: React.CSSProperties;
 * @param mouseOverColor: string; // To customize hover background using JavaScript
 * @param mouseLeaveColor: string; // To customize no hover background using JavaScript
 * @param children: React.ReactNode;
 * @param onClick: () => void;
 */

export const CommandOption = ({
  value,
  children,
  className = '',
  style = {},
  mouseOverColor = 'rgb(39 39 42)',
  mouseLeaveColor = 'rgb(24 24 27)',
  ...props
}: {
  value?: string | number | readonly string[] | undefined;
  id?: string;
  className?: string | any; // `any` in case you are using CSS Modules
  style?: React.CSSProperties;
  mouseOverColor?: string; // Hover
  mouseLeaveColor?: string; // No Hover
  children: React.ReactNode;
  onClick?: () => void;
}) => {
  const [hovered, setHovered] = useState(false);

  return (
    <button
      value={value}
      style={
        Object.keys(style).length > 0
          ? style
          : {
              width: '100%',
              padding: '16px',
              textAlign: 'left',
              color: '#fff',
              outline: 'none',
              border: 'none',
              cursor: 'pointer',
              backgroundColor: hovered ? mouseOverColor : mouseLeaveColor,
            }
      }
      onMouseOver={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={className}
      {...props}
    >
      {children}
    </button>
  );
};
