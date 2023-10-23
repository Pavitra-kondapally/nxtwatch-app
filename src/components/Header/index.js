import {HiSun} from 'react-icons/hi'
import {FaMoon} from 'react-icons/fa'
import {Redirect} from 'react-router-dom'

import Cookies from 'js-cookie'

import Popup from 'reactjs-popup'

import {
  HeaderContainer,
  HeaderLogoImage,
  ProfileContainer,
  ThemeIconButtonDark,
  ThemeIconButtonLight,
  ProfileImage,
  DarkLogoutButton,
  LightLogoutButton,
  PopupContainer,
  ButtonsContainer,
  ConfirmButton,
  CancelButton,
} from './styledComponents'

import ThemeContext from '../../context/ThemeContext'

const Header = props => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme, changeTheme} = value

      const onClickingThemeIcon = () => {
        changeTheme()
      }

      const onClickingHome = () => {
        ;<Redirect to="/" />
      }

      const onClickingConfirmBtn = () => {
        Cookies.remove('jwt_token')
        const {history} = props
        history.replace('/login')
      }

      return (
        <HeaderContainer>
          {isDarkTheme ? (
            <HeaderLogoImage
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png"
              onClick={onClickingHome}
            />
          ) : (
            <HeaderLogoImage
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
              onClick={onClickingHome}
            />
          )}
          <ProfileContainer>
            {isDarkTheme ? (
              <ThemeIconButtonDark
                type="button"
                onClick={onClickingThemeIcon}
                data-testid="theme"
              >
                <HiSun />
              </ThemeIconButtonDark>
            ) : (
              <ThemeIconButtonLight
                type="button"
                onClick={onClickingThemeIcon}
                data-testid="theme"
              >
                <FaMoon />
              </ThemeIconButtonLight>
            )}
            <ProfileImage
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
              alt="profile"
            />
            {isDarkTheme ? (
              <>
                <Popup
                  modal
                  trigger={<DarkLogoutButton>Logout</DarkLogoutButton>}
                >
                  {close => (
                    <PopupContainer>
                      <p>Are you sure yoy want to logout?</p>
                      <ButtonsContainer>
                        <ConfirmButton onClick={onClickingConfirmBtn}>
                          Confirm
                        </ConfirmButton>
                        <CancelButton onClick={() => close()}>
                          Cancel
                        </CancelButton>
                      </ButtonsContainer>
                    </PopupContainer>
                  )}
                </Popup>
              </>
            ) : (
              <>
                <Popup
                  modal
                  trigger={<LightLogoutButton>Logout</LightLogoutButton>}
                >
                  {close => (
                    <PopupContainer>
                      <p>Are you sure yoy want to logout?</p>
                      <ButtonsContainer>
                        <ConfirmButton onClick={onClickingConfirmBtn}>
                          Confirm
                        </ConfirmButton>
                        <CancelButton onClick={() => close()}>
                          Cancel
                        </CancelButton>
                      </ButtonsContainer>
                    </PopupContainer>
                  )}
                </Popup>
              </>
            )}
          </ProfileContainer>
        </HeaderContainer>
      )
    }}
  </ThemeContext.Consumer>
)

export default Header
