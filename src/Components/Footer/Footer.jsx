import React from 'react'
import './Footer.css'
import { Container, Row, Col, Form, Button } from 'react-bootstrap'

export default function Footer() {
  return (
    <footer>
      <Container>
        <Row>
          <Col sm={1}></Col>
          <Col sm={4}>
            <div id="newsletter">
              <h6>Subscribe to our Newsletter</h6>
              <Form className="newsletter_subscribe">
                <Form.Group controlId="email_newsletter" className="d-flex">
                  <Form.Control type="text" placeholder="Enter your email address" />
                  <Button type="submit">Subscribe</Button>
                </Form.Group>
              </Form>
            </div>
          </Col>
          <Col sm={3}>
            <div className="contact">
              <h6>Contact</h6>
              <p>hello@kimp.io</p>
              <p>1-800-946-9778</p>
            </div>
          </Col>
          <Col sm={4}>
            <div className="address">
              <h6>Address</h6>
              <p>169 Enterprise Blvd, 3rd Floor</p>
              <p>Markham, ON L6G 0E7</p>
              <p>Canada</p>
            </div>
          </Col>
          {/* <Col sm={1}></Col> */}
        </Row>
      </Container>
    </footer>
  )
}
