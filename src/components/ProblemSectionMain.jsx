import Problem from "./Problem";
import { problemList } from "../data/data";
const ProblemSectionMain = () => {
  return (
    <div>
      {problemList.map((problem) => {
        return (
          <div
            className='ml-10
            odd:bg-slate-700 even:bg-slate-800 
            last:rounded-b-md
            flex w-[91%]'
            key={problem.id}
          >
            <Problem problem={problem} />
          </div>
        );
      })}
    </div>
  );
};

export default ProblemSectionMain;
