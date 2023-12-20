import Category from "./Category";

const courses = [ 
  "Advanced Network Security (MS)",
  "Data Structures and Algorithms (MS)",
  "Software Development (MS)",
  "Big Data (MS)",
  "Computer Architecture",
  "Operating Systems",
  "C & Systems Programming",
  "Systems Security",
];
  

const Education: React.FC = () => {
  return (
    <Category title="Education">
      <div className="flex p-6 gap-16">
        <SchoolListing school="University of San Francisco" degree="Computer Science" years="2020 - 2024" />
        <div className="flex flex-col">
          <h3 className="text-2xl font-semibold">Relevant Courses</h3>
          <hr className="mb-3"/>
          <p className="text-fgMuted text-lg">
            {courses.join(", ")}
          </p>
        </div>
      </div>
    </Category>
  );
};

export default Education;

const SchoolListing: React.FC<{
  school: string,
  degree: string,
  years: string
}> = ({ school, degree, years }) => {
  return ( 
    <div className="flex gap-2 shrink-0">
      <svg className="mt-2" width="30" height="30" xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24">
        <path d="M23.786,19.492L16.713,1.836c-.624-1.529-2.376-2.269-3.911-1.645l-.925,.378c-.249,.102-.472,.244-.68,.402-.548-.594-1.326-.972-2.196-.972H3C1.346,0,0,1.346,0,3V21c0,1.654,1.346,3,3,3h6c1.654,0,3-1.346,3-3V8.895l5.304,13.242c.625,1.543,2.417,2.26,3.909,1.641l.926-.378c1.505-.574,2.286-2.434,1.647-3.907ZM13.574,7.446l2.778-1.132,4.171,10.412-2.778,1.132L13.574,7.446Zm-.942-5.025l.925-.378c.496-.206,1.097,.031,1.302,.543l.75,1.871-2.777,1.132-.747-1.866c-.208-.51,.038-1.095,.549-1.303ZM2,7h3v10H2V7Zm5,0h3v10h-3V7Zm3-4v2h-3V2h2c.551,0,1,.448,1,1ZM3,2h2v3H2V3c0-.552,.449-1,1-1Zm-1,19v-2h3v3H3c-.551,0-1-.448-1-1Zm7,1h-2v-3h3v2c0,.552-.449,1-1,1Zm12.929-.991c-.104,.247-.297,.438-.544,.539h0l-.926,.378c-.511,.206-1.095-.037-1.3-.54l-.669-1.671,2.778-1.132,.665,1.661c.102,.247,.101,.52-.003,.766Z"/>
      </svg>
      <div className="flex flex-col border-l-2 pl-2">
        <h3 className="text-2xl font-bold">{school}</h3>
        <p className="font-semibold text-lg text-fgMuted">{degree}</p>
        <p className="text-fgMuted text-lg">{years}</p>
      </div>
    </div>
  );
};
