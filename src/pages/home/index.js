import React, { Component } from "react";
import { connect } from "react-redux";
import "./style.scss";
import Recommend from "./component/Recommand";
import List from "./component/List";
import axios from "axios";

class Home extends Component {
  render() {
    return (
      <div className="home-wrapper">
        <div className="home-left">
          {this.getRecommandList()}
        </div>
        <div className="home-right">
          <List />
        </div>
      </div>
    )
  }

  getRecommandList() {
    const { titleList, articleList, likeList, rewardsList, commentsList, imgList, userList } = this.props;
    const newTitleList = titleList.toJS()
    const newArticleList = articleList.toJS()
    const newLikeList = likeList.toJS()
    const newRewardsList = rewardsList.toJS()
    const newCommentsList = commentsList.toJS()
    const newImgList = imgList.toJS()
    const newUserList = userList.toJS()
    const recommandList = []

    if (newTitleList.length) {
      for (let i = 0; i < newTitleList.length; i++) {
        recommandList.push(
          <Recommend
            key={newTitleList[i]}
            title={newTitleList[i]}
            article={newArticleList[i]}
            like={newLikeList[i]}
            rewards={newRewardsList[i]}
            comments={newCommentsList[i]}
            img={newImgList[i]}
            user={newUserList[i]}
          ></Recommend>
        )
      }
      return (
        <div>{recommandList}</div>
      )
    }

  }

  componentDidMount() {
    axios.get("/api/homeRecommand.json").then((res) => {
      const titleList = [], articleList = [], likeList = [], rewardsList = [], commentsList = [], imgList = [], userList = []
      res.data.forEach((item) => {
        titleList.push(item.object.data.title)
        articleList.push(item.object.data.public_abbr)
        likeList.push(item.object.data.likes_count)
        rewardsList.push(parseInt((item.object.data.total_fp_amount)/1000))
        commentsList.push(item.object.data.public_comments_count)
        imgList.push(item.object.data.list_image_url)
        userList.push(item.object.data.user.nickname)
      })
      const action = {
        type: "change_home_recommand",
        titleList: titleList,
        articleList: articleList,
        likeList: likeList,
        rewardsList: rewardsList,
        commentsList: commentsList,
        imgList: imgList,
        userList: userList
      }
      this.props.changeHomeRecommand(action)
    }).catch((error) => {
      console.log(error)
    })
  }
}

const mapDispatch = (dispatch) => ({
  changeHomeRecommand(action) {
    dispatch(action)
  }
})

const mapStateToProps = (state) => {
  return {
    titleList: state.getIn(["home", "titleList"]),
    articleList: state.getIn(["home", "articleList"]),
    likeList: state.getIn(["home", "likeList"]),
    rewardsList: state.getIn(["home", "rewardsList"]),
    commentsList: state.getIn(["home", "commentsList"]),
    imgList: state.getIn(["home", "imgList"]),
    userList: state.getIn(["home", "userList"]),
  }
}

export default connect(mapStateToProps, mapDispatch)(Home);