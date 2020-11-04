import * as actionTypes from "./actionTypes";
import { fromJS } from "immutable";

const defaultState = fromJS({
  focused: false,
  mouseIn: false,
  list: [],
  page: 1,
  totalPage: 5
})
const headerReducer = (state = defaultState, action) => {
  switch (action.type) {
    case actionTypes.SEARCH_FOCUS:
      return state.set("focused", true)
    case actionTypes.SEARCH_BLUR:
      return state.set("focused", false)
    case actionTypes.CHANGE_LIST:
      return state.set("list", action.data)
    case actionTypes.MOUSE_IN:
      return state.set("mouseIn", true)
    case actionTypes.MOUSE_OUT:
      return state.set("mouseIn", false)
    case actionTypes.PAGE_CHANGE:
      return state.set("page", action.page)
    default:
      return state
  }
}

export default headerReducer;