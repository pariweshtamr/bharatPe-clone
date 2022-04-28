import Image from 'next/image'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import {
  FooterContainer,
  FooterContent,
  FooterContents,
  FooterDownloads,
  FooterLeft,
} from './FooterStyles'

const Footer = () => {
  return (
    <FooterContainer>
      <FooterContents>
        <FooterLeft>
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
        </FooterLeft>

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
            <p>
              <FontAwesomeIcon
                icon={['fab', 'linkedin']}
                style={{ fontSize: '15px' }}
              />
              <span> Linkedin</span>
            </p>
            <p>
              <FontAwesomeIcon
                icon={['fab', 'facebook-square']}
                style={{ fontSize: '15px' }}
              />
              <span>Facebook</span>
            </p>
            <p>
              <FontAwesomeIcon
                icon={['fab', 'instagram-square']}
                style={{ fontSize: '15px' }}
              />
              <span>Instagram</span>
            </p>
            <p>
              <FontAwesomeIcon
                icon={['fab', 'twitter']}
                style={{ fontSize: '15px' }}
              />
              <span>Twitter</span>
            </p>
          </ul>
        </FooterContent>
      </FooterContents>
    </FooterContainer>
  )
}

export default Footer
