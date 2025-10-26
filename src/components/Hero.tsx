// Photo Profile
import HeroImage from "../assets/img/hero-image.jpg";
// Icons
import { GithubIcon, LinkedinIcon, GmailIcon } from "../icons/Icons.tsx";

export default function Hero() {
  return (
    <section
      id="inicio"
      className="min-h-screen flex flex-col md:flex-row items-center justify-center bg-linear-to-b from-blue-950 to-black text-white px-6 md:px-16 py-12"
    >
      {/* Photo Profile */}
      <img
        src={HeroImage}
        alt="Foto de Brian Soto Hernández"
        className="w-48 h-48 md:w-72 md:h-72 rounded-full shadow-lg border-4 border-blue-700 object-cover mb-8 md:mb-0 md:mr-12"
      />

      {/* Description */}
      <div className="text-center md:text-left max-w-2xl">
        {/* Name */}
        <h1 className="text-3xl md:text-5xl font-bold text-blue-500">
          Brian Soto Hernández
        </h1>
        {/* Role */}
        <h2 className="text-lg md:text-2xl mt-2 text-gray-300">
          Desarrollador Full Stack
        </h2>
        {/* Bio */}
        <p className="mt-6 text-gray-300 text-base md:text-lg leading-relaxed font-mono">
          Soy un desarrollador Full Stack con experiencia en la creación de
          aplicaciones web dinámicas y escalables. Me especializo en tecnologías
          como <span className="text-blue-400">React</span>,{" "}
          <span className="text-blue-400">Node.js</span> y bases de datos{" "}
          <span className="text-blue-400">SQL</span> y{" "}
          <span className="text-blue-400">NoSQL</span>. Mi pasión es transformar
          ideas en soluciones digitales eficientes y atractivas.
        </p>

        {/* Contact */}
        <div className="mt-6 flex gap-4 md:justify-start justify-center">
          {/* GitHub */}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/DevOnTheGo/"
            className="flex justify-between items-center bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-full font-semibold transition"
          >
            GitHub
            <GithubIcon className="inline-block w-5 h-5 ml-2" />
          </a>
          {/* LinkedIn */}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="#"
            className="flex justify-between items-center bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-full font-semibold transition"
          >
            LinkedIn
            <LinkedinIcon className="inline-block w-5 h-5 ml-2" />
          </a>
          {/* Email */}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="mailto:sotohernandezbrian5@gmail.com"
            className="flex justify-between items-center bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-full font-semibold transition"
          >
            Email
            <GmailIcon className="inline-block w-5 h-5 ml-2" />
          </a>
        </div>
      </div>
    </section>
  );
}
