import styled from 'styled-components'

export const CarouselItem = styled.div`
  display: flex !important;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 0 3rem;
  padding-top: -5rem;
  padding-bottom: 3rem;
`
export const CarouselItems = styled.div`
  margin: 0;
  padding: 0;
`

export const CarouselItemLeft = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  padding-top: 5rem;
  gap: 1.5rem;
  h1 {
    font-size: 48px;
    font-weight: 700;
  }
  p {
    font-size: 26px;
  }
  span {
    font-weight: 700;
  }
  ul {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    font-size: 26px;
  }
`
export const SlideButtons = styled.div`
  margin-top: 3rem;
  h5 {
    font-weight: 700;
  }

  &:nth-child(2) {
    margin-right: 10px;
  }
`

export const CarouselButtons = styled.div`
  font-size: 20px;
  font-weight: 700;
  color: #fff;
  background: #00afcb;
  width: 266px;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  cursor: pointer;
  border: none;
  outline: none;
`

export const CarouselItemRight = styled.div`
  flex: 1;
  max-height: 635px;
  max-width: 100%;
  margin-top: 30px;
`

export const SliderTabs = styled.div``

export const CarouselIndicators = styled.div`
  button {
    background-color: black !important;
  }
`
