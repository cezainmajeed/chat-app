import React from "react";
import {Form,Button,Card,Alert,Container} from "react-bootstrap";
import { Link } from "react-router-dom";


function SignUp() {
  return (
    <Container className="d-flex align-items-center justify-content-center" style={{minHeight:"100vh"}}>
    <div className="w-100" style={{maxWidth:"350px"}}>
    <Card>
    <Card.Body>
    <h2 className="text-center mb-4">Sign Up</h2>
    <Form>

    <Form.Group id="name">
    <Form.Label>Name</Form.Label>
    <Form.Control type="name" required />
    </Form.Group>

    <Form.Group id="email">
    <Form.Label>Email</Form.Label>
    <Form.Control type="email" required />
    </Form.Group>

    <Form.Group id="password">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" required />
    </Form.Group>

    <Form.Group id="confirm-password">
    <Form.Label>Confirm Password</Form.Label>
    <Form.Control type="password" required />
    </Form.Group>

    <Form.Group id="file">
    <Form.Label>Upload your picture.</Form.Label>
    <Form.Control type="file" p={1.5} accept="image/*" />
    </Form.Group>


    <Button className="w-100 mt-4" type="submit">Signup</Button>

    </Form>

    </Card.Body>
    </Card>

    <Button variant="danger" className="w-100 mt-4 mb-2">Signup with Google</Button>

    <div className="w-100 text-center mt-2">
      Already have an account? <Link to="/login">Login</Link>
    </div>
    </div>
    </Container>
  );
}

export default SignUp;
