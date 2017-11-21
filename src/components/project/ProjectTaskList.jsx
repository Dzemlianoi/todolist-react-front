import React from 'react'
import { Button } from 'react-bootstrap'
import CheckboxField from 'components/fields/CheckboxField'
import TextField from 'components/fields/TextField'
import DeleteModal from 'components/project/DeleteModal'
import CommentModal from 'components/project/CommentModal'

const TaskItem = () => (
  <div className="project-task">
    <CheckboxField title="Buy bicycle on Toms birthday." className="flex-grow mb-0" extraInfo="23/02/2017" />
    <div className="no-shrink pt-5">
      <CommentModal />
      <span className="align-middle d-inline-block mb-5">Date</span>
      <span className="align-middle d-inline-block mb-5">Edit</span>
      <DeleteModal />
    </div>
  </div>
)

const TaskItemCreateForm = () => (
  <form>
    <TextField placeholder="Enter Task Name..." className="project-task-edit-field" />
    <div className="divider" />
    <div className="project-task-edit-btn">
      <Button type="submit" bsStyle="info" className="mb-5 mr-15">
        Add Task
      </Button>
      <Button type="submit" bsStyle="default" className="mb-5 mr-15">
        Cancel
      </Button>
    </div>
  </form>
)

const ProjectTaskList = () => (
  <div>
    <TaskItem />
    <TaskItem />
    <TaskItemCreateForm />
  </div>
)

export default ProjectTaskList
