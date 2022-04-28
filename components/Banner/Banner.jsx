import Image from 'next/image'
import {
  BannerContainer,
  BannerDownloads,
  BannerLeft,
  BannerRight,
} from './BannerStyles'

const Banner = () => {
  return (
    <BannerContainer>
      <BannerLeft></BannerLeft>

      <BannerRight>
        <h2>
          Make BharatPe your growth <br /> partner today
        </h2>

        <h4>
          Download the BharatPe App for <br /> your iPhone and Android
        </h4>

        <BannerDownloads>
          <Image src="/google.png" alt="" width="168px" height="50px" />
          <Image src="/apple.png" alt="" width="168px" height="50px" />
        </BannerDownloads>
      </BannerRight>
    </BannerContainer>
  )
}

export default Banner
