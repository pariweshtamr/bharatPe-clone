import styled from 'styled-components'

export const FooterContainer = styled.footer`
  width: 100%;
  padding: 1rem 55px 0 55px;
  margin: auto;
  font-size: 14px;
  background-image: linear-gradient(to bottom, #fdfdff, #fbfbfd);
  overflow: hidden;
  @media screen and (max-width: 768px) {
    padding: 1rem 0 0 0;
  }
`

export const FooterContents = styled.div`
  color: #000;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  @media screen and (max-width: 768px) {
    &:nth-child(4) {
      display: none;
    }
  }
`
export const FooterLeft = styled.div`
  display: flex;
  align-items: center;
  @media screen and (max-width: 768px) {
    text-align: center;
  }
`

export const FooterContent = styled.div`
  h3 {
    cursor: default;
    margin-bottom: 1.5rem;
    font-size: 16px;
    font-weight: 700;
  }
  ul {
    margin-bottom: 1rem;
    cursor: pointer;
    padding: 30px;
  }

  p {
    color: #8d8b97;
    font-weight: 300;

    &:hover {
      color: #111;
    }

    span {
      margin-left: 10px;

      &:hover {
        color: #111;
      }
    }
  }
`

export const FooterDownloads = styled.div`
  display: flex;
  gap: 5px;
  padding: 30px 0px;
  cursor: pointer;
`
