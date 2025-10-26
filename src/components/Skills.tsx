import Cards from "./Cards.tsx";
export default function Skills() {
  return (
    <section
      id="tecnologías"
      className="min-h-screen bg-black p-6 flex items-center"
    >
      <div className="w-full max-w-5xl mx-auto">
        {/* Title of section skills */}
        <div className="flex items-center gap-4 mb-16">
          <div className="flex-1 h-px bg-linear-to-r from-transparent via-blue-500 to-transparent"></div>
          <h2 className="min-h-14 text-5xl font-semibold bg-linear-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            Tecnologías
          </h2>
          <div className="flex-1 h-px bg-linear-to-r from-transparent via-blue-500 to-transparent"></div>
        </div>
        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Frontend Card */}
          <Cards category={"Frontend"} skills={["HTML", "CSS", "JavaScript"]} />

          {/* Backend Card */}
          <Cards category={"Backend"} skills={["PHP", "MySQL", "NodeJS"]} />

          {/* Learning Card */}
          <Cards
            category={"Aprendiendo"}
            skills={["React", "TypeScript", "Tailwind"]}
          />

          {/* Tools Card */}
          <Cards
            category={"Herramientas"}
            skills={["Git", "Github", "Figma", "Supabase"]}
          />
        </div>
      </div>
    </section>
  );
}
