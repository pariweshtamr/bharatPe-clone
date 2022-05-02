import styled from 'styled-components'

export const Nav = styled.div`
  position: fixed;
  top: 0;
  height: 13vh;
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

export const LogoLink = styled.a``

export const NavItems = styled.div`
  width: 78%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  list-style: none;
  font-size: 15px;

  a {
    text-decoration: none;
    color: #585371;
    font-weight: 500;
    letter-spacing: -1px;

    &:hover {
      color: #00afcb;
    }
  }
`
export const NavItem = styled.div``

export const NavLoginButton = styled.button`
  background: #00afcb;
  font-size: 14px;
  width: 4.5rem;
  padding: 0.7rem;
  border: none;
  border-radius: 4px;
  color: #fff;
  cursor: pointer;
`
export const NavHr = styled.hr`
  background-color: lightgray;
  margin: 0;
  opacity: 0.4 !important;
`

export const SidebarToggle = styled.div``

export const SidebarItems = styled.ul`
  list-style: none;
  font-size: 20px;
  display: flex;
  flex-direction: column;
  align-items: left;
  gap: 1rem;
  padding: 0 1.2rem;

  a {
    text-decoration: none;
    color: #211b3e;
    font-weight: 700;
    letter-spacing: -1px;

    &:hover {
      color: #00afcb;
    }
  }
`
