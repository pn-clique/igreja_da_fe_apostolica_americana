export default function Link({ href, className, children }) {
  return (
    <a href={href} className={`outline-none ${className}`}>
      {children}
    </a>
  );
}
