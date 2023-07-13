import AceEditor from "react-ace";
import "ace-builds/src-noconflict/theme-monokai";
import "ace-builds/src-noconflict/mode-java";
import "ace-builds/src-noconflict/mode-python";
import "ace-builds/src-noconflict/mode-c_cpp";
import "ace-builds/src-noconflict/mode-golang";
import "ace-builds/src-noconflict/mode-csharp";
import "ace-builds/src-noconflict/mode-javascript";

import PropTypes from "prop-types";
// import { useEffect, useRef, useState } from "react";

function Editor({ code, setCode, lang }) {
  const style = {
    width: "100%",
  };

  return (
    <AceEditor
      value={code}
      style={style}
      mode={lang}
      theme="monokai"
      name="UNIQUE_ID_OF_DIV"
      fontSize={15}
      editorProps={{ $blockScrolling: false }}
      onChange={setCode}
      showPrintMargin={false}
      setOptions={{
        enableBasicAutocompletion: true,
        enableLiveAutocompletion: true,
        enableSnippets: true,
        showLineNumbers: true,
        tabSize: 2,
      }}
    />
  );
}

Editor.propTypes = {
  lang: PropTypes.string,
  onCodechange: PropTypes.func,
  code: PropTypes.string,
  setCode: PropTypes.func,
};
export default Editor;
