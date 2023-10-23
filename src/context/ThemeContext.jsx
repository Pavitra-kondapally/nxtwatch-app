import React from 'react'

const ThemeContext = React.createContext({
  isDarkTheme: false,
  isBannerVisible: true,
  changeTheme: () => {},
  togglingBanner: () => {},
  savedList: [],
})

export default ThemeContext
