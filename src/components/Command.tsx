import { useCallback, useEffect } from 'react';

export const Command = ({
  open,
  onClose,
  children,
}: {
  open: boolean;
  onClose: () => void;
  children: React.ReactNode;
}) => {
  if (!open) {
    return null;
  }

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

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center [background-color:rgba(0,0,0,0.5)]">
      <div className="w-full max-w-md text-white border bg-zinc-900 border-zinc-800 rounded-md">
        <div>{children}</div>
      </div>
    </div>
  );
};
