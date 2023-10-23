import {ImCross} from 'react-icons/im'
import ThemeContext from '../../context/ThemeContext'
import {
  BannerContainer,
  LogoImage,
  BannerText,
  BannerTextContainer,
  GetItNowBtn,
  CrossButton,
} from './styledComponents'

const Banner = () => (
  <ThemeContext.Consumer>
    {value => {
      const {togglingBanner} = value
      const onClickingBannerClose = () => {
        togglingBanner()
      }

      return (
        <BannerContainer data-testid="banner">
          <BannerTextContainer>
            <LogoImage src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png" />
            <BannerText>
              Buy Nxt Watch Premium prepaid plans with UPI
            </BannerText>
            <GetItNowBtn type="button">GET IT NOW</GetItNowBtn>
          </BannerTextContainer>
          <CrossButton onClick={onClickingBannerClose}>
            <ImCross />
          </CrossButton>
        </BannerContainer>
      )
    }}
  </ThemeContext.Consumer>
)

export default Banner
