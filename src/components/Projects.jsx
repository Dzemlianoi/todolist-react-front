import React from 'react'
import { Alert, Col,} from 'react-bootstrap'
import CreateForm from 'components/project/CreateForm'
import ProjectItem from 'components/project/ProjectItem'

const Projects = () => (
  <div className="row">
    <Col sm={8} smOffset={2}>
      <h2>Projects</h2>
      <Alert bsStyle="success" className="mb-10">
        <p className="mb-5"><b>Well done!</b> You have successfully done all tasks.</p>
      </Alert>
      <ProjectItem />
      <CreateForm />
    </Col>
  </div>
)

export default Projects
