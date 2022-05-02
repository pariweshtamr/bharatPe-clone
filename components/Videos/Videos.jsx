import {
  CarouselIndicators,
  PrevButton,
  VidContent,
  VideosCarousel,
  VideosCarouselItems,
  VideosContainer,
  VideosHr,
} from './VideosStyles'

import Youtube from 'react-youtube'

const Videos = () => {
  const opts = {
    height: '650',
    width: '90%',
    playerVars: {
      autoplay: 0,
    },
  }
  return (
    <VideosCarousel>
      <VideosContainer className="container">
        <h4>Watch Now</h4>

        <VideosHr />

        <div
          id="videoCarouselIndicators"
          className="carousel slide container-fluid pb-4"
          data-bs-ride="carousel"
        >
          <CarouselIndicators className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#videoCarouselIndicators"
              data-bs-slide-to="0"
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#videoCarouselIndicators"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#videoCarouselIndicators"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
            <button
              type="button"
              data-bs-target="#videoCarouselIndicators"
              data-bs-slide-to="3"
              aria-label="Slide 4"
            ></button>
          </CarouselIndicators>

          <div className="carousel-inner">
            <div className="carousel-item active">
              <VidContent>
                <Youtube videoId="dp_jnRJ296U" opts={opts} />
              </VidContent>
            </div>
            <div className="carousel-item">
              <VidContent>
                <Youtube videoId="CJCEUnBEcB0" opts={opts} />
              </VidContent>
            </div>
            <div className="carousel-item">
              <VidContent>
                <Youtube videoId="r3gvUYqL6c4" opts={opts} />
              </VidContent>
            </div>
            <div className="carousel-item">
              <VidContent>
                <Youtube videoId="L0EkNm8CF1Y" opts={opts} />
              </VidContent>
            </div>
          </div>

          <button
            class="carousel-control-prev"
            type="button"
            data-bs-target="#videoCarouselIndicators"
            data-bs-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button
            class="carousel-control-next"
            type="button"
            data-bs-target="#videoCarouselIndicators"
            data-bs-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </VideosContainer>
    </VideosCarousel>
  )
}

export default Videos
