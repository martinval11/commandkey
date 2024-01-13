export interface CommandProps {
  open: boolean;
  onClose: () => void;
  className?: string | any;
  classNameBackground?: string | any;
  style?: React.CSSProperties;
  styleBackground?: React.CSSProperties;
  children: React.ReactNode;
}

export interface CommandInputProps {
  onChange?: (...args: any) => void;
  placeholder?: string;
  style?: React.CSSProperties;
  className?: string | any;
  props?: any;
}

export interface CommandListProps {
  children: React.ReactNode;
  className?: string | any;
  style?: React.CSSProperties;
}

export interface CommandOptionProps {
  value?: string | number | readonly string[] | undefined;
  id?: string;
  className?: string | any;
  style?: React.CSSProperties;
  mouseOverColor?: string;
  mouseLeaveColor?: string;
  children: React.ReactNode;
  onClick?: () => void;
}
