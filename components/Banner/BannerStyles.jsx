import styled from 'styled-components'

export const BannerContainer = styled.div`
  width: 100%;
  background: linear-gradient(250deg, #00afcb, #00d8e7, #00afcb);
  height: 100%;
  background-repeat: no-repeat;

  display: flex;
  flex-flow: row wrap;
  align-items: center;
`

export const BannerLeft = styled.div`
  padding: 0;
  background-repeat: no-repeat;
  background-size: cover;
`

export const BannerRight = styled.div`
  display: flex;
  flex-direction: column;
  color: #fff;
  font-size: 20px;
  justify-content: center;
  gap: 2rem;
  h2 {
    margin: 0 0 0 1rem;
    font-weight: 700;
  }
  h4 {
    font-weight: 400;
    font-size: 22px;
    margin-left: 1rem;
  }
`

export const BannerDownloads = styled.div`
  display: flex;
  gap: 10px;
  cursor: pointer;
  margin-left: 1rem;
`
