import React, { Component } from 'react';
import { connect } from "react-redux";
import { CSSTransition } from 'react-transition-group';
import { actionCreators } from "./store";
import {
  HeaderWrapper,
  Logo,
  NavbarCollapse,
  WriteBtn,
  NavItem,
  NavSearch,
  NavLogin,
  NavRegistered,
  NavItemWrapper,
  NavRightWrapper,
  SvgAa,
  SvgMagnifier,
  SeacrhWrapper,
  SearchInfo,
  SearchInfoTitle,
  SearchInfoSwitch,
  SearchInfoItem
} from "./style";

class Header extends Component {
  render() {
    const { focused, list, searchOnFocus, searchOnBlur, } = this.props;
    return (
      <HeaderWrapper>
        <Logo href="/" />
        <NavbarCollapse>
          <NavItemWrapper>
            <NavItem className="nav-active" href="/"><svg className="icon"><use xlinkHref="#icon-compass"></use></svg>首页</NavItem>
            <NavItem><svg className="icon"><use xlinkHref="#icon-download"></use></svg>下载App</NavItem>
            <SeacrhWrapper>
              <CSSTransition
                in={focused}
                timeout={400}
                classNames="slide"
              >
                <NavSearch
                  placeholder="搜索"
                  className={focused ? "focused" : ""}
                  onFocus={() => searchOnFocus(list)}
                  onBlur={searchOnBlur}
                ></NavSearch>
              </CSSTransition>
              <SvgMagnifier className="icon"><use xlinkHref="#icon-magnifier"></use></SvgMagnifier>
              {this.getListArea()}
            </SeacrhWrapper>
          </NavItemWrapper>
          <NavRightWrapper>
            <SvgAa className="icon"><use xlinkHref="#icon-Aa"></use></SvgAa>
            <NavLogin>登录</NavLogin>
            <NavRegistered>注册</NavRegistered>
          </NavRightWrapper>
        </NavbarCollapse>
        <WriteBtn><svg className="icon"><use xlinkHref="#icon-yumaobi"></use></svg>写文章</WriteBtn>
      </HeaderWrapper>
    )
  }
  getListArea() {
    const { focused, list, page, totalPage, mouseIn, handleMouseEnter, handleMouseLeave, handlePageChange } = this.props;
    const newList = list.toJS()
    const pageList = []

    if (newList.length) {
      for (let i = (page - 1) * 10; i < page * 10; i++) {
        pageList.push(
          <SearchInfoItem key={newList[i]}>{newList[i]}</SearchInfoItem>
        )
      }
    }

    if (focused || mouseIn) {
      return (
        <SearchInfo
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <SearchInfoTitle>
            <span>热门搜索</span>
            <SearchInfoSwitch
              onClick={() => { handlePageChange(page, totalPage) }}
            >
              <svg className="icon"><use xlinkHref="#icon-spin"></use></svg>
              换一批
              </SearchInfoSwitch>
          </SearchInfoTitle>
          {pageList}
        </SearchInfo>
      )
    } else return null
  }
}

const mapStateToProps = (state) => {
  return {
    focused: state.getIn(["header", "focused"]),
    mouseIn: state.getIn(["header", "mouseIn"]),
    list: state.getIn(["header", "list"]),
    page: state.getIn(["header", "page"]),
    totalPage: state.getIn(["header", "totalPage"]),
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    searchOnFocus(list) {
      dispatch(actionCreators.searchFocus())
      if (list.size === 0) dispatch(actionCreators.getSearchList())
    },
    searchOnBlur() {
      dispatch(actionCreators.searchBlur())
    },
    handleMouseEnter() {
      dispatch(actionCreators.mouseIn())
    },
    handleMouseLeave() {
      dispatch(actionCreators.mouseOut())
    },
    handlePageChange(page, totalPage) {

      if (page < totalPage) {
        dispatch(actionCreators.pageChange(page + 1))
      } if (page === totalPage) {
        dispatch(actionCreators.pageChange(1))
      }
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);