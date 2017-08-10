import React, { Component } from 'react'
import { observer } from 'mobx-react'
import Store from './Store'

class Messege extends Component {
  render () {
    return (
      <div>
        <form
          onSubmit={e => {
            e.preventDefault()
            Store.arr.push({
              name: Store.name,
              messege: Store.mess
            })
          }}
        >
          Messege:<input
            type='text'
            onChange={e => {
              Store.mess = e.target.value
            }}
          />
          <button type='submit'>sumbit</button>
        </form>
        <ul>
          {Store.arr.map(e => <li>{e.name} : {e.messege}</li>)}
        </ul>
      </div>
    )
  }
}

export default observer(Messege)
