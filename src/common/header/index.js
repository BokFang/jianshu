import React from 'react';
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

const Header = (props) => {
  return (
    <HeaderWrapper>
      <Logo href="/" />
      <NavbarCollapse>
        <NavItemWrapper>
          <NavItem className="nav-active" href="/">首页</NavItem>
          <NavItem>下载App</NavItem>
          <SeacrhWrapper>
            <CSSTransition
              in={props.focused}
              timeout={400}
              classNames="slide"
            >
              <NavSearch
                placeholder="搜索"
                className={props.focused ? "focused" : ""}
                onFocus={props.searchOnFocus}
                onBlur={props.searchOnBlur}
              ></NavSearch>
            </CSSTransition>
            <SvgMagnifier className="icon"><use xlinkHref="#icon-magnifier"></use></SvgMagnifier>
            {getListArea(props.focused)}
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

const getListArea = (show) => {
  if(show) {
    return (
      <SearchInfo>
      <SearchInfoTitle>
        <span>热门搜索</span>
        <SearchInfoSwitch>换一批</SearchInfoSwitch>
      </SearchInfoTitle>
      <SearchInfoItem>理财</SearchInfoItem>
      <SearchInfoItem>毕业</SearchInfoItem>
      <SearchInfoItem>手账</SearchInfoItem>
      <SearchInfoItem>简书交友</SearchInfoItem>
      <SearchInfoItem>spring</SearchInfoItem>
      <SearchInfoItem>JavaScript</SearchInfoItem>
      <SearchInfoItem>node</SearchInfoItem>
      <SearchInfoItem>koa</SearchInfoItem>
    </SearchInfo>
    )
  }else return null
}

const mapStateToProps = (state) => {
  return {
    focused: state.get("header").get("focused")
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    searchOnFocus() {
      dispatch(actionCreators.searchFocus())
    },
    searchOnBlur() {
      dispatch(actionCreators.searchBlur())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);