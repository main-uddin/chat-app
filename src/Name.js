import React, { Component } from 'react'
import Store from './Store'
import Messege from './Messege'

class Name extends Component {
  constructor (props) {
    super(props)
    this.state = {
      showName: true
    }
  }
  render () {
    return (
      <div>
        {this.state.showName
          ? <form
            onSubmit={e => {
              e.preventDefault()
              this.setState({
                showName: false
              })
            }}
            >
            <label>
                Name:
                <input
                  type='text'
                  onChange={e => {
                    Store.name = e.target.value
                  }}
                />
              <button type='submit'>click</button>
            </label>
          </form>
          : <label>
            <Messege />
          </label>}
      </div>
    )
  }
}

export default Name
