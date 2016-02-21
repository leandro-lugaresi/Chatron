
import "./less/site.less";
import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { Router, hashHistory, Route, IndexRoute } from 'react-router'
import configureStore from './redux/store'
import ChatRoom from './containers/ChatRoom'

const store = configureStore()

ReactDOM.render((
  <Provider store={store}>
    <Router history={ hashHistory } >
      <Route path='/' component={ChatRoom} />
    </Router>
  </Provider>
), document.getElementById('app'))
