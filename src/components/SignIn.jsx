import React from 'react'
import { Alert, Col, Form , Button} from 'react-bootstrap'
import TextField from './fields/TextField'

const SignIn = () => (
  <div className="row">
    <Col sm={8} smOffset={2} md={6} mdOffset={3}>
      <h2>Sign In</h2>
      <Alert bsStyle="danger">
        <p className="mb-5">Incorrect login or(and) password.</p>
      </Alert>
      <Form>
        <div className="mb-20">
          <TextField placeholder="User Name" />
          <TextField placeholder="Password" />
        </div>
        <Button type="submit" bsStyle="primary" className="mb-15 mr-15">
          Sign In
        </Button>
        <p>Do not have an account? <a href="/sign-up">Sign Up</a></p>
      </Form>
    </Col>
  </div>
)

export default SignIn
