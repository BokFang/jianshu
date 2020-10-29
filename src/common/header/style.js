import styled from "styled-components";
import navLogo from "../nav-logo.png";

export const HeaderWrapper = styled.div`
  height: 56px;
  border-bottom: 1px solid #f0f0f0;
  display: flex;
`
export const Logo = styled.a`
  height: 100%;
  width: 100px;
  background: url(${navLogo});
  background-size: contain;
`

export const NavbarCollapse = styled.div`
  flex: 1;
  display: flex;
  justify-content: space-between;
`

export const WriteBtn = styled.a`
  box-sizing: border-box;
  height:40px;
  width: 100px;
  line-height: 24px;
  margin: 8px 12px 0;
  border-radius: 20px;
  font-size: 15px;
  color: #fff;
  background-color: #ea6f5a;
  display: inline-block;
  margin-bottom: 0;
  font-weight: 400;
  text-align: center;
  vertical-align: middle;
  touch-action: manipulation;
  cursor: pointer;
  background-image: none;
  border: 1px solid transparent;
  white-space: nowrap;
  padding: 6px 12px;
`

export const NavItemWrapper = styled.div`
  display: flex;
`

export const SeacrhWrapper = styled.div`
  position: relative;
`

export const NavItem = styled.a`
  margin-right: 10px;
  line-height: 20px;
  box-sizing: border-box;
  height: 56px;
  line-height: 26px;
  padding: 15px;
  &.nav-active {
    color: #ea6f5a;
    text-decoration: none;
  }
`
export const NavSearch = styled.input`
  align-items: center;
  padding: 0 20px;
  width: 160px;
  height: 38px;
  font-size: 14px;
  border: 1px solid #eee;
  border-radius: 40px;
  background: #eee;
  box-sizing: border-box;
  border: none;
  outline: none;
  margin-top: 9px;
  &.slide-enter {
    transition: all .4s ease-out;
  }
  &.slide-enter-active {
    width: 240px;
  }
  &.slide-exit {
    transition: all .4s ease-out;
  }
  &.slide-exit-active {
    width: 160px;
  }
  &.focused {
    width: 240px;
  }
`
export const NavLogin = styled.div`
  color: #969696;
  margin: 11px 6px 0 10px;
  font-size: 15px;
  padding: 10px 12px;
`

export const NavRightWrapper = styled.div`
  display: flex;
`

export const NavRegistered = styled.div`
  width: 80px;
  height: 38px;
  line-height: 38px;
  margin: 9px 5px 0 15px;
  border: 1px solid rgba(236,97,73,.7);
  border-radius: 20px;
  font-size: 15px;
  color: #ea6f5a;
  text-align: center;
  user-select: none;
`

export const SvgAa = styled.svg`
  line-height: 20px;
  padding: 17px 10px;
  font-size: 24px;
`

export const SvgMagnifier = styled.svg`
  position: absolute;
  top: 12px;
  right: 8px;
  width: 30px;
  height: 30px!important;
  line-height: normal!important;
  padding: 0!important;
  color: #969696!important;
  text-align: center;
`