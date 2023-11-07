export default function Container({ children, className, id }) {
  return (
    <section
      id={id}
      className={`${className} xs:px-8 flex pt-36 md:px-28 2xl:px-36 relative w-full`}
    >
      {children}
    </section>
  );
}
