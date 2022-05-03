import styled from 'styled-components'

export const HighlightsContainer = styled.div`
  background: #fff;
`

export const HighlightsHeader = styled.div`
  max-width: 100%;
  text-align: center;
  padding-top: 5rem;

  h4 {
    font-size: 40px;
    font-weight: 700;
    color: #1d1d1b;
    margin-bottom: 1rem;
    @media screen and (max-width: 767px) {
      font-size: 30px;
    }
  }
`

export const HighlightsHr = styled.hr`
  margin: 0.5rem auto;
  margin-bottom: 1rem;
  width: 35px;
  height: 6px !important;
  background: #00afcb !important;
  border-radius: 4px;
`

export const HightsHr2 = styled.hr`
  width: 35px;
  height: 5px !important;
  background: #00afcb !important;
`

export const HighlightsContent = styled.div``

export const HighlightsBody = styled.div`
  margin-top: 4rem;
`

export const BodyRight = styled.div`
  text-align: center;
`

export const BodyRightContainer = styled.div`
  margin: 35px 0 165px;

  p {
    color: #8d8b97;
    padding-right: 4rem;
    text-align: left;
  }
  @media screen and (max-width: 767px) {
    margin: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    p {
      text-align: center;
      padding: 0;
    }
  }
`

export const BodyRightContent = styled.div`
  display: flex;
  flex-flow: row-wrap;
  align-items: center;
  margin-bottom: 1rem !important;

  h4 {
    font-weight: 600;
  }
`
export const BodyLeft = styled.div`
  text-align: center;
`

export const BodyLeftContainer = styled.div`
  margin: 35px 0 165px;
  margin-left: 3rem;
  /* padding-right: -3rem; */

  p {
    text-align: left;
    color: #8d8b97;
    padding-right: 2.5rem;
  }
  @media screen and (max-width: 767px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 0 0 35px 0;

    p {
      text-align: center;
      padding: 0;
    }
  }
`
export const BodyLeftContent = styled.div`
  display: flex;
  flex-flow: row-wrap;
  align-items: center;
  margin-bottom: 1rem !important;

  h4 {
    font-weight: 600;
  }
`
