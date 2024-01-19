import { useParams } from "react-router-dom";
import ProblemStatement from "../components/ProblemStatement";
import { problemList } from "../data/data";
import { useState } from "react";
import Split from "react-split";
import CodeEditor from "../components/CodeEditor";
const Problem = () => {
  const { id } = useParams();
  const [problem, setProblem] = useState(
    problemList[problemList.findIndex((val) => val.id == id)]
  );
  return (
    <Split className='flex bg-gray-200'>
      <div className='h-screen overflow-scroll bg-white cursor-default'>
        <ProblemStatement problem={problem} />
      </div>
      <CodeEditor />
    </Split>
  );
};

export default Problem;
