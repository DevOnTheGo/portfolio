export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-blue-950/80 backdrop-blur-md text-white px-8 py-4 flex justify-between items-center shadow-lg">
      {/* Name */}
      <h1 className="text-2xl md:text-3xl font-bold text-blue-400 hover:text-blue-500 transition duration-300 cursor-pointer">
        Brian.dev
      </h1>

      {/* Navigation */}
      <nav>
        <ul className="flex gap-6 text-base md:text-lg font-medium">
          {["Inicio", "Sobre mí", "Tecnologías"].map((item) => (
            <li
              key={item}
              className="relative group cursor-pointer hover:text-blue-400 transition duration-300"
            >
              <a
                href={`#${item.toLowerCase().replace(" ", "")}`}
                className="px-1"
              >
                {item}
              </a>
              {/* Animated underline */}
              <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
