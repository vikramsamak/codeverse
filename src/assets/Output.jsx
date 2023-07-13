import { Container } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import PropTypes from "prop-types";
import Scrollbars from "rc-scrollbars";
function Output({ output }) {
  return (
    <Container fluid>
      <Row className="">
        <p className="text-white">Output</p>
        <pre
          className="text-white border border-secondary  "
          style={{ height: "250px"}}
        >
          <Scrollbars autoHeight>{output.output.output}</Scrollbars>
        </pre>
      </Row>
      <Row className="mt-2 ">
        <p className="text-white">Errors</p>
        <pre
          className="text-danger border border-secondary "
          style={{ height: "150px" }}
        >
          <Scrollbars>{output.output.error}</Scrollbars>
        </pre>
      </Row>
    </Container>
  );
}
Output.propTypes = {
  output: PropTypes.object,
};

export default Output;
