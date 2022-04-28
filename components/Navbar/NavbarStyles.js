import styled from 'styled-components'

export const NavContainer = styled.nav`
  height: 82px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 0 3rem;
`

export const LogoLink = styled.a``
export const StyledLink = styled.a`
  padding: 0 1rem;
  color: #585371;
  font-weight: 500;
  letter-spacing: -1px;

  &:hover {
    color: #00afcb;
  }
`
export const Left = styled.nav``

export const Right = styled.nav`
  font-size: 14px;
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
