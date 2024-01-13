import { useCallback, useEffect } from 'react';

/**
 * @description
 * Container of the modal
 * @param open: boolean
 * @param onClose: () => void
 * @param className: string
 * @param classNameBackground: string
 * @param style: React.CSSProperties
 * @param styleBackground: React.CSSProperties
 * @param children: React.ReactNode
 */

export const Command = ({
  open,
  onClose,
  className = '',
  classNameBackground = '',
  style = {},
  styleBackground = {}, // Change the style behind the command modal (Such as the background)
  children,
}: {
  open: boolean;
  onClose: () => void;
  className?: string | any; // `any` in case you are using CSS Modules
  classNameBackground?: string | any;
  style?: React.CSSProperties;
  styleBackground?: React.CSSProperties;
  children: React.ReactNode;
}) => {
  const escFunction = useCallback((event: KeyboardEvent) => {
    if (event.key === 'Escape') {
      onClose();
    }
  }, []);

  useEffect(() => {
    document.addEventListener('keydown', escFunction, false);

    return () => {
      document.removeEventListener('keydown', escFunction, false);
    };
  }, [escFunction]);

  return open ? (
    <div
      className={classNameBackground}
      style={
        Object.keys(styleBackground).length > 0
          ? styleBackground
          : {
              position: 'fixed',
              top: 0,
              right: 0,
              bottom: 0,
              left: 0,
              zIndex: 50,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: 'rgba(0, 0, 0, 0.5)',
            }
      }
    >
      <div
        className={className}
        style={
          Object.keys(style).length > 0
            ? style
            : {
                width: '100%',
                maxWidth: '448px',
                color: '#fff',
                border: '1px solid',
                backgroundColor: 'rgb(24 24 27)',
                borderColor: 'rgb(39 39 42)',
                borderRadius: '6px',
              }
        }
      >
        <div>{children}</div>
      </div>
    </div>
  ) : null;
};
