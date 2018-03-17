import { render } from 'react-dom'

export function getRootComponentHotModuleReplacement() {
  if (module.hot) {
    module.hot.accept('../components/Application', () => {
      const NextApplication = require('../components/Application').default
      render(<NextApplication />, document.getElementById('app'))
    })
  }
}

export function getReducersHotModuleReplacement() {
  if (module.hot) {
    module.hot.accept('../reducers', () => {
      const nextRootReducer = require('../reducers')
      store.replaceReducer(nextRootReducer)
    })
  }
}
