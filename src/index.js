import React from 'react'
import { render } from 'react-dom'
import firebase from 'firebase'
import { Provider } from 'mobx-react'
import App from './App'
import './style.css'
import './normalize.css'

var config = {
  apiKey: 'AIzaSyDGUro2MMRVL71jLbOI-LVEf1YYAsZpbdI',
  authDomain: 'practice-779a9.firebaseapp.com',
  databaseURL: 'https://practice-779a9.firebaseio.com',
  projectId: 'practice-779a9',
  storageBucket: '',
  messagingSenderId: '959350439671'
}
firebase.initializeApp(config)

render(
  <Provider firebase={firebase}><App /></Provider>,
  document.getElementById('root')
)
