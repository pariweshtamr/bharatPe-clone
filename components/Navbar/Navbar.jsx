import Link from 'next/link'
import Image from 'next/image'
import {
  NavContainer,
  LogoLink,
  NavLoginButton,
  NavHr,
  Nav,
  NavItems,
  NavItem,
  SidebarToggle,
  SidebarItems,
} from './NavbarStyles'
import { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { navItems } from '../data'

const Navbar = () => {
  const [mobile, setMobile] = useState(false)
  const [sidebar, setSidebar] = useState(false)

  useEffect(() => {
    if (window.innerWidth < 1065) {
      setMobile(true)
    }
  }, [])

  useEffect(() => {
    const handleResize = () => {
      window.innerWidth < 1065 ? setMobile(true) : setMobile(false)
    }
    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <>
      {/* <Nav>
        <NavContainer className="container">

          <Left>
            <Link href="/" passHref>
              <LogoLink>
                <Image
                  src="/images/logo.svg"
                  alt=""
                  width="150px"
                  height="41.047px"
                />
              </LogoLink>
            </Link>
          </Left>

          <Right>
            <Link href="/" passHref>
              <StyledLink>About Us</StyledLink>
            </Link>
            <Link href="/" passHref>
              <StyledLink>Business Solution</StyledLink>
            </Link>
            <Link href="/" passHref>
              <StyledLink>Careers</StyledLink>
            </Link>
            <Link href="/" passHref>
              <StyledLink>Blog</StyledLink>
            </Link>
            <Link href="/" passHref>
              <StyledLink>Contact Us</StyledLink>
            </Link>

            <NavLoginButton>Login</NavLoginButton>
          </Right>
        </NavContainer>
        <NavHr />
      </Nav> */}

      <Nav>
        <NavContainer className="container">
          <Link href="/" passHref>
            <LogoLink>
              <Image
                src="/images/logo.svg"
                alt=""
                width="150px"
                height="41.047px"
              />
            </LogoLink>
          </Link>
          {!mobile && (
            <NavItems>
              {navItems.map((item) => {
                return (
                  <NavItem key={item.id} className={item.nName}>
                    <Link href={item.path}>{item.title}</Link>
                  </NavItem>
                )
              })}

              <NavLoginButton>Login</NavLoginButton>
            </NavItems>
          )}

          {mobile && (
            <SidebarToggle>
              {sidebar ? (
                <FontAwesomeIcon
                  icon={['fa-solid', 'fa-xmark']}
                  style={{ fontSize: '35px' }}
                  onClick={() => setSidebar(!sidebar)}
                />
              ) : (
                <FontAwesomeIcon
                  icon={['fa-solid', 'fa-bars']}
                  style={{ fontSize: '35px', color: '#00afcb' }}
                  onClick={() => setSidebar(!sidebar)}
                />
              )}
            </SidebarToggle>
          )}
        </NavContainer>
        <NavHr />

        <div className={sidebar ? 'sidebar active' : 'sidebar'}>
          <SidebarItems>
            {navItems.map((item) => {
              return (
                <li
                  key={item.id}
                  className={item.sName}
                  onClick={() => setSidebar(false)}
                >
                  <Link href={item.path}>{item.title}</Link>
                </li>
              )
            })}

            <NavLoginButton style={{ width: '100%' }}>Login</NavLoginButton>
          </SidebarItems>
        </div>
      </Nav>
    </>
  )
}

export default Navbar
