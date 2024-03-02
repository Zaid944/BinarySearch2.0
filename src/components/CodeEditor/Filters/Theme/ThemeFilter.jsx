import { monacoThemes } from "../../../../constants/themeList";
import { defineTheme } from "../../../../utils/defineTheme";
import downArrow from "../../../../assets/down_arrow.png";

const ThemeFilter = ({ themeDropDown, setThemeDropDown, theme, setTheme }) => {
  return (
    <div
      className='cursor-pointer rounded-md h-12 w-40 mt-8 mb-8 ml-10 flex items-center justify-around bg-slate-800 text-white'
      onClick={() => {
        setThemeDropDown(!themeDropDown);
      }}
    >
      <div className='font-semibold text-lg'>{theme.value}</div>
      <div className='h-4 w-4'>
        <img src={downArrow} />
      </div>
      {themeDropDown && (
        <div className='cursor-pointer w-40 h-24 p-2 rounded-md absolute z-10 top-48  overflow-y-scroll right-[363px] bg-slate-800 text-white'>
          {Object.keys(monacoThemes).map((themeKey, index) => {
            return (
              <div key={index} className='font-semibold text-lg px-4 py-2'>
                <span
                  className='hover:text-orange-400'
                  onClick={() => {
                    defineTheme(themeKey).then(() =>
                      setTheme({
                        key: themeKey,
                        value: monacoThemes[themeKey],
                      })
                    );
                    setThemeDropDown(false);
                  }}
                >
                  {monacoThemes[themeKey]}
                </span>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default ThemeFilter;
