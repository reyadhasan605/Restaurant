import axios from 'axios';
import React, { Component } from 'react'
import { Row, Col, Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { Alert } from 'reactstrap'
import { base } from '../../redux/baseUrl'

class Contactus extends Component {

    constructor(props) {
        super(props);
        this.state = {
            firstname: "",
            lastname: "",
            telnum: "",
            email: "",
            agree: false,
            contacttype: "",
            message: ""
        }
    }

    handelsubmit(event) {
        axios.post(base + 'feedback', this.state)
            .then(response => response.status)
            .then(status => console.log(status));

        this.setState({
            firstname: "",
            lastname: "",
            telnum: "",
            email: "",
            agree: false,
            contacttype: "",
            message: ""
        })
        event.preventDefault();
    }
    handelinputchange(event) {
        const value = event.target.type === 'checkbox' ? event.target.checked : event.target.value;
        const name = event.target.name;
        this.setState({
            [name]: value
        })
    }

    render() {
        document.title = "Contact"
        return (
            <div>
                <Alert isOpen={this.state.alertshow} color={this.state.alerttype}></Alert>
                <Form onSubmit={(event) => this.handelsubmit(event)}>
                    <Row form>
                        <Col md={6}>
                            <FormGroup>
                                <Label>First Name</Label>
                                <Input type="text" name="firstname" placeholder="First Name" value={this.state.firstname}
                                    onChange={(event) => this.handelinputchange(event)} />
                            </FormGroup>
                        </Col>
                        <Col md={6}>
                            <FormGroup>
                                <Label >Last Name</Label>
                                <Input type="text" name="lastname" placeholder="Last Name" value={this.state.lastname}
                                    onChange={(event) => this.handelinputchange(event)} />
                            </FormGroup>
                        </Col>
                    </Row>
                    <Row form>
                        <Col md={6}>
                            <FormGroup>
                                <Label >Telephone no.</Label>
                                <Input type="tel" name="telnum" placeholder="Tel. Number" value={this.state.telnum}
                                    onChange={(event) => this.handelinputchange(event)} />
                            </FormGroup>
                        </Col>
                    </Row>
                    <Row form>
                        <Col md={6}>
                            <FormGroup>
                                <Label >Email</Label>
                                <Input type="email" name="email" placeholder="Email" value={this.state.email}
                                    onChange={(event) => this.handelinputchange(event)} />
                            </FormGroup>
                        </Col>
                    </Row>


                    <Row form>
                        <Col md={6}>
                            <FormGroup>
                                <FormGroup check>
                                    <Label check>
                                        <Input type="checkbox" name="agree" checked={this.state.agree}
                                            onChange={(event) => this.handelinputchange(event)}
                                        />{' '}
                                        May we contact you?
                                    </Label>
                                </FormGroup>
                                <br />
                                <Label >Contact Type</Label>
                                <Input type="select" name="contacttype" value={this.state.contacttype}
                                    onChange={(event) => this.handelinputchange(event)}
                                >
                                    <option>Telephone</option>
                                    <option>Email</option>
                                </Input>
                            </FormGroup>
                        </Col>
                    </Row>

                    <Row form>
                        <Col md={10}>
                            <FormGroup>
                                <Label>Text Area</Label>
                                <Input type="textarea" name="message" value={this.state.message}
                                    onChange={(event) => this.handelinputchange(event)}
                                />
                            </FormGroup>
                        </Col>
                    </Row>

                    <Row form>
                        <Col md={6}>
                            <Button color="primary">Send feedback</Button>
                        </Col>
                    </Row>
                    <br />
                    <br />



                </Form>


            </div>
        );
    }
}
export default Contactus;