import { useDispatch } from "react-redux";
import { setDifficulty, unsetDifficulty } from "../redux/filterSlice";
import GREEN_TICK from "../assets/green-tick.png";
import clsx from "clsx";
const DifficultyDropdownItem = ({ difficulty, selectedFn, selected }) => {
  const dispatch = useDispatch();
  return (
    <div
      className={clsx(
        "cursor-pointer flex justify-between",
        difficulty === "Easy" && "text-green-400",
        difficulty === "Medium" && "text-yellow-400",
        difficulty === "Hard" && "text-red-400"
      )}
      onClick={() => {
        if (selected) {
          selectedFn("");
          dispatch(unsetDifficulty());
        } else {
          selectedFn(difficulty);
          dispatch(setDifficulty(difficulty));
        }
      }}
    >
      {difficulty}
      {selected && <img src={GREEN_TICK} className='w-4 h-4' />}
    </div>
  );
};

export default DifficultyDropdownItem;
