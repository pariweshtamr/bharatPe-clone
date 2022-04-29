import styled from 'styled-components'

export const EasyPaymentsContainer = styled.div`
  padding: 90px 0 0 0;
  display: block;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const PaymentsHeader = styled.div`
  max-width: 100%;
  text-align: center;

  h4 {
    font-size: 40px;
    font-weight: 700;
    color: #1d1d1b;
    margin-bottom: 1rem;
  }
`

export const PaymentsHr = styled.hr`
  margin: 0.5rem auto;
  margin-bottom: 1rem;
  width: 35px;
  height: 6px !important;
  background: #00afcb !important;
  border-radius: 4px;
`

export const PaymentsTag = styled.p`
  letter-spacing: -1px;
  margin: 1rem;
  font-size: 14px;
`