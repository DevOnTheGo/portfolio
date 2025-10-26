//Icons
import {
  GithubIcon,
  HTMLIcon,
  CSSIcon,
  JSIcon,
  TSIcon,
  PHPIcon,
  TailwindIcon,
  ReactIcon,
  NodeJSIcon,
  MySQLIcon,
  GitIcon,
  FigmaIcon,
  SupabaseIcon,
} from "../icons/Icons.tsx";

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
          <h2 className="text-5xl font-semibold bg-linear-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            Tecnologías
          </h2>
          <div className="flex-1 h-px bg-linear-to-r from-transparent via-blue-500 to-transparent"></div>
        </div>
        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Frontend Card */}
          <div className="bg-zinc-900/50 backdrop-blur rounded-xl p-8 border border-zinc-800 hover:border-cyan-400/50 transition-colors">
            <h3 className="text-3xl font-semibold text-cyan-400 mb-8">
              Frontend
            </h3>
            <div className="grid grid-cols-3 gap-6">
              <div className="flex flex-col items-center gap-2">
                <HTMLIcon className="w-16 h-16" />
              </div>
              <div className="flex flex-col items-center gap-2">
                <CSSIcon className="w-16 h-16" />
              </div>
              <div className="flex flex-col items-center gap-2">
                <JSIcon className="w-16 h-16" />
              </div>
            </div>
          </div>

          {/* Backend Card */}
          <div className="bg-zinc-900/50 backdrop-blur rounded-xl p-8 border border-zinc-800 hover:border-zinc-600 transition-colors">
            <h3 className="text-3xl font-semibold text-white mb-8">Backend</h3>
            <div className="grid grid-cols-3 gap-6">
              <div className="flex flex-col items-center gap-2">
                <PHPIcon className="w-16 h-16" />
              </div>
              <div className="flex flex-col items-center gap-2">
                <MySQLIcon className="w-16 h-16" />
              </div>
              <div className="flex flex-col items-center gap-2">
                <NodeJSIcon className="w-16 h-16" />
              </div>
            </div>
          </div>

          {/* Learning Card */}
          <div className="bg-zinc-900/50 backdrop-blur rounded-xl p-8 border border-zinc-800 hover:border-orange-400/50 transition-colors">
            <h3 className="text-3xl font-semibold text-orange-400 mb-8">
              Aprendiendo
            </h3>
            <div className="grid grid-cols-3 gap-6">
              <div className="flex flex-col items-center gap-2">
                <ReactIcon className="w-16 h-16" />
              </div>
              <div className="flex flex-col items-center gap-2">
                <TSIcon className="w-16 h-16" />
              </div>
              <div className="flex flex-col items-center gap-2">
                <TailwindIcon className="w-16 h-16" />
              </div>
            </div>
          </div>

          {/* Tools Card */}
          <div className="bg-zinc-900/50 backdrop-blur rounded-xl p-8 border border-zinc-800 hover:border-cyan-400/50 transition-colors">
            <h3 className="text-3xl font-semibold text-cyan-400 mb-8">
              Herramientas
            </h3>
            <div className="grid grid-cols-3 gap-6">
              <div className="flex flex-col items-center gap-2">
                <GitIcon className="w-16 h-16" />
              </div>
              <div className="flex flex-col items-center gap-2">
                <GithubIcon className="w-16 h-16" />
              </div>
              <div className="flex flex-col items-center gap-2">
                <FigmaIcon className="w-16 h-16" />
              </div>
              <div className="flex flex-col items-center gap-2">
                <SupabaseIcon className="w-16 h-16" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
