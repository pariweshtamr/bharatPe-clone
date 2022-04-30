import styled from 'styled-components'

export const Nav = styled.div`
  position: fixed;
  top: 0;
  height: 90px;
  width: 100%;
  z-index: 999;
  background: #fbfbfd;
`

export const NavContainer = styled.nav`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`

export const NavContent = styled.div``

export const LogoLink = styled.a``
export const StyledLink = styled.a`
  padding: 0 1rem;
  color: #585371;
  font-weight: 500;
  letter-spacing: -1px;
  text-decoration: none;

  &:hover {
    color: #00afcb;
  }
`
export const Left = styled.nav``

export const Right = styled.nav`
  font-size: 15px;
`

export const NavLoginButton = styled.button`
  background: #00afcb;
  font-size: 14px;
  width: 4.1rem;
  padding: 0.8rem;
  border: none;
  border-radius: 4px;
  color: #fff;
  cursor: pointer;
`
export const NavHr = styled.hr`
  background-color: lightgray;
  margin: 0;
`
