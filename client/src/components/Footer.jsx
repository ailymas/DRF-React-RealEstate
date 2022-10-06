import React from "react";
import { Container,Col, Row } from "react-bootstrap";

const Footer = () => {
  return (
    <footer>
      <Container>
        <Row>
          <Col className="py-3">
            copyright &copy; Real Estate {new Date().getFullYear()}
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
