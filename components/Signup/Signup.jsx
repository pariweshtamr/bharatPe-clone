import Image from 'next/image'
import Link from 'next/link'
import { Left, Right, SignupButton, SignupContainer } from './SignupStyles'

const Signup = () => {
  return (
    <SignupContainer>
      <Left>
        <Image
          src="/images/signup.png"
          alt=""
          width="339.95px"
          height="250px"
          className="img"
        />
      </Left>

      <Right>
        <h3>Start accepting any payment app in 2 minutes!</h3>

        <Link href="/">
          <SignupButton>Sign Up Now!</SignupButton>
        </Link>
      </Right>
    </SignupContainer>
  )
}

export default Signup
