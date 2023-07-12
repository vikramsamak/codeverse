import { Button, Container } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import { useEffect, useState } from "react";
import PropTypes from "prop-types";

function Option(props) {
  const [langcode, setLangcode] = useState("17");
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
    props.onRun(langcode,user_input);
  };

  const clearCode = () => {
    setUserinput("");
    props.onClear();
  };

  return (
    <Container fluid>
      <Form.Group className="text-white">
        <Form.Label className=" text-white">Language</Form.Label>
        <Form.Select
          className="text-white"
          aria-label="Language"
          style={{ background: "#272822" }}
          onInput={langChangehandeler}
          value={langcode}
        >
          <option>Select Language</option>
          <option value="6">C</option>
          <option value="5">Python</option>
          <option value="17">JavaScript</option>
          <option value="1">C#</option>
        </Form.Select>
      </Form.Group>
      <Form.Group className="mt-4">
        <Form.Label className=" text-white ">User Input</Form.Label>
        <Form.Control
          value={user_input}
          className="text-white"
          as="textarea"
          rows={5}
          style={{ resize: "none", background: "#272822" }}
          onInput={userInputHandler}
        ></Form.Control>
      </Form.Group>
      <Form.Group className="mt-4">
        <Form.Label className="text-white">Actions</Form.Label>
        <div className="d-grid gap-2">
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
