import { fromJS } from "immutable";

const defaultState = fromJS({
  titleList: [], 
  articleList: [], 
  likeList: [], 
  rewardsList: [], 
  commentsList: [], 
  imgList: [], 
  userList: []
})
const homeReducer = (state = defaultState, action) => {
  switch (action.type) {
    case "change_home_recommand":
      return state.merge({
        titleList: fromJS(action.titleList),
        articleList: fromJS(action.articleList),
        likeList: fromJS(action.likeList),
        rewardsList: fromJS(action.rewardsList),
        commentsList: fromJS(action.commentsList),
        imgList: fromJS(action.imgList),
        userList: fromJS(action.userList)
      })
      
    default:
      return state
  }
}

export default homeReducer;