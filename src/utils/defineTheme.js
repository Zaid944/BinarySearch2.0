import { monacoThemes } from "../constants/themeList";
import { loader } from "@monaco-editor/react";

export const defineTheme = (theme) => {
    return new Promise((res) => {
      Promise.all([
        loader.init(),
        import(`../assets/themes/${monacoThemes[theme]}.json`),
      ]).then(([monaco, themeData]) => {
        monaco.editor.defineTheme(theme, themeData);
        res();
      });
    });
};
