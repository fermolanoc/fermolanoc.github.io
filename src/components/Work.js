import { projects } from "../projects";
import { FiGithub } from "react-icons/fi";
import { BiLinkExternal } from "react-icons/bi";

function Work() {
  const data = projects;

  return (
    <div className="w-full grid grid-cols-1 p-4 h-auto gap-6">
      <div className="w-full -mb-4">
        <p className="text-3xl font-bold text-white">Work</p>
        <p className="text-slate-400">Some personal and school projects</p>
      </div>
      {data.map((project, index) => {
        return (
          <div
            key={index}
            className="w-full h-64 flex flex-col items-start justify-center px-4 gap-6 bg-slate-800 py-4 rounded-lg shadow-lg drop-shadow-lg text-lg"
          >
            <div className="flex flex-col items-start justify-around">
              <p className="text-emerald-400 -mb-1">Project</p>
              <p className="text-2xl font-bold text-white">
                {project.projectName}
              </p>
            </div>
            <div className="flex flex-col items-start justify-around">
              <p className="text-emerald-400 font-semibold -mb-1">
                Technologies
              </p>
              <p className=" text-white">{project.technologies}</p>
            </div>
            <div className="flex flex-col items-start justify-around">
              <p className="text-emerald-400 -mb-1">Links</p>

              <div className="w-full flex justify-between items-start gap-4">
                <a
                  className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-br from-pink-500 to-violet-500 mt-2"
                  href={project.links[1].destination}
                  target="_blank"
                >
                  <FiGithub size={24} color="white" />
                </a>
                <a
                  className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-br from-pink-500 to-violet-500 mt-2"
                  href={project.links[0].destination}
                  target="_blank"
                >
                  <BiLinkExternal size={24} color="white" />
                </a>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Work;
