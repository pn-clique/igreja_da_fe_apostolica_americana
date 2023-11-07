export default function Text({ className, children, index }) {
  return (
    <p
      key={index}
      className={`${className} text-sm 2xl:text-base leading-relaxed max-w-xl`}
    >
      {children}
    </p>
  );
}
