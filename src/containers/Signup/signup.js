import { Form, Button, Container, Row, Col } from "react-bootstrap";
import Layout from "../../components/Layout/layout";
import Input from "../../components/UI/Input/input";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { useState } from "react";
import { signup } from "../../store/actions";

const Signup = (props) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const auth = useSelector((state) => state.auth);
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const userSignup = (e) => {
    e.preventDefault();
    const user = { firstName, lastName, email, password };
    dispatch(signup(user));
  };

  if (auth.authenticate) {
    return <Navigate to="/" />;
  }

  if (user.loading) {
    return <p>Loading...</p>;
  }

  return (
    <Layout>
      <Container>
        {user.message}
        <Row className="mt-5">
          <Col md={{ span: 6, offset: 3 }}>
            <Form onSubmit={userSignup}>
              <Row>
                <Col md={6}>
                  <Input
                    label="First Name"
                    placeholder="Enter first name"
                    value={firstName}
                    type="text"
                    onChange={(e) => setFirstName(e.target.value)}
                  />
                </Col>
                <Col md={6}>
                  <Input
                    label="Last Name"
                    placeholder="Enter last name"
                    value={lastName}
                    type="text"
                    onChange={(e) => setLastName(e.target.value)}
                  />
                </Col>
              </Row>
              <Input
                label="Email"
                placeholder="Enter email"
                value={email}
                type="email"
                onChange={(e) => setEmail(e.target.value)}
              />

              <Input
                label="Password"
                placeholder="Enter password"
                value={password}
                type="password"
                onChange={(e) => setPassword(e.target.value)}
              />
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </Layout>
  );
};

export default Signup;
