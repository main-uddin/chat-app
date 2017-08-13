import React, { Component } from 'react'
import { observer, inject } from 'mobx-react'
import Messege from './Messege'
import Store from './Store'
import './Name.css'

class Name extends Component {
  constructor (props) {
    super(props)
    this.state = {
      showName: true
    }
  }
  render () {
    return this.state.showName
      ? <form
        style={{
          gridArea: 'input'
        }}
        onSubmit={e => {
          e.preventDefault()
          Store.userref = this.props.firebase.database().ref('name-list').push(Store.name)
          this.setState({
            showName: false
          })
        }}
        >
        <label>
            Name:&nbsp;
            <input
              type='text'
              onChange={e => Object.assign(Store, { name: e.target.value })}
            />
        </label>
        <button type='submit'>Submit</button>
      </form>
      : <Messege />
  }
  componentDidMount () {
    this.props.firebase.database().ref('name-list').on('value', data => {
      if (data.val()) {
        const newArr = Object.values(data.val())
        Store.namArr = newArr
      }
    })
  }
}

export default inject('firebase')(observer(Name))
