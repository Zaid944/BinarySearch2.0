import { useParams } from "react-router-dom";
import ProblemStatement from "../components/ProblemStatement/ProblemStatement";
import { problemList } from "../data/data";
import { useState } from "react";
import Split from "react-split";
import Landing from "../components/CodeEditor/Landing";
const Problem = () => {
  const { id } = useParams();
  const [problem, setProblem] = useState(
    problemList[problemList.findIndex((val) => val.id == id)]
  );
  return (
    <Split className='flex'>
      <div className='h-screen overflow-scroll bg-white cursor-default'>
        <ProblemStatement problem={problem} />
      </div>
      <div>
        <Landing />
      </div>
    </Split>
  );
};

export default Problem;
