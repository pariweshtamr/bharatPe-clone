import {
  CarouselButtons,
  CarouselIndicators,
  CarouselItem,
  CarouselItemLeft,
  CarouselItemRight,
  CarouselItems,
  SlideButtons,
} from './CarouselStyles'
import Image from 'next/image'

const Carousel = () => {
  return (
    <div
      id="carouselIndicators"
      className="carousel slide"
      data-bs-ride="carousel"
      data-interval="4000"
    >
      <CarouselIndicators className="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselIndicators"
          data-bs-slide-to="0"
          className="active"
          aria-current="true"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselIndicators"
          data-bs-slide-to="1"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselIndicators"
          data-bs-slide-to="2"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselIndicators"
          data-bs-slide-to="3"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselIndicators"
          data-bs-slide-to="4"
        ></button>
      </CarouselIndicators>

      <div className="carousel-inner">
        <div className="carousel-item active">
          <CarouselItem>
            <CarouselItemLeft>
              <h1>
                BharatPe Lagao
                <br />
                Dhandha Badhao
              </h1>

              <p>
                Accept payments from any app for FREE & take loans whenever you
                need!
              </p>

              <SlideButtons>
                <h5>Download the App</h5>
                <Image
                  src="/images/google.png"
                  alt=""
                  width="168px"
                  height="50px"
                />
                <Image
                  src="/images/apple.png"
                  alt=""
                  width="168px"
                  height="50px"
                />
              </SlideButtons>
            </CarouselItemLeft>

            <CarouselItemRight>
              <img src="/images/1.png" className="d-block w-100" alt="..." />
            </CarouselItemRight>
          </CarouselItem>
        </div>

        <div className="carousel-item">
          <CarouselItem>
            <CarouselItemLeft>
              <h1>
                India's 1st Zero Fee* <br />
                Card Machine
              </h1>

              <ul>
                <li>
                  <span>0%</span> transaction fee
                </li>
                <li>
                  <span>No Rental</span>
                </li>
                <li>
                  <span>Receipts</span> for Card & QR Txns.
                </li>
              </ul>

              <CarouselButtons>Order Now</CarouselButtons>
            </CarouselItemLeft>

            <CarouselItemRight>
              <img src="/images/2.png" className="d-block w-100" alt="..." />
            </CarouselItemRight>
          </CarouselItem>
        </div>

        <div className="carousel-item">
          <CarouselItem>
            <CarouselItemLeft>
              <h1>
                #Team BharatPe
                <br />
                in our latest TVC
              </h1>

              <p>
                Watch our <span>11 brand ambassadors</span>
                <br /> talking about our products
              </p>

              <CarouselButtons>Watch Video</CarouselButtons>
            </CarouselItemLeft>

            <CarouselItemRight>
              <img src="/images/3.png" className="d-block w-100" alt="..." />
            </CarouselItemRight>
          </CarouselItem>
        </div>

        <CarouselItems className="carousel-item">
          <CarouselItem>
            <CarouselItemLeft>
              <h1>
                Get Easy Loan upto <br /> ₹ 7,00,000
              </h1>
              <ul>
                <li>
                  <span>1.75-2.5%</span> Rate of Interest
                </li>
                <li>
                  <span>Instant</span> Loan Approval
                </li>
                <li>
                  Repay in <span>Daily Instalments</span>
                </li>
              </ul>
              <SlideButtons>
                <h5>Download the App</h5>
                <Image
                  src="/images/google.png"
                  alt=""
                  width="168px"
                  height="50px"
                />
                <Image
                  src="/images/apple.png"
                  alt=""
                  width="168px"
                  height="50px"
                />
              </SlideButtons>
            </CarouselItemLeft>

            <CarouselItemRight>
              <img src="/images/4.png" className="d-block w-100" alt="..." />
            </CarouselItemRight>
          </CarouselItem>
        </CarouselItems>

        <div className="carousel-item">
          <CarouselItem>
            <CarouselItemLeft>
              <h1>BharatPe Credit Program for Distributors</h1>
              <ul>
                <li>
                  <span> 100% Collateral Free</span>
                </li>
                <li>
                  <span>Lowest Cost of Trade Credit</span>
                </li>
                <li>
                  <span> Minimum Documentation & No Visit Required</span>
                </li>
              </ul>
              <CarouselButtons>Register Now</CarouselButtons>
            </CarouselItemLeft>

            <CarouselItemRight>
              <img src="/images/5.png" className="d-block w-100" alt="..." />
            </CarouselItemRight>
          </CarouselItem>
        </div>
      </div>
    </div>
  )
}

export default Carousel
