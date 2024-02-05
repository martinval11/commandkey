import { useCallback, useEffect } from 'react';
import { twMerge } from 'tailwind-merge';
import { CommandProps } from './types';

/**
 * @description
 * Container of the modal
 * @param open: boolean
 * @param onClose: () => void
 * @param className?: string
 * @param overlayClassName?: string
 * @param children: React.ReactNode
 */

export const Command = ({
  open,
  onClose,
  className = '',
  overlayClassName = '',
  children,
}: CommandProps) => {
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
      className={twMerge(
        'fixed top-0 right-0 bottom-0 left-0 z-50 flex items-center justify-center bg-black bg-opacity-50',
        overlayClassName
      )}
    >
      <div
        className={twMerge(
          'w-full max-w-md text-white border border-solid shadow-md border-zinc-800 bg-zinc-900 rounded-md',
          className
        )}
      >
        <div>{children}</div>
      </div>
    </div>
  ) : null;
};
