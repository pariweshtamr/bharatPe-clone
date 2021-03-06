import {
  BusinessBody,
  BusinessBodyLeft,
  BusinessBodyRight,
  BusinessContainer,
  BusinessHeader,
  BusinessHr,
  BusinessIcon,
} from './BusinessStyles'
import Image from 'next/image'

const Business = () => {
  return (
    <BusinessContainer>
      <div>
        <BusinessHeader>
          <h4>For Every Business</h4>
          <h3>We are for all retailers, shop owners and small business.</h3>
          <p>
            <span>50 Lakh+</span> Merchants Trust BharatPe
          </p>
          <BusinessHr />
        </BusinessHeader>

        <BusinessBody>
          <BusinessBodyLeft>
            <BusinessIcon className="a">
              <Image
                src="/images/restaurants.png"
                alt=""
                width="55px"
                height="66px"
              />
              <p>Restaurants</p>
            </BusinessIcon>
            <BusinessIcon className="b">
              <Image
                src="/images/grocery.png"
                alt=""
                width="50px"
                height="66px"
              />
              <p>Grocery Store</p>
            </BusinessIcon>
            <BusinessIcon className="c">
              <Image
                src="/images/canteen.png"
                alt=""
                width="66px"
                height="66px"
              />
              <p>Canteen</p>
            </BusinessIcon>

            <BusinessIcon className="d">
              <Image src="/images/cafe.png" alt="" width="60px" height="66px" />
              <p>Cafe</p>
            </BusinessIcon>
            <BusinessIcon className="e">
              <Image
                src="/images/salons.png"
                alt=""
                width="55px"
                height="66px"
              />
              <p>Salons</p>
            </BusinessIcon>
            <BusinessIcon className="f">
              <Image
                src="/images/mobile.png"
                alt=""
                width="50px"
                height="66px"
              />
              <p>Mobile Store</p>
            </BusinessIcon>

            <BusinessIcon className="g">
              <Image src="/images/more.png" alt="" width="66px" height="66px" />
              <p>And More</p>
            </BusinessIcon>
          </BusinessBodyLeft>

          <BusinessBodyRight>
            <Image
              src="/images/infograph.png"
              alt=""
              width="570px"
              height="300px"
            />
          </BusinessBodyRight>
        </BusinessBody>
      </div>
    </BusinessContainer>
  )
}

export default Business
