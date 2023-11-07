export default function Button({ className, href, children }) {
  return (
    <a
      href={`${href}`}
      className={`${className} text-sm flex items-center gap-4 flex-none px-6 py-4 rounded-lg`}
    >
      {children}
    </a>
  );
}
