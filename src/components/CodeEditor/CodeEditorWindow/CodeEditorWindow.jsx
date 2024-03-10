import Editor from "@monaco-editor/react";
const CodeEditorWindow = ({ theme, language, code, setCode }) => {
  function setEditorChange(value) {
    setCode(value);
  }
  return (
    <div>
      <Editor
        theme={theme.key}
        language={language.name.toLowerCase()}
        height='50vh'
        value={code}
        onChange={setEditorChange}
      />
    </div>
  );
};

export default CodeEditorWindow;
