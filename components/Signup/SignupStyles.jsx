import styled from 'styled-components'

export const SignupContainer = styled.div`
  background: linear-gradient(259deg, #00afcb, #00d8e7 51%, #00afcb);
  background-repeat: no-repeat;

  display: flex;
  color: #fff;
  width: 100%;
`

export const SignupContent = styled.div`
  display: flex;
`

export const Left = styled.div`
  padding: 7px 0;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const Right = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  h3 {
    margin-bottom: 2rem;
    color: #fff;
    font-weight: 400;
    font-size: 24px;
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
  text-decoration: none;

  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.7rem;
  border-radius: 0.25rem;
`
