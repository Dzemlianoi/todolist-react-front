import React from 'react'
import { FormGroup, Checkbox } from 'react-bootstrap'

const CheckboxField = ({ className, title, extraInfo }) => (
  <FormGroup className={className}>
    <Checkbox
      inline
    >
      <span>{ title }</span>
      <div className="in-green-500 font-10">{ extraInfo }</div>
    </Checkbox>
  </FormGroup>
)

export default CheckboxField
