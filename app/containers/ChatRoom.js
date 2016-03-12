import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import * as actions from '../redux/actions/actions'
import ChatRoomWindow from '../components/ChatRoomWindow'
import ChatRoomList from '../components/ChatRoomList'
import ChatRoomInput from '../components/ChatRoomInput'
import NavBar from '../components/NavBar'
import socket from '../lib/socket'

export default class ChatRoom extends Component {

  componentDidMount() {
    const { dispatch, auth } = this.props
    socket.on('directMessage', (msg) => {
      console.log("receiving two message")
      dispatch({ type: 'RECEIVE_MESSAGE', msg, auth })
    })
    socket.on('addUser', (user) => {
      dispatch({ type: 'ADD_USER', user })
    })
    socket.on('removeUser', (user) => {
      dispatch({ type: 'REMOVE_USER', user })
    })
  }

  render() {
    const { users, params, auth, dispatch } = this.props
    return (
      <div className="chatroom">
        <div className="column friends-list">
          <ChatRoomList loggedInUser={ auth } users={ users } toUser={ params } />
        </div>
        <div className="column chat-box">
        <NavBar loggedInUser={ auth } dispatch={ dispatch } toUser={ params } users={ users } />
          <div className="chat-room-window">
            { this.props.children }
            <ChatRoomInput loggedInUser={ auth } toUser={ params.userId } />
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

export default connect(mapStateToProps)(ChatRoom)
