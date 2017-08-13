import { observable } from 'mobx'
const Store = {
  userref: null,
  mess: '',
  name: '',
  namArr: [],
  messageArr: []
}

export default observable(Store)
