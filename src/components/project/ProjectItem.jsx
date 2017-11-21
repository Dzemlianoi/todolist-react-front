import React, { Component } from 'react'
import classNames from 'classnames'
import { Form, Button } from 'react-bootstrap'
import TextField from 'components/fields/TextField'
import DeleteModal from 'components/project/DeleteModal'
import ProjectTaskList from 'components/project/ProjectTaskList'

class ProjectItem extends Component {
  constructor() {
    super()
    this.state = {
      open: false,
      projectInfoClass: '',
      projectClass: ''
    }
    this.toggle = this.toggle.bind(this)
    this.edit = this.edit.bind(this)
    this.closeEdit = this.closeEdit.bind(this)
  }

  toggle() {
    if(this.state.open) {
      this.setState({ projectInfoClass: '', open: false })
    } else {
      this.setState({ projectInfoClass: 'open', open: true })
    }
  }

  edit(){
    this.setState({ projectClass: 'edit' })
    if(this.state.open) {
      this.setState({ projectInfoClass: '', open: false })
    }
  }

  closeEdit(){
    this.setState({ projectClass: '' })
  }

  render(){
    return(
      <div className={classNames('project', this.state.projectClass)}>
        <div className="project-edit">
          <Form>
            <TextField />
            <Button bsStyle="primary" className="mb-5 mr-5">Save</Button>
            <Button bsStyle="default" className="mb-5 mr-5" onClick={this.closeEdit}>Cancel</Button>
          </Form>
        </div>
        <div className={classNames('project-info', this.state.projectInfoClass)}>
          <div className="project-info__header">
            <p className="project-info__title" onClick={this.toggle}>
              <span className="project-info__title-icon  icon icon-arrow-up" />
              My first to do list
            </p>
            <div className="project-info__actions">
              <span className="align-middle d-inline-block mb-5 mr-5" onClick={this.edit}>Edit</span>
              <DeleteModal />
            </div>
          </div>
          <div className="project-info__body">
            <ProjectTaskList />
          </div>
        </div>
      </div>
    )
  }
}

export default ProjectItem
