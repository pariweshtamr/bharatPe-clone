import {
  BodyLeft,
  BodyLeftContainer,
  BodyLeftContent,
  BodyRight,
  BodyRightContainer,
  BodyRightContent,
  HighlightsBody,
  HighlightsContainer,
  HighlightsContent,
  HighlightsHeader,
  HighlightsHr,
  HightsHr2,
} from './AppHighlightsStyles'
import Image from 'next/image'

const AppHighlights = () => {
  return (
    <HighlightsContainer className="container">
      <HighlightsContent>
        <HighlightsHeader>
          <h4>App Highlights</h4>
        </HighlightsHeader>
        <HighlightsHr />

        <HighlightsBody className="row">
          <BodyLeft className="col-12 col-sm-12 col-md-6">
            <Image src="/images/h1.png" alt="" width="340px" height="314px" />
          </BodyLeft>

          <BodyRight className="col-12 col-sm-12 col-md-6">
            <BodyRightContainer>
              <BodyRightContent>
                <h4>BharatPe Balance</h4>
              </BodyRightContent>
              <HightsHr2 />
              <p>
                Get a snapshot of your business & capital available to you with
                BharatPe Balance. Know your daily QR collections, balance in
                investment A/c & your available loan limit, all at one place
              </p>
            </BodyRightContainer>
          </BodyRight>
        </HighlightsBody>

        <HighlightsBody className="row">
          <BodyLeft className="col-12 col-sm-12 col-md-6">
            <BodyLeftContainer>
              <BodyLeftContent>
                <h4>BharatPe Card</h4>
              </BodyLeftContent>
              <HightsHr2 />

              <p>
                Introducing India's first Credit cum Debit card. Get 1%
                guaranteed cashback on all your BharatPe balance spends and a
                credit limit upto Rs 1 Lakh on your BharatPe card. Zero
                application or annual Fee! <br />
                <br /> Bank Partner: SBM Bank India
              </p>
            </BodyLeftContainer>
          </BodyLeft>

          <BodyRight className="col-12 col-sm-12 col-md-6">
            <Image src="/images/h2.png" alt="" width="340px" height="314px" />
          </BodyRight>
        </HighlightsBody>

        <HighlightsBody className="row">
          <BodyLeft className="col-12 col-sm-12 col-md-6">
            <Image src="/images/h3.jpg" alt="" width="340px" height="314px" />
          </BodyLeft>

          <BodyRight className="col-12 col-sm-12 col-md-6">
            <BodyRightContainer>
              <BodyRightContent>
                <h4>Easy Loans</h4>
              </BodyRightContent>
              <HightsHr2 />
              <p>
                Get loan of upto Rs. 7 lakh for all your needs at 0% processing
                fee and without any collateral. Enjoy lower than market interest
                rates, easy application process & quick disbursal!
              </p>
            </BodyRightContainer>
          </BodyRight>
        </HighlightsBody>

        <HighlightsBody className="row">
          <BodyLeft className="col-12 col-sm-12 col-md-6">
            <BodyLeftContainer>
              <BodyLeftContent>
                <h4>Bill Payments</h4>
              </BodyLeftContent>
              <HightsHr2 />

              <p>
                Your one-stop destination for quick and secure online recharges
                and bill payments. Pay your DTH, Electricity, Broadband, Piped
                gas, Water, LPG cylinder & Mobile bills on BharatPe app.
              </p>
            </BodyLeftContainer>
          </BodyLeft>

          <BodyRight className="col-12 col-sm-12 col-md-6">
            <Image src="/images/h4.jpg" alt="" width="340px" height="314px" />
          </BodyRight>
        </HighlightsBody>

        <HighlightsBody className="row">
          <BodyLeft className="col-12 col-sm-12 col-md-6">
            <Image src="/images/h5.jpg" alt="" width="340px" height="314px" />
          </BodyLeft>

          <BodyRight className="col-12 col-sm-12 col-md-6">
            <BodyRightContainer>
              <BodyRightContent>
                <h4>BharatPe = Cricket</h4>
              </BodyRightContent>
              <HightsHr2 />
              <p>
                The more you transact, the more you score! Redeem your runs &
                meet your favourite cricket stars and get autographed cricket
                goodies. Rules are simple! Score runs on every transaction!
              </p>
            </BodyRightContainer>
          </BodyRight>
        </HighlightsBody>

        <HighlightsBody className="row">
          <BodyLeft className="col-12 col-sm-12 col-md-6">
            <BodyLeftContainer>
              <BodyLeftContent>
                <h4>BharatSwipe</h4>
              </BodyLeftContent>
              <HightsHr2 />

              <p>
                Introducing India's first ZERO fee card machine. No transaction
                charge. No monthly rentals. Get receipts for both card and QR
                transactions.
              </p>
            </BodyLeftContainer>
          </BodyLeft>

          <BodyRight className="col-12 col-sm-12 col-md-6">
            <Image src="/images/h6.jpg" alt="" width="340px" height="314px" />
          </BodyRight>
        </HighlightsBody>
      </HighlightsContent>
    </HighlightsContainer>
  )
}

export default AppHighlights
