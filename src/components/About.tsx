export default function About() {
  return (
    <section
      id="sobremí"
      className="min-h-screen flex items-center justify-center text-white px-6 md:px-16 py-20 bg-black relative overflow-hidden"
    >
      <div className="max-w-5xl relative z-10">
        {/* Header with decorative line */}
        <div className="flex items-center gap-4 mb-16">
          <div className="flex-1 h-px bg-linear-to-r from-transparent via-blue-500 to-transparent "></div>
          <h2 className="text-5xl font-semibold bg-blue-400 bg-clip-text text-transparent">
            Sobre mí
          </h2>
          <div className="flex-1 h-px bg-linear-to-r from-transparent via-blue-500 to-transparent"></div>
        </div>

        {/* Main container with glassmorphism */}
        <div className="backdrop-blur-sm bg-white/5 rounded-2xl p-8 md:p-12 border border-white/10 shadow-2xl">
          {/* Grid container */}
          <div className="space-y-13">
            {/* Paragraph 1 with left border */}
            <div className="border-l-4 border-blue-500 pl-6 hover:border-blue-400 transition-colors duration-300">
              <p className="text-gray-300 text-base md:text-lg leading-relaxed font-mono">
                Soy estudiante de nivel superior con enfoque en desarrollo de
                software y aplicaciones web. Me apasiona crear proyectos que
                sean funcionales, atractivos y fáciles de usar.
              </p>
            </div>

            {/* Paragraph 2 with left border */}
            <div className="border-l-4 border-blue-500 pl-6 hover:border-blue-400 transition-colors duration-300">
              <p className="text-gray-300 text-base md:text-lg leading-relaxed font-mono">
                Actualmente estoy ampliando mis habilidades en desarrollo
                full-stack. He trabajado con tecnologías como{" "}
                <span className="text-blue-400 font-semibold">
                  React, TypeScript, Tailwind y PHP
                </span>
                .
              </p>
            </div>

            {/* Paragraph 3 with left border */}
            <div className="border-l-4 border-blue-500 pl-6 hover:border-blue-400 transition-colors duration-300">
              <p className="text-gray-300 text-base md:text-lg leading-relaxed font-mono">
                Me interesa seguir creciendo como desarrollador full-stack,
                explorando nuevas tecnologías y aplicando mis conocimientos en
                proyectos reales que aporten valor. Me considero curioso,
                proactivo y siempre dispuesto a aprender.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
