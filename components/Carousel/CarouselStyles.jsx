import styled from 'styled-components'

export const CarouselItem = styled.div`
  display: flex !important;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding-top: -5rem;
  padding-bottom: 3rem;
  margin-bottom: 1rem;
`
export const CarouselItems = styled.div`
  margin: 0;
  padding: 0;
`

export const CarouselItemLeft = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 2rem;
  gap: 1.5rem;
  h1 {
    font-size: 43px;
    font-weight: 800;
    padding: 0;
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
    gap: 0.5rem;
    font-size: 22px;
    list-style: none;
    position: relative;
    margin: 0;
    padding: 0;
    margin-bottom: 2rem;
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

export const ListArrow = styled.span`
  color: #00afcb;
  margin-right: 1.5rem;
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
  max-height: 635px;
  max-width: 100%;
`

export const SliderTabs = styled.div``

export const CarouselIndicators = styled.div`
  button {
    background-color: black !important;
  }
`
