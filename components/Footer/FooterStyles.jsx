import styled from 'styled-components'

export const FooterContainer = styled.footer`
  width: 100%;
  padding: 1rem 50px 0 50px;
  margin: auto;
  font-size: 14px;
  background-image: linear-gradient(to bottom, #fdfdff, #fbfbfd);
  overflow: hidden;
  display: block;
`

export const FooterContents = styled.div`
  color: #000;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`

export const FooterContent = styled.div`
  h3 {
    cursor: default;
  }
  ul {
    margin-bottom: 1rem;
    cursor: pointer;
    padding: 30px;
  }

  p {
    color: #8d8b97;

    &:hover {
      color: #111;
    }
  }
`

export const FooterDownloads = styled.div`
  display: flex;
  gap: 5px;
  padding: 30px 10px;
  cursor: pointer;
`
