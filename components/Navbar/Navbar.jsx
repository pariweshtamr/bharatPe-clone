import Link from 'next/link'
import Image from 'next/image'
import {
  Left,
  NavContainer,
  Right,
  LogoLink,
  StyledLink,
  NavLoginButton,
  NavHr,
} from './NavbarStyles'

const Navbar = () => {
  return (
    <>
      <NavContainer>
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
    </>
  )
}

export default Navbar
