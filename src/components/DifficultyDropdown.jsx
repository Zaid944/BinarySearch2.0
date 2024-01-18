import { difficultyList } from "../utils/List";
import DifficultyDropdownItem from "./DifficultyDropdownItem";
import { useSelector } from "react-redux";
const DifficultyDropdown = () => {
  const selectedDifficulty = useSelector((state) => state.slice.difficulty);
  return (
    <div className='mt-1 absolute rounded-md w-1/12 bg-slate-800 p-4'>
      {difficultyList.map((difficulty, index) => (
        <DifficultyDropdownItem
          key={index}
          difficulty={difficulty}
          selected={selectedDifficulty === difficulty}
        />
      ))}
    </div>
  );
};

export default DifficultyDropdown;
