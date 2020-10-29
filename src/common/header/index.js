import React from 'react';
import { connect } from "react-redux";
import { CSSTransition } from 'react-transition-group';
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
  SeacrhWrapper
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

const mapStateToProps = (state) => {
  return {
    focused: state.focused
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    searchOnFocus() {
      const action = {
        type: "search_focused"
      }
      dispatch(action)
    },
    searchOnBlur() {
      const action = {
        type: "search_blur"
      }
      dispatch(action)
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);