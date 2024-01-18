import { useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import Editor, { useMonaco } from "@monaco-editor/react";
import ProblemStatement from "../components/ProblemStatement";
import { problemList } from "../data/data";
import { useState } from "react";
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
      <div className='w-1/2 h-screen overflow-scroll'>
        <ProblemStatement problem={problem} />
      </div>
      <div className='w-[10px] bg-[url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAeCAYAAADkftS9AAAAIklEQVQoU2M4c+bMfxAGAgYYmwGrIIiDjrELjpo5aiZeMwF+yNnOs5KSvgAAAABJRU5ErkJggg==)] bg-no-repeat bg-center bg-gray-200 cursor-col-resize' ></div>
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
