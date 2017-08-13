import React, { Component } from 'react'
import { observer } from 'mobx-react'
import Name from './Name'
import Store from './Store'
import './Message.css'

class App extends Component {
  render () {
    return (
      <div className='App'>
        <h2 style={{ gridArea: 'head' }}>
          Deadhood-Live-Chat
        </h2>
        <Name />
        <ul className='name'>
          <h4>Users</h4>
          {Store.namArr.map((e, indx) => <li key={indx}>{e}</li>)}
        </ul>
        <ul className='message'>
          {Store.messageArr.map((e, indx) => (
            <li key={indx}><b>{e.name}</b>: {e.messege}</li>
          ))}
        </ul>
      </div>
    )
  }
}

window.addEventListener('beforeunload', e => {
  Store.userref.remove()
  return false
})

export default observer(App)
