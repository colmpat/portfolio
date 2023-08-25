import Image from "next/image";

const About: React.FC = () => {
  return (
    <div id="home" className="w-full flex space-between border-b pb-12">
      {/* Text Intro */}
      <div className="mt-20 flex flex-col w-2/3 gap-2">
        <h3 className="text-2xl font-bold text-fgMuted">Hi, I'm Colm Lang:</h3>
        <h1 className="text-5xl font-extrabold">Software Engineer</h1>
        <h3 className="mt-1 text-3xl font-bold">and Computer Science 4+1 Student @ <a href="https://www.usfca.edu/" rel="noreferrer" target="_blank" className="text-primaryPurple hover:underline">USF</a></h3>
        <p className="mt-8 leading-10 text-xl text-fgMuted indent-4">
          I'm a results-driven Software Engineer who excels in fast-paced environments, consistently delivering 
          an exceptional rate of development to the teams and projects I work on. My passion centers around 
          projects that harness <b>big data</b>, <b> distributed systems</b>, and <b>data visualization</b> to 
          solve problems with <span className="italic text-primaryPurple">real human impact</span>. Excited to 
          contribute my skills and experience to projects that push boundaries and drive positive change.
        </p>
      </div>
      <div className="w-1/3 mt-10 px-10">
        <Image src="/images/colm-beach.png" width={2801} height={3735} className="rounded-lg shadow-lg" alt="Colm Lang" />
      </div>
    </div>
  );
};

export default About;
