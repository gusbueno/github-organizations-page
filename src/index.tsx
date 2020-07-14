import React from 'react'
import { render } from 'react-dom'
import { createStore, applyMiddleware, compose } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'

import rootReducer from './reducers'
import OrganizationDetail from './OrganizationDetail'

const store = createStore(
  rootReducer(),
  compose(
    applyMiddleware(thunk),
    // uncomment this line if you have already installed redux dev tool plugin in Chrome
    // (window as any).__REDUX_DEVTOOLS_EXTENSION__ && (window as any).__REDUX_DEVTOOLS_EXTENSION__()
  )
)

render(
  <Provider store={store}>
    <OrganizationDetail />
  </Provider>,
  document.getElementById('root')
)
