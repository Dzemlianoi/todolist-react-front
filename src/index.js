/* eslint-env node */

import React from 'react'
import { render } from 'react-dom'

import Application from './Application'

render(<Application />, document.getElementById('app'))

if (module.hot) {
  module.hot.accept('./Application', () => {
    const NextApplication = require('./Application').default
    render(<NextApplication />, document.getElementById('app'))
  })
}
