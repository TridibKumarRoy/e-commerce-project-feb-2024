import React from 'react'
import { Container, Row, Col, Card } from 'react-bootstrap';

const AboutUs = () => {
  return (
      <div><Container className="mt-5">
          <Row className="justify-content-center">
              <Col md={8}>
                  <Card>
                      <Card.Body>
                          <Card.Title>About Us</Card.Title>
                          <Card.Text>
                              <p>
                                  Welcome to Bhoom, your ultimate destination for a comprehensive range of automobile parts and accessories, as well as reliable road and home assistance services. Established in 2024, Bhoom was founded with the vision of providing automobile enthusiasts and everyday drivers with high-quality products and exceptional support.

                              </p>
                              <h6>Our Mission</h6>
                              <p>
                                  At Bhoom, we strive to be more than just an e-commerce platform. Our mission is to create a seamless and enjoyable shopping experience by offering a diverse selection of automobile parts and accessories, ensuring that our customers find exactly what they need to keep their vehicles in top condition. We also pride ourselves on our dedicated road and home assistance services, providing peace of mind and support when you need it the most.

                              </p>
                              <h6>Why Choose Bhoom?</h6>
                              <p>
                                  Wide Range of Products: We offer an extensive inventory of car and motorcycle parts, accessories, and more.
                                  Quality and Reliability: Our products are sourced from trusted brands and manufacturers, ensuring top-notch quality and performance.
                                  Exceptional Customer Support: Our team is always ready to assist you with any queries or concerns, ensuring a smooth shopping experience.
                                  Road and Home Assistance: Our specialized services are designed to provide comprehensive support, whether you're on the road or at home.
                              </p>
                              <p>
                                  Get in Touch <br />
                                  We're here to help! For any inquiries, please contact us at:<br />
                                  Phone: 3333342545<br />
                                  Email: support@bhoom.co.in

                              </p>
                              <p>Thank you for choosing Bhoom. We look forward to serving you and becoming your trusted partner for all your automobile needs.</p>
                          </Card.Text>
                      </Card.Body>
                  </Card>
              </Col>
          </Row>
          <br />
      </Container></div>
  )
}

export default AboutUs;
