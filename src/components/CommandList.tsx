export const CommandList = ({
  children,
  className = '',
  style = {},
}: {
  children: React.ReactNode;
  className?: string | any; // `any` in case you are using CSS Modules
  style?: React.CSSProperties;
}) => {
  return (
    <div className={className} style={style}>
      {children}
    </div>
  );
};
