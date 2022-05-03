import styled from 'styled-components'

export const BannerContainer = styled.div`
  width: 100%;
  background: linear-gradient(250deg, #00afcb, #00d8e7, #00afcb);
  min-height: 100%;
  background-repeat: no-repeat;

  display: flex;
  flex-flow: row wrap;
  align-items: center;
`
export const BannerContent = styled.div`
  display: flex;
  padding: 0;
  @media screen and (max-width: 768px) {
    flex-direction: column-reverse;
  }
`
export const BannerLeft = styled.div`
  padding: 0;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  object-fit: cover;

  img {
    width: 100%;
  }

  @media screen and (max-width: 768px) {
    flex: 1;
  }
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
  @media screen and (max-width: 768px) {
    gap: 2rem;
    text-align: center;
    margin-top: 2rem;
    h2 {
      font-size: 18px;
    }
    h4 {
      font-size: 14px;
    }
  }
`

export const BannerDownloads = styled.div`
  display: flex;
  gap: 10px;
  cursor: pointer;
  margin-left: 1rem;
  @media screen and (max-width: 768px) {
    gap: 3px;
    margin: 0 auto;
    margin-bottom: 1.8rem;
  }
`
