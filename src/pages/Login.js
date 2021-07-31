import React, { useState } from 'react';
import { connect, useSelector } from 'react-redux';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { login } from '../actions/userActions';
import { Redirect } from 'react-router-dom'

function Greeting() {
  const loggedIn = useSelector(state => state.user.loggedIn);
  if (loggedIn) {
    return <Redirect to="/" />;
  }
  return (null);
}

const Login = ({ dispatch }) => {
  const [username, setUserName] = useState();
  const [password, setPassword] = useState();
  const loggingIn = useSelector(state => state.user.loggingIn);

  const handleSubmit = async e => {
    e.preventDefault();
    if (username && password) {
      dispatch(login(username, password));
    }
  }

  return (
    <Container>
      <Row>
        <Col md={{ span: 4, offset: 4 }}>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Username</Form.Label>
              <Form.Control type="text" readOnly={loggingIn} placeholder="Username" onChange={e => setUserName(e.target.value)} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" readOnly={loggingIn} placeholder="Password" onChange={e => setPassword(e.target.value)} />
            </Form.Group>
            <Button variant="primary" disabled={loggingIn} type="submit">
              Login
            </Button>
            <Greeting />
          </Form>
        </Col>
      </Row>
    </Container>
  )
}

const mapStateToProps = (state) => ({
  loggedIn: state.user.loggedIn,
  loggingIn: state.user.loggingIn,
  username: state.user.userName
})

export default connect(mapStateToProps)(Login)