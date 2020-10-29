import React, { Component } from 'react';
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


class Header extends Component {
  constructor(props) {
    super(props)
    this.state = {
      focused: false
    }
    this.searchOnFocus = this.searchOnFocus.bind(this)
    this.searchonBlur = this.searchonBlur.bind(this)
  }
  render() {
    return (
      <HeaderWrapper>
        <Logo href="/" />
        <NavbarCollapse>
          <NavItemWrapper>
            <NavItem className="nav-active" href="/">首页</NavItem>
            <NavItem>下载App</NavItem>
            <SeacrhWrapper>
              <CSSTransition
                in={this.state.focused}
                timeout={400}
                classNames="slide"
              >
                <NavSearch
                  placeholder="搜索"
                  className={this.state.focused ? "focused" : ""}
                  onFocus={this.searchOnFocus}
                  onBlur={this.searchonBlur}
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

  searchOnFocus() {
    this.setState({
      focused: true
    })
  }

  searchonBlur() {
    this.setState({
      focused: false
    })
  }
}

export default Header;