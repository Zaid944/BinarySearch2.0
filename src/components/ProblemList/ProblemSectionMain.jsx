import { useEffect, useState } from "react";
import Problem from "./Problem";
import { problemList } from "../../data/data";
import { useSelector } from "react-redux";
const ProblemSectionMain = () => {
  const { difficulty, status } = useSelector((state) => state.slice);
  const [filteredProblemList, setFilteredProblemList] = useState(problemList);

  useEffect(() => {
    setFilteredProblemList(
      problemList.filter(
        (problem) =>
          (status === "" || problem.status === status) &&
          (difficulty === "" || problem.difficulty === difficulty)
      )
    );
  }, [difficulty, status]);

  return (
    <div>
      {filteredProblemList.map((problem) => {
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
