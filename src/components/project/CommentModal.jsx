import React, { Component } from 'react'
import { Modal, Button } from 'react-bootstrap'
import TextareaField from 'components/fields/TextareaField'

class CommentModal extends Component {
  constructor() {
    super()
    this.state = {
      showModal: false
    }
    this.close = this.close.bind(this)
    this.open = this.open.bind(this)
  }

  close() {
    this.setState({ showModal: false})
  }

  open() {
    this.setState({ showModal: true })
  }

  render() {
    return (
      <div className="align-middle d-inline-block mb-5">
        <span onClick={this.open}>
          2 Comment
        </span>
        <Modal
          bsSize="small"
          show={this.state.showModal}
          onHide={this.close}
        >
          <Modal.Header closeButton>
            <Modal.Title className="in-black">Add comment</Modal.Title>
          </Modal.Header>
          <Modal.Body className="pb-5">
            <TextareaField placeholder="Enter Your Comment" />
          </Modal.Body>
          <Modal.Footer className="text-center">
            <Button bsStyle="primary">Save</Button>
            <Button bsStyle="default" onClick={this.close}>Cancel</Button>
          </Modal.Footer>
          <div className="pb-5">
            <div className="divider" />
            <div className="pt-15 pr-15 pb-5 pl-15">
              <div>
                <span className="mr-15 in-grey-200">25/11/2018</span>
                <span>Delete</span>
              </div>
              <p className="mb-5">Tourth comment to this task.</p>
            </div>
          </div>
        </Modal>
      </div>
    )
  }
}

export default CommentModal
