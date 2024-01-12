import { useCallback, useEffect } from 'react';
import styles from './command.module.css';

export const Command = ({
  open,
  onClose,
  className = '',
  style = {},
  styleBehind = {}, // Change the style behind the command modal (Such as the background)
  children,
}: {
  open: boolean;
  onClose: () => void;
  className?: string | any; // `any` in case you are using CSS Modules
  style?: React.CSSProperties;
  styleBehind?: React.CSSProperties;
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
      style={
        Object.keys(styleBehind).length > 0
          ? styleBehind
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
        id={styles.modal}
      >
        <div>{children}</div>
      </div>
    </div>
  ) : null;
};
