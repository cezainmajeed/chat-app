import React from "react";
import {Form,Button,Card,Alert,Container} from "react-bootstrap";
import { Link } from "react-router-dom";


function Login() {
  return (
    <Container className="d-flex align-items-center justify-content-center" style={{minHeight:"100vh"}}>
    <div className="w-100" style={{maxWidth:"350px"}}>
    <Card>
    <Card.Body>
    <h2 className="text-center mb-4">Login</h2>
    <Form>

    <Form.Group id="email">
    <Form.Label>Email</Form.Label>
    <Form.Control type="email" required />
    </Form.Group>

    <Form.Group id="password">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" required />
    </Form.Group>


    <Button className="w-100 mt-4" type="submit">Login</Button>

    </Form>

    <div className="w-100 text-center mt-3">
      <Link to="/forgot-password">Forgot password?</Link>
    </div>


    </Card.Body>
    </Card>

    <Button variant="danger" className="w-100 mt-4 mb-2">Signup with Google</Button>

    <div className="w-100 text-center mt-2">
      New to this website? <Link to="/signup">Signup</Link>
    </div>
    </div>
    </Container>
  );
}

export default Login;
