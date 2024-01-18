import React from "react";
import clsx from "clsx";
import { Link } from "react-router-dom";
const Problem = ({ problem }) => {
  const { id, status, difficulty, title } = problem;
  return (
    <React.Fragment>
      <div className='text-lg py-4 ml-[50px] w-2/12 px-2 text-white'>
        {status}
      </div>
      <div className=' py-4 ml-[50px] w-4/12 pl-12'>
        <Link to={`/problems/${id}`}>
          <span className='text-white text-lg hover:text-blue-600'>
            {title}
          </span>
        </Link>
      </div>
      <div
        className={clsx(
          "text-lg pl-8 py-4 ml-[200px] w-2/12",
          difficulty === "Hard" && "text-red-400",
          difficulty === "Medium" && "text-yellow-400",
          difficulty === "Easy" && "text-green-400"
        )}
      >
        {difficulty}
      </div>
    </React.Fragment>
  );
};

export default Problem;
