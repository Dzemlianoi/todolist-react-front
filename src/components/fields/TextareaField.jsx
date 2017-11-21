import React from 'react'
import { FormGroup, ControlLabel, FormControl } from 'react-bootstrap'

const TextareaField = ({ label, placeholder }) => (
  <FormGroup>
    {label && <ControlLabel>{label}</ControlLabel>}
    <FormControl componentClass="textarea" placeholder={placeholder} />
  </FormGroup>
)

export default TextareaField
