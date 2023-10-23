import {AiFillHome} from 'react-icons/ai'
import {FaFireAlt} from 'react-icons/fa'
import {SiYoutubegaming} from 'react-icons/si'
import {GiSaveArrow} from 'react-icons/gi'

import ThemeContext from '../../context/ThemeContext'

import {
  SidebarContainer,
  SidebarList,
  SidebarLink,
  ListItem,
  FooterContainer,
  FooterText,
  IconContainer,
  IconImage,
} from './styledComponents'

const Sidebar = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value

      return (
        <SidebarContainer isInDarkMode={isDarkTheme}>
          <SidebarList>
            <SidebarLink to="/">
              <ListItem isInDarkMode={isDarkTheme}>
                <AiFillHome />
                Home
              </ListItem>
            </SidebarLink>
            <SidebarLink to="/trending">
              <ListItem isInDarkMode={isDarkTheme}>
                <FaFireAlt />
                Trending
              </ListItem>
            </SidebarLink>
            <SidebarLink to="/gaming">
              <ListItem isInDarkMode={isDarkTheme}>
                <SiYoutubegaming />
                Gaming
              </ListItem>
            </SidebarLink>
            <SidebarLink to="/saved-videos">
              <ListItem isInDarkMode={isDarkTheme}>
                <GiSaveArrow />
                Saved Videos
              </ListItem>
            </SidebarLink>
          </SidebarList>
          <FooterContainer>
            <FooterText isInDarkMode={isDarkTheme}>CONTACT US</FooterText>
            <IconContainer>
              <IconImage
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png"
                alt="facebook logo"
              />
              <IconImage
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png"
                alt="twitter logo"
              />
              <IconImage
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png"
                alt="linked in logo"
              />
            </IconContainer>
            <FooterText isInDarkMode={isDarkTheme}>
              Enjoy! Now to see your channels and recommendations!
            </FooterText>
          </FooterContainer>
        </SidebarContainer>
      )
    }}
  </ThemeContext.Consumer>
)

export default Sidebar
