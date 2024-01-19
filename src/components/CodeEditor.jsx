import Editor, { useMonaco } from "@monaco-editor/react";
import { useEffect, useRef, useState } from "react";
import downArrow from "../assets/down_arrow.png";
import { languageOptions } from "../constants/languageOptions";
import { defineTheme } from "../utils/defineTheme";
const CodeEditor = () => {
  const monaco = useMonaco();
  const editorRef = useRef(null);
  const [language, setLanguage] = useState(languageOptions[0]);
  const [theme, setTheme] = useState({});
  useEffect(() => {
    defineTheme("oceanic-next").then(() =>
      setTheme({ key: "oceanic-next", value: "Oceanic Next" })
    );
  }, []);
  const [languageDropDown, setLanguageDropDown] = useState(false);
  function handleEditorMount(editor, monaco) {
    editorRef.current = editor;
  }
  return (
    <div className='bg-white'>
      {/* editor filters */}
      <div className='bg-slate-400 flex'>
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
        <div className='cursor-pointer rounded-md h-12 w-40 mt-8 mb-8 ml-10 flex items-center justify-around bg-slate-800 text-white'>
          <div className='font-semibold text-lg'>{theme.value}</div>
          <div className='h-4 w-4'>
            <img src={downArrow} />
          </div>
        </div>
      </div>
      <div className=''>
        <Editor
          theme={theme.key}
          language={language.name.toLowerCase()}
          value={language.value}
          height='50vh'
        />
      </div>
    </div>
  );
};

export default CodeEditor;
