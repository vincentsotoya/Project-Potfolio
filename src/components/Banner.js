import { Row, Col } from "react-bootstrap";

export const Banner = () => {
  return (
    <section className="banner" id="home">
      <Row className="align-items-center">
        <Col xs={12} md={6} xl={7}>
          <span className="taglinbe">Welcome to my Portfolio</span>
          <h1>
            {`Hi I'm webcoded`}
            <span className="wrap">web developer</span>
          </h1>
        </Col>
      </Row>
    </section>
  );
};
