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
const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  React: ReactIcon,
  JavaScript: JSIcon,
  TypeScript: TSIcon,
  HTML: HTMLIcon,
  CSS: CSSIcon,
  PHP: PHPIcon,
  MySQL: MySQLIcon,
  NodeJS: NodeJSIcon,
  Tailwind: TailwindIcon,
  Git: GitIcon,
  Github: GithubIcon,
  Figma: FigmaIcon,
  Supabase: SupabaseIcon,
} as const;
export default function Cards({
  category,
  skills,
}: {
  category: string;
  skills: Array<string>;
}) {
  return (
    <div className="bg-zinc-900/50 backdrop-blur rounded-xl p-8 border border-zinc-800 hover:border-cyan-400/50 transition-colors">
      <h3 className="text-3xl font-semibold text-cyan-400 mb-8">{category}</h3>
      <div className="grid grid-cols-3 gap-6">
        {skills.map((skill) => {
          const SkillIcon = iconMap[skill];

          if (!SkillIcon) return null;

          return (
            <div key={skill} className="flex flex-col items-center gap-2">
              <SkillIcon className="w-16 h-16" />
            </div>
          );
        })}
      </div>
    </div>
  );
}
