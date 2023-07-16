const About: React.FC = () => {
  return (
    <div id="home" className="w-full flex border-b pb-12">
      {/* Text Intro */}
      <div className="mt-20 flex flex-col w-1/2 gap-2">
        <h3 className="text-2xl font-bold text-fgMuted">Hi, I'm Colm Lang:</h3>
        <h1 className="text-5xl font-extrabold">Software Engineer</h1>
        <h3 className="mt-1 text-3xl font-bold">and Computer Science 4+1 Student @ <a href="https://www.usfca.edu/" rel="noreferrer" target="_blank" className="text-primaryPurple hover:underline">USF</a></h3>
        <p className="mt-8 leading-10 text-lg text-fgMuted">
          Excited about opportunities that allow me to leverage my interest in <b>big data</b>, 
          <b> distributed systems</b>, and <b>data visualization</b> to solve problems with 
          <span className="italic text-primaryPurple"> real human impact</span>.
        </p>
      </div>
    </div>
  );
};

export default About;
