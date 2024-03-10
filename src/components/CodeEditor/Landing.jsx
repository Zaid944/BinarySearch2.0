import { useState, useEffect } from "react";
import { defineTheme } from "../../utils/defineTheme";
import LanguageFilter from "./Filters/Language/LanguageFilter";
import ThemeFilter from "./Filters/Theme/ThemeFilter";
import CodeEditorWindow from "./CodeEditorWindow/CodeEditorWindow";
import CodeEditorConsole from "./CodeEditorConsole/CodeEditorConsole";
import Split from "react-split";
import axios from "axios";
import "./global.css";
const Landing = () => {
  const [language, setLanguage] = useState({
    name: "Javascript",
    value: `console.log('Hello World')`,
    id: 63,
  });
  const [theme, setTheme] = useState({});
  useEffect(() => {
    defineTheme("oceanic-next").then(() =>
      setTheme({ key: "oceanic-next", value: "Oceanic Next" })
    );
  }, []);

  const [languageDropDown, setLanguageDropDown] = useState(false);
  const [themeDropDown, setThemeDropDown] = useState(false);
  const [code, setCode] = useState(language.value);
  const [customInput, setCustomInput] = useState("");
  // console.log("input is ", customInput);
  // console.log("code is ", code);
  function handleCompile() {
    const formData = {
      language_id: language.id,
      // encode source code in base64
      source_code: btoa(code),
      stdin: btoa(customInput),
    };
    const options = {
      method: "POST",
      url: import.meta.env.VITE_X_RAPID_API_URL,
      params: { base64_encoded: "true", fields: "*" },
      headers: {
        "content-type": "application/json",
        "Content-Type": "application/json",
        "X-RapidAPI-Key": "921902c44emshbfa233286fa2c0bp13a66ajsn4c7d6272a1d0",
        "X-RapidAPI-Host": "judge0-ce.p.rapidapi.com",
      },
      data: formData,
    };
    axios
      .request(options)
      .then((response) => {
        console.log(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }

  return (
    <Split direction='vertical'>
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
        <CodeEditorWindow
          theme={theme}
          language={language}
          code={code}
          setCode={setCode}
        />
      </div>
      <div>
        <div>
          <CodeEditorConsole
            customInput={customInput}
            setCustomInput={setCustomInput}
          />
        </div>
        <div>
          <button onClick={handleCompile}>Submit</button>
        </div>
      </div>
    </Split>
  );
};

export default Landing;
