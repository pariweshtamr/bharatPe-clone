import styled from 'styled-components'

export const BannerContainer = styled.div`
  width: 100%;
  background: linear-gradient(250deg, #00afcb, #00d8e7, #00afcb);
  height: 480px;
  background-repeat: no-repeat;

  display: flex;
`

export const BannerLeft = styled.div`
  flex: 0 0 50%;
  min-width: 50%;
  background-image: url('/images/banner.png');
  background-size: cover;
`

export const BannerRight = styled.div`
  min-width: 50%;
  flex: 0 0 50%;
  display: flex;
  flex-direction: column;
  padding-top: 3rem;
  color: #fff;
  font-size: 20px;
  h2 {
    margin: 4.5rem 0 0 1rem;
  }

  h4 {
    font-weight: 400;
    font-size: 22px;
    margin-left: 1rem;
  }
`

export const BannerDownloads = styled.div`
  display: flex;
  gap: 5px;
  cursor: pointer;
  margin-left: 1rem;
`
