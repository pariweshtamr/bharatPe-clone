import Image from 'next/image'
import {
  AllInOneBody,
  AllInOneContainer,
  AllInOneContent,
  AllInOneHeader,
  AllInOneHr,
  BackgroundImage,
  BodyLeft,
  BodyLeftContainer,
  BodyLeftContent,
  BodyRight,
  BodyRightContainer,
  BodyRightContent,
} from './AllInOneStyles'

const AllInOne = () => {
  return (
    <AllInOneContainer className="container">
      <AllInOneContent>
        <AllInOneHeader>
          <h4>BharatPe: Your All-in-One Business App</h4>
        </AllInOneHeader>
        <AllInOneHr />

        <AllInOneBody className="row">
          <BodyLeft className="col-12 col-sm-12 col-md-6">
            <Image src="/images/6.png" alt="" width="400px" height="300px" />
          </BodyLeft>

          <BodyRight className="col-12 col-sm-12 col-md-6">
            <BodyRightContainer>
              <BodyRightContent>
                <Image src="/images/qr.png" alt="" width="45px" height="45px" />
                <h4>1 QR Code For All Payment Apps</h4>
              </BodyRightContent>

              <p>
                Accept payments from any UPI app - PhonePe, PayTM, Google Pay,
                BHIM and 150+ others with your BharatPe QR. Payments get settled
                in your bank account.
              </p>
            </BodyRightContainer>
          </BodyRight>
        </AllInOneBody>

        <AllInOneBody className="row">
          <BodyLeft className="col-12 col-sm-12 col-md-6">
            <BodyLeftContainer>
              <BodyLeftContent>
                <Image
                  src="/images/zero.png"
                  alt=""
                  width="45px"
                  height="45px"
                />
                <h4>Zero Change</h4>
              </BodyLeftContent>

              <p>
                Yes! accepting payments with BharatPe is absolutely FREE! There
                are no setup or transaction or any other hidden charges!
              </p>
            </BodyLeftContainer>
          </BodyLeft>

          <BodyRight className="col-12 col-sm-12 col-md-6">
            <Image src="/images/0.png" alt="" width="250px" height="285px" />
          </BodyRight>
        </AllInOneBody>

        <AllInOneBody className="row">
          <BodyLeft className="col-12 col-sm-12 col-md-6">
            <Image
              src="/images/money.png"
              alt=""
              width="250px"
              height="285px"
            />
          </BodyLeft>

          <BodyRight className="col-12 col-sm-12 col-md-6">
            <BodyRightContainer>
              <BodyRightContent>
                <Image
                  src="/images/time.png"
                  alt=""
                  width="45px"
                  height="45px"
                />
                <h4>Easy Loans</h4>
              </BodyRightContent>

              <p>
                Get loan of upto Rs. 7 lakhs for all your needs at 0% processing
                fee and without any collateral. Enjoy lower than market interest
                rates, easy application process & quick disbursal!
              </p>
            </BodyRightContainer>
          </BodyRight>
        </AllInOneBody>

        <BackgroundImage>
          <Image src="/images/bg.png" alt="" width="570px" height="690px" />
        </BackgroundImage>
      </AllInOneContent>
    </AllInOneContainer>
  )
}

export default AllInOne
