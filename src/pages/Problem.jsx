import { useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import Editor, { useMonaco } from "@monaco-editor/react";
import ProblemStatement from "../components/ProblemStatement";
import { problemList } from "../data/data";
import { useState } from "react";
import { Scrollbar } from "react-scrollbars-custom";
const Problem = () => {
  const { id } = useParams();
  const [problem, setProblem] = useState(
    problemList[problemList.findIndex((val) => val.id == id)]
  );

  const monaco = useMonaco();
  const editorRef = useRef(null);
  function handleEditorMount(editor, monaco) {
    editorRef.current = editor;
  }

  return (
    <div className='flex'>
      <Scrollbar style={{ height: "100vh", width: "50vw" }}>
        <ProblemStatement problem={problem} />
      </Scrollbar>
      <div className='w-1/2'>
        <Editor
          defaultLanguage='javascript'
          defaultValue='// some comment'
          onMount={handleEditorMount}
        />
      </div>
    </div>
  );
};

export default Problem;
