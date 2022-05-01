import styled from 'styled-components'

export const VideosCarousel = styled.div`
  padding: 90px 0 40px 0;
`
export const VideosContainer = styled.div`
  width: 100%;
  padding: 0 15px;

  h4 {
    text-align: center;
    line-height: 1.2;
    font-size: 40px;
    font-weight: 800;
    color: #1d1d1b;
    margin-bottom: 1rem;
  }
`

export const VideosHr = styled.hr`
  margin: 0.5rem auto;
  margin-bottom: 1rem;
  width: 35px;
  height: 6px !important;
  background: #00afcb;
  border-radius: 4px;
`

export const VideosCarouselItems = styled.div``

export const VidContent = styled.div`
  text-align: center;
`

export const PrevButton = styled.div`
  .carousel-control-prev-icon {
    margin-right: 130px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-image: none;
  }
`

export const NextButton = styled.div`
  span {
    height: 2.5rem;
    width: 2.5rem;
  }
`

export const CarouselIndicators = styled.div`
  button {
    width: 15px !important;
    height: 15px !important;
    border-radius: 50%;
    background-color: #00afcb !important;
    margin-bottom: -40px;
  }
`
