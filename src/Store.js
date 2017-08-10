import { observable } from 'mobx'

var Store = {
  name: '',
  mess: '',
  arr: []
}

export default observable(Store)
