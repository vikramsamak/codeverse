import { Container } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import PropTypes from "prop-types";
function Output({ output }) {
  return (
    <Container fluid>
      <Row className=" bg-seondary">
        <p className="text-white">Output</p>
        <pre
          className="text-white border border-secondary"
          style={{ height: "250px" }}
        >
          {output.output.Result}
        </pre>
      </Row>
      <Row className="mt-2  bg-seondary">
        <p className="text-white">Errors</p>
        <pre
          className="text-danger border border-secondary"
          style={{ height: "150px" }}
        >
          {output.output.Errors}
        </pre>
      </Row>
    </Container>
  );
}
Output.propTypes = {
  output: PropTypes.object,
};

export default Output;
