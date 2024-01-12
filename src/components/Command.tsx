import { useCallback, useEffect } from 'react';
import styles from './command.module.css';

export const Command = ({
  open,
  onClose,
  className = '',
  containerClassName = '',
  children,
}: {
  open: boolean;
  onClose: () => void;
  className?: string;
  containerClassName?: string;
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
      className={`fixed inset-0 z-50 flex items-center justify-center [background-color:rgba(0,0,0,0.5)] ${containerClassName}`}
    >
      <div
        className={`w-full max-w-md text-white border bg-zinc-900 border-zinc-800 rounded-md ${className}`}
        id={styles.modal}
      >
        <div>{children}</div>
      </div>
    </div>
  ) : null;
};
