import {
  EasyPaymentsContainer,
  MarqueeItem,
  MarqueeItems,
  PaymentsHeader,
  PaymentsHr,
  PaymentsTag,
} from './EasyPaymentsStyles'
import Marquee from 'react-fast-marquee'
import Image from 'next/image'

const EasyPayments = () => {
  return (
    <EasyPaymentsContainer>
      <PaymentsHeader>
        <h4>Accepting Payments Made Easy, Simple & FREE!</h4>
      </PaymentsHeader>
      <PaymentsHr />

      <Marquee speed="60">
        <MarqueeItems>
          <MarqueeItem>
            <Image
              src="/images/truecaller.png"
              alt=""
              height="50px"
              width="200px"
            />
          </MarqueeItem>
          <MarqueeItem>
            <Image src="/images/bhim.png" alt="" height="35px" width="200px" />
          </MarqueeItem>
          <MarqueeItem>
            <Image src="/images/paytm.png" alt="" height="35px" width="130px" />
          </MarqueeItem>
          <MarqueeItem>
            <Image
              src="/images/phonepe.png"
              alt=""
              height="35px"
              width="150px"
            />
          </MarqueeItem>
          <MarqueeItem>
            <Image src="/images/gpay.png" alt="" height="80px" width="100px" />
          </MarqueeItem>
          <MarqueeItem>
            <Image
              src="/images/whatsapp.png"
              alt=""
              height="80px"
              width="150px"
            />
          </MarqueeItem>
          <MarqueeItem>
            <Image
              src="/images/amazon.png"
              alt=""
              height="50px"
              width="116px"
            />
          </MarqueeItem>
          <MarqueeItem>
            <Image src="/images/sbi.png" alt="" height="35px" width="116px" />
          </MarqueeItem>
          <MarqueeItem>
            <Image src="/images/hdfc.png" alt="" height="35px" width="220px" />
          </MarqueeItem>
          <MarqueeItem>
            <Image src="/images/icici.png" alt="" height="50px" width="220px" />
          </MarqueeItem>
          <MarqueeItem>
            <Image src="/images/axis.png" alt="" height="50px" width="180px" />
          </MarqueeItem>
          <MarqueeItem>
            <Image
              src="/images/citibank.png"
              alt=""
              height="50px"
              width="180px"
            />
          </MarqueeItem>
          <MarqueeItem>
            <Image
              src="/images/punjab.jpg"
              alt=""
              height="50px"
              width="180px"
            />
          </MarqueeItem>
          <MarqueeItem>
            <Image src="/images/hike.png" alt="" height="50px" width="120px" />
          </MarqueeItem>
        </MarqueeItems>
      </Marquee>

      <PaymentsTag>
        The logos are the property of respective trademark owners. All the above
        apps support BHIM-UPI
      </PaymentsTag>
    </EasyPaymentsContainer>
  )
}

export default EasyPayments
