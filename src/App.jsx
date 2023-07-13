import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Editor from "./assets/Editor";
import Output from "./assets/Output";
import Option from "./assets/Option";
import { useState } from "react";
import QueryString from "qs";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [lang, setLang] = useState("java");
  const [code, setCode] = useState("");
  const [output, setOutput] = useState("");

  const notify = (msg) => toast.info(msg);

  const error_display = (err) => toast.error(err);

  const getLangcode = (langcode) => {
    if (langcode == "java") {
      setLang("java");
    } else if (langcode == "py") {
      setLang("python");
    } else if (langcode == "cpp") {
      setLang("c_cpp");
    } else if (langcode == "c") {
      setLang("c_cpp");
    } else if (langcode == "go") {
      setLang("golang");
    } else if (langcode == "cs") {
      setLang("csharp");
    } else if (langcode == "js") {
      setLang("javascript");
    }
  };

  const clearEverything = () => {
    setCode("");
    setOutput("");
    notify("Everything is cleared now...");
  };
  const getOutput = (langcode, user_input) => {
    // api request code
    if (langcode == "") {
      error_display("No Language selected");
    } else if (code == "") {
      error_display("Code Empty...");
    } else {
      var data = QueryString.stringify({
        code: code,
        language: langcode,
        input: user_input,
      });
      var config = {
        method: "post",
        url: "https://api.codex.jaagrav.in",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        data: data,
      };

      axios(config).then(function (response) {
        setOutput(JSON.parse(JSON.stringify(response.data)));
      });
    }
  };

  return (
    <Container
      fluid
      style={{
        minHeight: "100vh",
        background: "#272822",
        minWidth: "100%",
        maxWidth: "100%",
      }}
    >
      <ToastContainer
        style={{ background: "#272822" }}
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
      <Navbar expand="lg" className="justify-content-center">
        <Container fluid className="justify-content-center ">
          <Navbar.Brand className="text-white">
            CodeVerse - Online Code Compiler
          </Navbar.Brand>
        </Container>
      </Navbar>
      <Container fluid style={{ background: "#272822" }}>
        <Row>
          <Col
            lg={2}
            className="p-2 mt-sm-2 m-md-2 m-lg-2 border rounded border-secondary "
          >
            <h5 className="text-white text-center">Options</h5>
            <Option
              className="text-white"
              onLangChange={getLangcode}
              onRun={getOutput}
              onClear={clearEverything}
            ></Option>
          </Col>
          <Col
            lg={6}
            className="p-2 mt-sm-2 m-md-2 my-lg-2 border rounded border-secondary"
          >
            <h5 className="text-white text-center">Editor</h5>
            <Editor lang={lang} code={code} setCode={setCode}></Editor>
          </Col>
          <Col className="p-2 mt-sm-2 m-md-2 m-lg-2 border rounded border-secondary">
            <h5 className="text-white text-center">Output</h5>
            <Output output={{ output }}></Output>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default App;
