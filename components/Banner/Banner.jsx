import Image from 'next/image'
import {
  BannerContainer,
  BannerContent,
  BannerDownloads,
  BannerLeft,
  BannerRight,
} from './BannerStyles'

const Banner = () => {
  return (
    <BannerContainer>
      <BannerContent className="container-fluid">
        <BannerLeft className="col-lg-6 col-md-6 col-sm-12">
          <img src="/images/banner.png" alt="" />
        </BannerLeft>

        <BannerRight className="col-lg-6 col-md-6 col-sm-12">
          <h2>
            Make BharatPe your growth <br /> partner today
          </h2>

          <h4>
            Download the BharatPe App for <br /> your iPhone and Android
          </h4>

          <BannerDownloads>
            <Image
              src="/images/google.png"
              alt=""
              width="168px"
              height="50px"
            />
            <Image src="/images/apple.png" alt="" width="168px" height="50px" />
          </BannerDownloads>
        </BannerRight>
      </BannerContent>
    </BannerContainer>
  )
}

export default Banner
