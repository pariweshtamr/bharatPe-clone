import styled from 'styled-components'

export const BusinessContainer = styled.div`
  padding: 90px 0 0 0;
  background-image: linear-gradient(to bottom, #fdfdff, #fbfbfd);
  display: block;

  div {
    width: 100%;
    padding: 0 15px;
  }
`

export const BusinessHeader = styled.div`
  max-width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;

  h4 {
    font-size: 40px;
    font-weight: 700;
    color: #1d1d1b;
    margin-bottom: 0.8rem;
  }
  h3 {
    font-size: 22px;
    font-weight: 300;
    color: #8d8b97;
  }

  p {
    color: #8d8b97;
    font-weight: 300;
    font-size: 17 px;
  }
  span {
    font-weight: 700;
    font-size: 22px;
    color: #1d1d1b;
  }
`

export const BusinessHr = styled.hr`
  margin: 0.5rem auto;
  margin-bottom: 1rem;
  width: 35px;
  height: 6px !important;
  background: #00afcb;
  border-radius: 4px;
`

export const BusinessBody = styled.div`
  display: flex;
  flex-wrap: wrap;
`

export const BusinessBodyLeft = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 200px);
  grid-template-rows: repeat(3, 141px);
  place-items: center;
  justify-content: flex-end;
  max-width: 50%;
  margin: 60px 0 46px 0px;
  grid-template-areas:
    'a b c'
    'd e f'
    '. g .';

  .a {
    grid-area: a;
  }
  .b {
    grid-area: b;
  }
  .c {
    grid-area: c;
  }
  .d {
    grid-area: d;
  }
  .e {
    grid-area: e;
  }
  .f {
    grid-area: f;
  }
  .g {
    grid-area: g;
  }
`

export const BusinessIcon = styled.div`
  width: 200px !important;
  height: 141px;
  font-size: 18px;
  text-align: center;
  p {
    font-weight: 300;
  }
`
export const BusinessBodyRight = styled.div`
  flex: 0 0 50%;
  margin: auto;
`
