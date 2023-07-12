import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Editor from "./assets/Editor";
import Output from "./assets/Output";
import Option from "./assets/Option";
import { useState } from "react";

import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [lang, setLang] = useState("javascript");
  const [code, setCode] = useState("");
  const [output, setOutput] = useState("");

  const getLangcode = (langcode) => {
    if (langcode == "6") {
      setLang("c_cpp");
    } else if (langcode == "5") {
      setLang("python");
    } else if (langcode == "17") {
      setLang("javascript");
    } else if (langcode == "1") {
      setLang("csharp");
    }
  };

  const clearEverything = () => {
    setCode("");
    setOutput("");
  };
  const getOutput = (langcode, user_input) => {
    // api request code
    const url = "https://code-compiler.p.rapidapi.com/v2";
    const options = {
      method: "POST",
      headers: {
        "content-type": "application/x-www-form-urlencoded",
        "X-RapidAPI-Key":import.meta.env.VITE_API_KEY,
        "X-RapidAPI-Host": "code-compiler.p.rapidapi.com",
      },
      body: new URLSearchParams({
        LanguageChoice: langcode,
        Program: code,
        Input: user_input,
      }),
    };

    fetch(url, options)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setOutput(data);
      });
  };

  return (
    <div style={{ height: "100%", background: "#272822" }}>
      <Navbar expand="lg" className="">
        <Container className="justify-content-center ">
          <Navbar.Brand className="text-white">
            CodeVerse - Online Code Compiler
          </Navbar.Brand>
        </Container>
      </Navbar>
      <Container fluid style={{ background: "#272822" }}>
        <Row>
          <Col sm={2} className="p-2 m-0 border rounded border-secondary ">
            <h5 className="text-white text-center">Options</h5>
            <Option
              className="text-white"
              onLangChange={getLangcode}
              onRun={getOutput}
              onClear={clearEverything}
            ></Option>
          </Col>
          <Col sm={5} className="p-2 m-0 border rounded border-secondary">
            <h5 className="text-white text-center">Editor</h5>
            <Editor lang={lang} code={code} setCode={setCode}></Editor>
          </Col>
          <Col sm={5} className="p-2 m-0 border rounded border-secondary">
            <h5 className="text-white text-center">Output</h5>
            <Output output={{ output }}></Output>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
