import React from 'react'
import Header from 'components/Header'
import SignUp from 'components/SignUp'
import SignIn from 'components/SignIn'
import Projects from 'components/Projects'

import 'scss/application.scss'

const Application = () =>
  <div>
    <Header />
    <div className="page-container">
      <div className="container">
        <SignIn />
        <SignUp />
        <Projects />
      </div>
    </div>
  </div>

export default Application
