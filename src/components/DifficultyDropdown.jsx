import { useState } from "react";
import { difficultyList } from "../utils/List";
import DifficultyDropdownItem from "./DifficultyDropdownItem";
const DifficultyDropdown = () => {
  const [selectedDifficulty, setSelectedDifficulty] = useState("");
  return (
    <div className='mt-1 absolute rounded-md w-1/12 bg-slate-800 p-4'>
      {difficultyList.map((difficulty, index) => (
        <DifficultyDropdownItem
          selectedFn={(difficulty) => setSelectedDifficulty(difficulty)}
          key={index}
          difficulty={difficulty}
          selected={selectedDifficulty === difficulty}
        />
      ))}
    </div>
  );
};

export default DifficultyDropdown;
