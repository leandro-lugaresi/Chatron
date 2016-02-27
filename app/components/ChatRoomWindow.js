import React, { Component } from 'react'
import { connect } from 'react-redux'
import Message from './Message'

export default class ChatRoomWindow extends Component {
  render() {
    const { messages, users } = this.props
    console.log("Messages ------>", messages)
    return (
      <div>
        { (messages && messages.length > 0) ? messages.map((message, i) => {
          return (
            <Message from={ message.from } content={ message.content } key={ i }/>
          )
        }) : null }
      </div>
    )
  }
}

function mapStateToProps(state, props) {
  console.log("state.messages", state.messages)
  return {
    users: state.users,
    messages: state.messages[props.params.userId]
  }
}

export default connect(mapStateToProps)(ChatRoomWindow)
