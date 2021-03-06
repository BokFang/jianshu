import * as actionTypes from "./actionTypes";
import axios from "axios";
import { fromJS } from "immutable";

export const searchFocus = () => ({
  type: actionTypes.SEARCH_FOCUS
})

export const searchBlur = () => ({
  type: actionTypes.SEARCH_BLUR
})

export const mouseIn = () => ({
  type: actionTypes.MOUSE_IN
})

export const mouseOut = () => ({
  type: actionTypes.MOUSE_OUT
})

export const pageChange = (page) => ({
  type: actionTypes.PAGE_CHANGE,
  page: page
})

const changeList = (data) => ({
  type: actionTypes.CHANGE_LIST,
  data: fromJS(data)
})

export const getSearchList = () => {
  return (dispatch) => {
    axios.get("/api/headerList.json").then((res) => {
      const data = res.data.data
      dispatch(changeList(data))
    }).catch((error) => {
      console.log(error)
    })
  }
}