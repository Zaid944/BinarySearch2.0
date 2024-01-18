import clsx from "clsx";
import { useState } from "react";
import LikeLight from "../assets/like-light.png";
import LikeDark from "../assets/like-dark.png";
import DislikeLight from "../assets/dislike-light.png";
import DislikeDark from "../assets/dislike-dark.png";
import { useLockBodyScroll } from "@uidotdev/usehooks";

const ProblemStatement = ({ problem }) => {
  useLockBodyScroll();
  const {
    sno,
    title,
    difficulty,
    like,
    dislike,
    description,
    examples,
    constraints,
  } = problem;
  const [isLike, setIsLike] = useState(false);
  const [isDislike, setIsDislike] = useState(false);
  const [likeCount, setLikeCount] = useState(like);
  const [dislikeCount, setDislikeCount] = useState(dislike);
  return (
    <div className='mb-60'>
      <div className='mt-4 flex ml-8 text-slate-800'>
        <div className='text-4xl font-semibold py-4'>{sno}.</div>
        <div className='text-4xl font-semibold py-4 pl-4'>{title}</div>
      </div>
      <div className='mt-4 flex ml-8'>
        <div
          className={clsx(
            "font-semibold text-lg",
            difficulty === "Easy" && "text-green-400",
            difficulty === "Medium" && "text-yellow-400",
            difficulty === "Hard" && "text-red-400"
          )}
        >
          {difficulty}
        </div>
        <div></div>
        <div className='ml-3 px-4 flex'>
          <img
            className='h-6 w-6 hover:cursor-pointer'
            src={isLike ? LikeDark : LikeLight}
            onClick={() => {
              if (isDislike) {
                setIsDislike(false);
                setDislikeCount(dislikeCount - 1);
              }
              setIsLike((prevIsLike) => !prevIsLike);
              setLikeCount(likeCount + 1);
            }}
          />
          <div className='pl-2 font-semibold text-lg text-slate-800'>
            {likeCount}
          </div>
        </div>
        <div className='px-4 flex'>
          <img
            className='h-6 w-6 hover:cursor-pointer'
            src={isDislike ? DislikeDark : DislikeLight}
            onClick={() => {
              if (isLike) {
                setIsLike(false);
                setLikeCount(likeCount - 1);
              }
              setIsDislike((prevIsDislike) => !prevIsDislike);
              setDislikeCount(dislikeCount + 1);
            }}
          />
          <div className='pl-2 font-semibold text-lg text-slate-800'>
            {dislikeCount}
          </div>
        </div>
      </div>
      <div className='ml-8 mt-4'>
        <hr />
      </div>
      <div className='ml-3 mt-6 px-4 text-slate-800 font-semibold'>
        {description}
      </div>
      <div className='ml-3 px-4 mt-4'>
        {examples.map((example, index) => {
          const { input, output, explanation } = example;
          return (
            <div className='py-4 text-slate-800' key={index}>
              <div className='font-bold py-2'>Example {index + 1}</div>
              <div className='bg-gray-200 p-4 rounded-md'>
                <div className='flex'>
                  <div className='font-semibold'>Input : </div>
                  <div className='ml-2'>{input}</div>
                </div>
                <div className='flex'>
                  <div className='font-semibold'>Output : </div>
                  <div className='ml-2'>{output}</div>
                </div>
                {explanation && (
                  <div className='flex'>
                    <div className='font-semibold'>Explanation : </div>
                    <div className='ml-2'>{explanation}</div>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
      <div className='mt-10 mb-10'>
        <div className='ml-3 px-4 font-bold text-slate-800'>Constraints</div>
        <div className='ml-12 mt-4 text-slate-800'>
          <ul className='list-disc'>
            {constraints.map((constraint, index) => (
              <li key={index}>{constraint}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProblemStatement;
