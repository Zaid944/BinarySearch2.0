import { useState, useEffect } from "react";
import { defineTheme } from "../../utils/defineTheme";
import LanguageFilter from "./Filters/Language/LanguageFilter";
import ThemeFilter from "./Filters/Theme/ThemeFilter";
import CodeEditorWindow from "./CodeEditorWindow";

const Landing = () => {
  const [language, setLanguage] = useState({
    name: "Javascript",
    value: `console.log('Hello World')`,
  });
  const [theme, setTheme] = useState({});
  useEffect(() => {
    defineTheme("oceanic-next").then(() =>
      setTheme({ key: "oceanic-next", value: "Oceanic Next" })
    );
  }, []);

  const [languageDropDown, setLanguageDropDown] = useState(false);
  const [themeDropDown, setThemeDropDown] = useState(false);

  return (
    <div>
      <div className='bg-slate-400 flex'>
        <LanguageFilter
          languageDropDown={languageDropDown}
          setLanguageDropDown={setLanguageDropDown}
          language={language}
          setLanguage={setLanguage}
        />
        <ThemeFilter
          themeDropDown={themeDropDown}
          setThemeDropDown={setThemeDropDown}
          theme={theme}
          setTheme={setTheme}
        />
      </div>
      <CodeEditorWindow theme={theme} language={language} />
    </div>
  );
};

export default Landing;
