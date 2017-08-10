import React, { Component } from 'react'
import { observer } from 'mobx-react'
import Name from './Name'

class App extends Component {
  render () {
    return (
      <div>
        <Name />
      </div>
    )
  }
}

export default observer(App)
