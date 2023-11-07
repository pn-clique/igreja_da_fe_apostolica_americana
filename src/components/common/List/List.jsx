export default function List({ children, index }) {
  return (
    <ul key={index} className="flex flex-col items-start gap-6">
      {children}
    </ul>
  );
}
