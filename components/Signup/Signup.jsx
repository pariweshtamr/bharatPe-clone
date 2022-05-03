import Image from 'next/image'
import Link from 'next/link'
import {
  Left,
  Right,
  SignupButton,
  SignupContainer,
  SignupContent,
} from './SignupStyles'

const Signup = () => {
  return (
    <SignupContainer>
      <SignupContent className="container">
        <Left className="col-lg-6 col-md-6 col-12">
          <Image
            src="/images/signup.png"
            alt=""
            width="339.95px"
            height="250px"
            className="img"
          />
        </Left>

        <Right className="col-lg-6 col-md-6 col-12">
          <h3>Start accepting any payment app in 2 minutes!</h3>

          <Link href="/" passHref>
            <SignupButton>Sign Up Now!</SignupButton>
          </Link>
        </Right>
      </SignupContent>
    </SignupContainer>
  )
}

export default Signup
