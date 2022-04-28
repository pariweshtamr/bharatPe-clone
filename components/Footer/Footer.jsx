import Image from 'next/image'
import Link from 'next/link'
import {
  FooterContainer,
  FooterContent,
  FooterContents,
  FooterDownloads,
} from './FooterStyles'

const Footer = () => {
  return (
    <FooterContainer>
      <FooterContents>
        <FooterContent>
          <ul>
            <div>
              <Link href="/">
                <a>
                  <Image
                    src="/logo.svg"
                    alt=""
                    width="150px"
                    height="41.047px"
                  />
                </a>
              </Link>
            </div>

            <FooterDownloads>
              <Image src="/google.png" alt="" width="150px" height="41.047px" />
              <Image src="/apple.png" alt="" width="150px" height="41.047px" />
            </FooterDownloads>
          </ul>
        </FooterContent>

        <FooterContent>
          <ul>
            <h3>GENERAL</h3>
            <p>About Us</p>
            <p>Business Solution</p>
            <p>Media</p>
            <p>Blog</p>
          </ul>
        </FooterContent>

        <FooterContent>
          <ul>
            <h3>COMPANY</h3>
            <p>Careers</p>
            <p>Contact Us</p>
            <p>FAQs</p>
          </ul>
        </FooterContent>

        <FooterContent>
          <ul>
            <h3>LEGAL</h3>
            <p>Terms & Conditions</p>
            <p>Privacy Policy</p>
          </ul>
        </FooterContent>

        <FooterContent>
          <ul>
            <h3>FOLLOW US</h3>
            <p>Linkedin</p>
            <p>Facebook</p>
            <p>Instagram</p>
            <p>Twitter</p>
          </ul>
        </FooterContent>
      </FooterContents>
    </FooterContainer>
  )
}

export default Footer
