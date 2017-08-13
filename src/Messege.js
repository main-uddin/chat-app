import React, { Component } from 'react'
import { inject, observer } from 'mobx-react'
import Store from './Store'

class Messege extends Component {
  render () {
    return (
      <form
        style={{ gridArea: 'input' }}
        onSubmit={e => {
          e.preventDefault()
          this.props.firebase.database().ref('message-list').push({
            name: Store.name,
            messege: Store.mess
          })
          Store.mess = ''
        }}
      >
        <label>
          Message: <input
            style={{ gridArea: 'input' }}
            type='text'
            onChange={e => {
              Store.mess = e.target.value
            }}
            value={Store.mess}
            autoFocus
          />
        </label>
        <button type='submit'>Submit</button>
      </form>
    )
  }
  componentDidMount () {
    this.props.firebase.database().ref('message-list').on('value', data => {
      if (data.val()) Store.messageArr = Object.values(data.val()).reverse()
    })
  }
}

export default inject('firebase')(observer(Messege))
