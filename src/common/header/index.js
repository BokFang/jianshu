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
    const { focused, searchOnFocus, searchOnBlur } = this.props;
    return (
      <HeaderWrapper>
        <Logo href="/" />
        <NavbarCollapse>
          <NavItemWrapper>
            <NavItem className="nav-active" href="/">首页</NavItem>
            <NavItem>下载App</NavItem>
            <SeacrhWrapper>
              <CSSTransition
                in={focused}
                timeout={400}
                classNames="slide"
              >
                <NavSearch
                  placeholder="搜索"
                  className={focused ? "focused" : ""}
                  onFocus={searchOnFocus}
                  onBlur={searchOnBlur}
                ></NavSearch>
              </CSSTransition>
              <SvgMagnifier className="icon"><use xlinkHref="#icon-magnifier"></use></SvgMagnifier>
              {this.getListArea(focused)}
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
    const { focused, list } = this.props;
    if (focused) {
      return (
        <SearchInfo>
          <SearchInfoTitle>
            <span>热门搜索</span>
            <SearchInfoSwitch>换一批</SearchInfoSwitch>
          </SearchInfoTitle>
          {
            list.map((item) => {
              return <SearchInfoItem key={item}>{item}</SearchInfoItem>
            })
          }
        </SearchInfo>
      )
    } else return null
  }
}

const mapStateToProps = (state) => {
  return {
    focused: state.getIn(["header", "focused"]),
    list: state.getIn(["header", "list"])
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    searchOnFocus() {
      dispatch(actionCreators.searchFocus())
      dispatch(actionCreators.getSearchList())
    },
    searchOnBlur() {
      dispatch(actionCreators.searchBlur())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);