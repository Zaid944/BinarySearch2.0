import { languageOptions } from "../../../../constants/languageOptions";
import downArrow from "../../../../assets/down_arrow.png";

const LanguageFilter = ({
  languageDropDown,
  setLanguageDropDown,
  language,
  setLanguage,
}) => {
  return (
    <div
      className='cursor-pointer rounded-md h-12 w-40 mt-8 mb-8 ml-10 flex justify-between items-center bg-slate-800 text-white'
      onClick={() => {
        setLanguageDropDown(!languageDropDown);
      }}
    >
      <div className='font-semibold text-lg pl-5'>{language.name}</div>
      <div className='pr-4'>
        <img src={downArrow} className='h-4 w-4' />
      </div>
      {languageDropDown && (
        <div className='cursor-pointer w-40 h-24 p-2 rounded-md absolute z-10 top-48 overflow-y-scroll right-[564px] bg-slate-800 text-white'>
          {languageOptions.map((languageOption, index) => {
            if (language !== languageOption)
              return (
                <div key={index} className='font-semibold text-lg px-4 py-2'>
                  <span
                    className='hover:text-orange-400'
                    onClick={() => {
                      setLanguage(languageOption);
                      setLanguageDropDown(false);
                    }}
                  >
                    {languageOption.name}
                  </span>
                </div>
              );
          })}
        </div>
      )}
    </div>
  );
};

export default LanguageFilter;
