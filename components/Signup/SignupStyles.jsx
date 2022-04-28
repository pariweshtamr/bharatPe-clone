import styled from 'styled-components'

export const SignupContainer = styled.div`
  background: linear-gradient(259deg, #00afcb, #00d8e7 51%, #00afcb);
  background-repeat: no-repeat;
  display: flex;
  align-items: center;
  color: #fff;
  width: 100%;
`

export const Left = styled.div`
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const Right = styled.div`
  width: 50%;

  h3 {
    margin-bottom: 2rem;
    color: #fff;
    font-weight: 500;
    font-size: 22px;
  }
`

export const SignupButton = styled.a`
  background: #fdfdfd;
  cursor: pointer;
  width: 170px;
  height: 44px;
  color: #00afcb;
  font-weight: 500;
  font-size: 16px;
  border: none;

  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.7rem;
  border-radius: 0.25rem;
`
