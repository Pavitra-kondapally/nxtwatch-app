import styled from 'styled-components'

export const BannerContainer = styled.div`
  height: 200px;
  width: 70vw;
  background-image: url('https://assets.ccbp.in/frontend/react-js/nxt-watch-banner-bg.png');
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`
export const BannerTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`
export const LogoImage = styled.img`
  height: 30px;
  width: 80px;
`
export const BannerText = styled.p`
  color: #212121;
  font-family: 'Roboto';
`
export const GetItNowBtn = styled.button`
  height: 40px;
  width: 70px;
  background-color: transparent;
  border-style: solid;
  border-color: #212121;
`
export const CrossButton = styled.button`
  height: 20px;
  width: 20px;
  background-color: transparent;
  border-style: none;
`
