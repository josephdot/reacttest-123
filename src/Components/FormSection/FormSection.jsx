import React, { Component } from 'react'
import './FormSection.css'
import Copyright from '../Copyright/Copyright';
import { Container, Row, Col, Form, Button } from 'react-bootstrap'

export default class FormSection extends Component {

  render() {
    return (
      <section id="form_section">
        <h1 className="form_sec_title text-center text-bold">Personal Information</h1>
        <div id="form_wrapper">
          <Form>
            <Container>
              <Row>
                <Col sm={6}>
                  <Form.Group controlId="full_name">
                    <Form.Label>Full Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter your Name" />
                    <Form.Text className="text-muted d-none">
                      This Filed is Required!
                    </Form.Text>
                  </Form.Group>
                </Col>
                <Col sm={6}>
                  <Form.Group controlId="email_address">
                    <Form.Label>Email Address</Form.Label>
                    <Form.Control type="email" placeholder="Enter your Emai Address" />
                    <Form.Text className="text-muted d-none">
                      This Filed is Required!
                    </Form.Text>
                  </Form.Group>
                </Col>
              {/* </Row>
              <Row> */}
                <Col sm={6}>
                  {/* <div id="phone_wrapper"> */}
                    <Form.Group controlId="phone_number_fgroup">
                      <Form.Label>Phone Number</Form.Label>
                      <div id="phone_num_box" className="d-flex">
                        <Form.Control id="phone_country" type="text" placeholder="+91" />
                        <Form.Control id="phone_number" type="text" placeholder="9876 543 21" />
                      </div>
                      <Form.Text className="text-muted d-none">
                        This Filed is Required!
                      </Form.Text>
                    </Form.Group>
                  {/* </div> */}
                </Col>
                <Col sm={6}>
                  <Form.Group controlId="date_of_join">
                    <Form.Label>Date of Join</Form.Label>
                    <Form.Control type="text" placeholder="Enter your Date of Join" />
                    <Form.Text className="text-muted d-none">
                      This Filed is Required!
                    </Form.Text>
                  </Form.Group>
                </Col>
              {/* </Row>
              <Row> */}
                <Col sm={6}>
                  <Form.Group controlId="address_street">
                    <Form.Label>Address</Form.Label>
                    <Form.Control type="text" placeholder="Street" />
                    <Form.Text className="text-muted d-none">
                      This Filed is Required!
                    </Form.Text>
                  </Form.Group>
                </Col>
                <Col sm={6}>
                  <Form.Group controlId="address_city">
                    <Form.Label className="d-md-none d-lg-block mb-hidden">&nbsp;</Form.Label>
                    <Form.Control type="text" placeholder="City" />
                    <Form.Text className="text-muted d-none">
                      This Filed is Required!
                    </Form.Text>
                  </Form.Group>
                </Col>
              {/* </Row>
              <Row> */}
                <Col sm={6}>
                  <Form.Group controlId="address_country">
                    <Form.Control as="select">
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                      <option>4</option>
                      <option>5</option>
                    </Form.Control>
                    <Form.Text className="text-muted d-none">
                      This Filed is Required!
                    </Form.Text>
                  </Form.Group>
                </Col>
                <Col sm={6}>
                  <Form.Group controlId="address_postal_code">
                    <Form.Control type="text" placeholder="Postal Code" />
                    <Form.Text className="text-muted d-none">
                      This Filed is Required!
                    </Form.Text>
                  </Form.Group>
                </Col>
              {/* </Row>
              <Row> */}
                <Col sm={12}>
                  <Form.Group controlId="attachments">
                    <Form.Label>Attach File</Form.Label>
                    <Form.Control type="file" placeholder="Attach Any Two ID Proofs" multiple/>
                    <Form.Text className="text-muted d-none">
                      This Filed is Required!
                    </Form.Text>
                  </Form.Group>
                </Col>
              </Row>
              <Row>
                <Col sm={12}>
                  <Copyright />
                  <Form.Group id="submit_btn">
                    <Button type="submit">Sign in</Button>
                  </Form.Group>
                </Col>
              </Row>
            </Container>
          </Form>
        </div>
      </section>
    )
  }
}
