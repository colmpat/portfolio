import { type Project as ProjectType, projects } from "~/data/projects";
import Category from "./Category";
import Image from "next/image";

const Projects: React.FC = () => {
  return (
    <Category title="Projects">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {projects.map((project, i) => (<Project key={i} project={project} />))}
      </div>
    </Category>
  );
};

const Project: React.FC<{ project: ProjectType }> = ({ project }) => {
  return (
    <div className="flex flex-col py-4">
      <Image src={`/images/${project.id}.png`} width={600} height={400} className="mb-3 rounded-lg shadow" alt="Project Image" />
      <h4 className="mb-1 font-semibold text-primaryPurple">{project.domain}</h4>
      <h3 className="text-3xl font-bold">{project.title}</h3>
      <p className="mt-2 text-lg text-fgMuted">{project.description}</p>
      <div className="flex flex-wrap mt-4 mb-10 gap-2">
        {project.skills.map((skill, i) => (
          <span key={i} className="font-semibold py-1 px-2 border border-2 border-primaryPurple rounded-lg">
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Projects;
