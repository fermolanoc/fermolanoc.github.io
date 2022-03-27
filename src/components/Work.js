import { projects } from "../projects";

function Work() {
  const data = projects;

  return (
    <div className="snap-start grid grid-cols-1 p-4 h-screen">
      {data.map((project, index) => {
        return (
          <div
            key={index}
            className="w-full h-64 flex flex-col items-center justify-center gap-6 bg-white py-4 rounded-lg shadow-lg"
          >
            <div className="flex flex-col items-center justify-around">
              <p className="text-slate-800 text-xl font-semibold">Project</p>
              <p className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-br from-blue-400 to-emerald-500">
                {project.projectName}
              </p>
            </div>
            <div className="flex flex-col items-center justify-around">
              <p className="text-slate-800 text-xl font-semibold">
                Technologies
              </p>
              <p className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-br from-amber-400 to-pink-500">
                {project.technologies}
              </p>
            </div>
            <div className="flex flex-col items-center justify-around">
              <p className="text-slate-800 text-xl font-semibold">Links</p>

              <div className="w-full flex justify-between items-center gap-4">
                <a
                  className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-br from-pink-500 to-violet-500"
                  href={project.links[0].destination}
                  target="_blank"
                >
                  Live
                </a>
                <a
                  className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-br from-pink-500 to-violet-500"
                  href={project.links[1].destination}
                  target="_blank"
                >
                  GitHub
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
