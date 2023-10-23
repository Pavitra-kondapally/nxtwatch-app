import ThemeContext from '../../context/ThemeContext'

import {NotFoundImage} from './styledComponents'

const NotFound = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value

      return (
        <div>
          {isDarkTheme ? (
            <NotFoundImage src="https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-dark-theme-img.png" />
          ) : (
            <NotFoundImage src="https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-light-theme-img.png" />
          )}
        </div>
      )
    }}
  </ThemeContext.Consumer>
)

export default NotFound
