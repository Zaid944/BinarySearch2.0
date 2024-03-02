import { useState } from "react";
import Editor from "@monaco-editor/react";
const CodeEditorWindow = ({ theme, language }) => {
  const [value, setValue] = useState("");
  function setEditorChange(value) {
    setValue(value);
  }
  return (
    <div>
      <Editor
        theme={theme.key}
        language={language.name.toLowerCase()}
        defaultValue={language.value}
        height='50vh'
        value={value}
        onChange={setEditorChange}
      />
    </div>
  );
};

export default CodeEditorWindow;
