import {Component} from 'react'
import {Route, Switch, Redirect} from 'react-router-dom'

import LoginPage from './components/LoginPage'
import './App.css'
import ThemeContext from './context/ThemeContext'
import ProtectedRoute from './components/ProtectedRoute'
import Home from './components/Home'
import Trending from './components/Trending'
import Gaming from './components/Gaming'
import SavedVideos from './components/SavedVideos'
import VideoItemDetails from './components/VideoItemDetails'
import NotFound from './components/NotFound'

// Replace your code here
class App extends Component {
  state = {isDarkTheme: false, isBannerVisible: true, savedList: []}

  changeTheme = () => {
    this.setState(prevState => ({isDarkTheme: !prevState.isDarkTheme}))
  }

  togglingBanner = () => {
    this.setState(prevState => ({isBannerVisible: !prevState.isBannerVisible}))
  }

  render() {
    const {isDarkTheme, isBannerVisible, savedList} = this.state
    return (
      <ThemeContext.Provider
        value={{
          isDarkTheme,
          isBannerVisible,
          savedList,
          changeTheme: this.changeTheme,
          togglingBanner: this.togglingBanner,
        }}
      >
        <Switch>
          <Route exact path="/login" component={LoginPage} />
          <ProtectedRoute exact path="/" component={Home} />
          <ProtectedRoute exact path="/trending" component={Trending} />
          <ProtectedRoute exact path="/gaming" component={Gaming} />
          <ProtectedRoute exact path="/saved-videos" component={SavedVideos} />
          <ProtectedRoute
            exact
            path="/videos/:id"
            component={VideoItemDetails}
          />
          <Route path="/not-found" component={NotFound} />
          <Redirect to="not-found" />
        </Switch>
      </ThemeContext.Provider>
    )
  }
}

export default App
