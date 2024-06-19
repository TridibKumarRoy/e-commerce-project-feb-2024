import React from "react";
import { useLocation } from "react-router-dom";
import { Container, Row, Col, Card, ListGroup } from "react-bootstrap";

const ThankYou = () => {
  const location = useLocation();
  const orderDetails = location.state?.orderDetails;

  return (
    <Container className="my-5">
      <Row className="justify-content-center">
        <Col md={8}>
          <Card className="text-center">
            <Card.Header>
              <h2>Thank You!</h2>
            </Card.Header>
            <Card.Body>
              <Card.Text>
                We appreciate your business! If you have any questions, please email us at support@example.com.
              </Card.Text>
              
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default ThankYou;
