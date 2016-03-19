import React, { Component, PropTypes } from 'react'
import _ from 'lodash'
import { connect } from 'react-redux'
import FriendsList from '../components/FriendsList'

export default class Chatroom extends Component {

  render () {
    const { users, auth, params } = this.props
    return (
      <div className="window">
        <div className="window-content">
          <div className="pane-group">
            <div className="pane-sm sidebar">
              <img src='public/images/chatron-logo.png' className="chatron-logo" width='100px' />
              <FriendsList loggedInUser={ auth } users={ users } toUser={ params }/>
            </div>
            <div className="pane">
              { this.props.children }
            </div>
          </div>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state, props) {
  return {
    users: state.users,
    auth: state.auth
  }
}

export default connect(mapStateToProps)(Chatroom)
