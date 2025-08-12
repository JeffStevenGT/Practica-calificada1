export default function Card({ name, role, img, index }) {
  // para movil
  const movil = index === 1 || index === 3 || index === 5;
  // para md
  const desktop = index === 1 || index === 4;

  return (
    <div
      className={`
        flex flex-col items-start
        ${movil ? "mt-16" : ""} 
        ${desktop ? "md:mt-16" : "md:mt-0"}
      `}
    >
      <div className="grid grid-cols-[auto_auto] gap-0">
        <img src={img} alt={name} className="object-cover" />
        <p className="text-xs md:text-sm font-medium [writing-mode:vertical-rl] [text-orientation:mixed]">
          {role}
        </p>
      </div>
      <h3 className="font-bold text-lg mt-2">{name}</h3>
    </div>
  );
}
