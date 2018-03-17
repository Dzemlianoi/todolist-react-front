/* eslint-env node */

import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';
import { prepareStore } from './store/configuration.js'
import { getRootComponentHotModuleReplacement } from './utils/hot_module'
import Application from './components/Application'

render(
  <Provider store={prepareStore()}>
    <Application />
  </Provider>,
  document.getElementById('app')
)

getRootComponentHotModuleReplacement()
