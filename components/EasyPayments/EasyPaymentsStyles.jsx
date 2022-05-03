import styled from 'styled-components'

export const EasyPaymentsContainer = styled.div`
  padding: 90px 0 0 0;
  display: block;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 2rem;
`

export const MarqueeItems = styled.div`
  display: flex;
  margin-top: 5rem;
  margin-bottom: 1rem;
`
export const MarqueeItem = styled.div`
  margin: 0 2.2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  -webkit-filter: grayscale(100%);
  filter: grayscale(100%);

  &:hover {
    -webkit-filter: grayscale(0%);
    filter: grayscale(0%);
  }
`

export const PaymentsHeader = styled.div`
  max-width: 100%;
  text-align: center;

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

export const PaymentsHr = styled.hr`
  margin: 0.5rem auto;
  width: 35px;
  height: 6px !important;
  background: #00afcb !important;
  border-radius: 4px;
`

export const PaymentsTag = styled.p`
  letter-spacing: -1px;
  font-size: 14px;
  @media screen and (max-width: 767px) {
    font-size: 12px;
    text-align: center;
  }
`
