import React, { useState } from 'react';
import { connect, useSelector } from 'react-redux';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { login } from '../actions/userActions';

function Greeting(props) {
  const isLoggedIn = useSelector(state => state.user.loggedIn);
  if (isLoggedIn) {
    return <p>Logged in</p>;
  }
  return <p>Not logged in</p>;
}

const Login = ({ dispatch }) => {
  const [username, setUserName] = useState();
  const [password, setPassword] = useState();

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
              <Form.Control type="text" placeholder="Username" onChange={e => setUserName(e.target.value)} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" onChange={e => setPassword(e.target.value)} />
            </Form.Group>
            <Button variant="primary" type="submit">
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
  isLoggedIn: state.user.isLoggedin,
  username: state.user.userName
})

export default connect(mapStateToProps)(Login)