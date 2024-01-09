import React, { useState } from "react";
import ARROW_SVG from "../assets/down_arrow.png";
import SEARCH_ICON from "../assets/search_icon.png";
import { useDispatch } from "react-redux";
import { setStatus } from "../redux/filterSlice";
import DifficultyDropdown from "./DifficultyDropdown";
const Filters = () => {
  const dispatch = useDispatch();
  const [difficultyDropdown, setDifficultyDropdown] = useState(false);
  const [statusDropdown, setStatusDropdown] = useState(false);
  return (
    <React.Fragment>
      <div className='flex'>
        {/* Filters for problems */}
        <div className='w-2/12 pl-12 py-12'>
          <button
            onClick={() => {
              setDifficultyDropdown(
                (prevdifficultyDropdown) => !prevdifficultyDropdown
              );
            }}
            className='bg-slate-800 text-white rounded-md w-full h-12'
          >
            <div className='flex justify-between'>
              <div className='pl-2'>Difficulty </div>
              <div className='pr-2 pt-1'>
                <img src={ARROW_SVG} className='h-4 w-4' />
              </div>
            </div>
          </button>
          {difficultyDropdown && <DifficultyDropdown />}
        </div>
        <div className='w-2/12 py-12 pl-12 ml-4'>
          <button
            onClick={() => {
              setStatusDropdown((prevStatusDropdown) => !prevStatusDropdown);
            }}
            className='bg-slate-800 text-white rounded-md w-full h-12'
          >
            <div className='flex justify-between'>
              <div className='pl-2'>Status </div>
              <div className='pr-2 pt-1'>
                <img src={ARROW_SVG} className='h-4 w-4' />
              </div>
            </div>
          </button>
          {statusDropdown && (
            <div className='mt-1 absolute rounded-md w-1/12 bg-slate-800 p-4'>
              <div
                className='text-white cursor-pointer'
                onClick={() => {
                  dispatch(setStatus("Todo"));
                }}
              >
                Todo
              </div>
              <div
                className='text-green-600 cursor-pointer'
                onClick={() => {
                  dispatch(setStatus("Complete"));
                }}
              >
                Complete
              </div>
              <div
                className='text-yellow-400 cursor-pointer'
                onClick={() => {
                  dispatch(setStatus("Uncomplete"));
                }}
              >
                Uncomplete
              </div>
            </div>
          )}
        </div>
        <div className='w-[345px] pl-14 py-12'>
          <input
            type='text'
            className='w-full rounded-r-none rounded-md px-2 border-2 border-black h-12 focus:outline-none'
          />
          <div className='absolute top-[144px] left-[685px]'>
            <button className='bg-slate-800 h-12 w-12 flex justify-around items-center rounded-l-none rounded-md'>
              <div className='w-8 h-8'>
                <img src={SEARCH_ICON} />
              </div>
            </button>
          </div>
        </div>
        <div className='w-2/12 ml-24  py-12'>
          <button className='bg-slate-800 text-white rounded-md w-full h-12'>
            Show Topic Tags
          </button>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Filters;
