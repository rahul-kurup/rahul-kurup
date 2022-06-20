export default function Anchor({
  children,
  ...props
}: JSX.IntrinsicElements["a"]) {
  return (
    <a target="_blank" rel="noopener noreferrer" {...props}>
      {children}
    </a>
  );
}
