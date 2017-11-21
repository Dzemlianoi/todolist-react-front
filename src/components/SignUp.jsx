import React from 'react'
import { Alert, Col, Form , Button} from 'react-bootstrap'
import TextField from './fields/TextField'

const SignUp = () => (
  <div className="row">
    <Col sm={8} smOffset={2} md={6} mdOffset={3}>
      <h2>Sign Up</h2>
      <Alert bsStyle="success" className="mb-10">
        <p className="mb-5"><strong>Well done!</strong> You have successfully registered.</p>
      </Alert>
      <Alert bsStyle="danger">
        <p className="mb-5">Incorrect login or(and) password.</p>
      </Alert>
      <Form>
        <div className="mb-20">
          <TextField placeholder="User Name" />
          <TextField placeholder="Password" />
          <TextField placeholder="Confirm Password" />
        </div>
        <Button type="submit" bsStyle="primary" className="mb-15 mr-15">
          Sign Up
        </Button>
        <p>Already a member? <a href="/sign-in">Sign In</a></p>
      </Form>
    </Col>
  </div>
)

export default SignUp
