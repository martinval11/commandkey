export interface CommandProps {
  open: boolean;
  onClose: () => void;
  className?: string | any;
  overlayClassName?: string | any;
  children: React.ReactNode;
}

export interface CommandInputProps {
  onChange?: (...args: any) => void;
  placeholder?: string;
  className?: string | any;
  props?: any;
}

export interface CommandListProps {
  children: React.ReactNode;
  className?: string | any;
}

export interface CommandOptionProps {
  value?: string | number | readonly string[] | undefined;
  id?: string;
  className?: string | any;
  children: React.ReactNode;
  onClick?: () => void;
}
