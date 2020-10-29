import React, { Component } from 'react';
import { 
  HeaderWrapper, 
  Logo, 
  NavbarCollapse, 
  WriteBtn,
  NavItem,
  NavSearch,
  NavLogin,
  NavRegistered 
} from "./style";


class Header extends Component {
  render() {
    return (
      <HeaderWrapper>
        <Logo href="/" />
        <NavbarCollapse>
          <ul style={{display: "flex"}}>
          <NavItem className="nav-active">首页</NavItem>
          <NavItem>下载App</NavItem>
          <NavSearch placeholder="搜索"></NavSearch>
          </ul>
          <div style={{display: "flex"}}>
            <NavLogin>登录</NavLogin>
            <NavRegistered>注册</NavRegistered>
          </div>
        </NavbarCollapse>
        <WriteBtn>写文章</WriteBtn>
      </HeaderWrapper>
    )
  }
}

export default Header;