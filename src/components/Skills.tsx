import { featuredSkills } from "~/data/skills";
import Category from "./Category";

const Skills: React.FC = () => {
  return (
    <Category title="Skills">
      <div className="flex flex-wrap justify-center gap-8 pt-8">
      {featuredSkills.map((skill, i) => (
        <span className={`text-3xl font-semibold font-mono text-${i % 2 == 0 ? "primaryPurple" : "fgDefault"}`}>{skill}</span>
      ))}
      </div>
    </Category>
  );
};

export default Skills;
