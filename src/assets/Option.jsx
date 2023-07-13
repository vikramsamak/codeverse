import { Button, Container } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import { useEffect, useState } from "react";
import "./Option.css";
import PropTypes from "prop-types";

function Option(props) {
  const [langcode, setLangcode] = useState("");
  const [user_input, setUserinput] = useState("");

  const langChangehandeler = (event) => {
    setLangcode(event.target.value);
  };
  useEffect(() => {
    props.onLangChange(langcode);
  });

  const userInputHandler = (event) => {
    setUserinput(event.target.value);
  };

  const codeRunner = () => {
    props.onRun(langcode, user_input);
  };

  const clearCode = () => {
    setUserinput("");
    props.onClear();
  };

  return (
    <Container fluid>
      <Form.Group className="text-white">
        <Form.Label className=" text-white ">Language</Form.Label>
        <Form.Select
          className="text-white bg-secondary"
          aria-label="Language"
          onInput={langChangehandeler}
          value={langcode}
        >
          <option>Select Language</option>
          <option value="java">Java</option>
          <option value="py">Python</option>
          <option value="cpp">C++</option>
          <option value="c">C</option>
          <option value="go">GoLang</option>
          <option value="cs">C#</option>
          <option value="js">NodeJS</option>
        </Form.Select>
      </Form.Group>
      <Form.Group className="mt-4">
        <Form.Label className=" text-white">User Input</Form.Label>
        <Form.Control
          value={user_input}
          className="text-white"
          as="textarea"
          rows={8}
          style={{ resize: "none", background: "#272822" }}
          onInput={userInputHandler}
        ></Form.Control>
      </Form.Group>
      <Form.Group className="mt-4">
        <Form.Label className="text-white">Actions</Form.Label>
        <div className="d-grid gap-4">
          <Button variant="secondary" size="lg" onClick={codeRunner}>
            Run
          </Button>
          <Button variant="secondary" size="lg" onClick={clearCode}>
            Clear
          </Button>
        </div>
      </Form.Group>
    </Container>
  );
}
Option.propTypes = {
  onLangChange: PropTypes.func,
  onRun: PropTypes.func,
  onClear: PropTypes.func,
};

export default Option;
