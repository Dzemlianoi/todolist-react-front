import React from 'react'
import { Form, Button } from 'react-bootstrap'
import TextField from 'components/fields/TextField'

const CreateForm = () => (
  <Form>
    <div className="mb-20">
      <TextField placeholder="Enter Project Name..." />
    </div>
    <Button type="submit" bsStyle="primary" className="mb-15 mr-15">
      Create Project
    </Button>
    <Button type="submit" bsStyle="default" className="mb-15 mr-15">
      Cancel
    </Button>
  </Form>
)

export default CreateForm
