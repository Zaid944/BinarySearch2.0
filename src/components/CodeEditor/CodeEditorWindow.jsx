import Editor from "@monaco-editor/react";
const CodeEditorWindow = ({ theme, language }) => {
  return (
    <div className='bg-white'>
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

export default CodeEditorWindow;
