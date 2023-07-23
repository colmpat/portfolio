import { featuredSkills } from "~/data/skills";
import Category from "./Category";

const Skills: React.FC = () => {
  return (
    <Category title="Skills">
      <div className="flex flex-wrap justify-center">
      {featuredSkills.map((fs) => (
        <div
          key={fs.skill}
          className="flex flex-col items-center justify-center p-2"
        >
          <img
            src={fs.iconUrl}
            alt={fs.skill}
            className="w-12 h-12 mb-2"
          />
          <span className="font-semibold">{fs.skill}</span>
        </div>
      ))}
      </div>
    </Category>
  );
};

export default Skills;
