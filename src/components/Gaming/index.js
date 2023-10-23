import {Component} from 'react'
import Loader from 'react-loader-spinner'
import {SiYoutubegaming} from 'react-icons/si'

import Cookies from 'js-cookie'

import {
  TrendingViewContainer,
  TrendingHeadingContainer,
  TrendingHeading,
  FailureImage,
  FailureHeading,
  FailureText,
  RetryBtn,
  FailureContainer,
} from './styledComponents'

import Header from '../Header'
import Sidebar from '../Sidebar'

import GamingVideoItem from '../GamingVideoItem'
import ThemeContext from '../../context/ThemeContext'

const gamingApiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class Gaming extends Component {
  state = {
    gamingVideosList: [],
    gamingApiStatus: gamingApiStatusConstants.initial,
  }

  componentDidMount() {
    this.getGamingVideos()
  }

  getGamingVideos = async () => {
    this.setState({gamingApiStatus: gamingApiStatusConstants.inProgress})

    const jwtToken = Cookies.get('jwt_token')

    const gamingApiUrl = 'https://apis.ccbp.in/videos/gaming'
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }
    const response = await fetch(gamingApiUrl, options)
    if (response.ok === true) {
      const fetchedData = await response.json()

      const updatedGamingData = fetchedData.videos.map(each => ({
        id: each.id,
        title: each.title,
        thumbnailUrl: each.thumbnail_url,
        viewCount: each.view_count,
      }))
      this.setState({
        gamingVideosList: updatedGamingData,
        gamingApiStatus: gamingApiStatusConstants.inProgress,
      })
    } else {
      this.setState({gamingApiStatus: gamingApiStatusConstants.failure})
    }
  }

  renderLoadingView = () => (
    <div className="loader-container" data-testid="loader">
      <Loader type="ThreeDots" color="#ffffff" height="50" width="50" />
    </div>
  )

  renderSuccessView = () => {
    const {gamingVideosList} = this.state

    return (
      <div>
        <TrendingHeadingContainer>
          <SiYoutubegaming />
          <TrendingHeading>Gaming</TrendingHeading>
        </TrendingHeadingContainer>
        {gamingVideosList.map(eachVideo => (
          <GamingVideoItem key={eachVideo.id} videoDetails={eachVideo} />
        ))}
      </div>
    )
  }

  onRetryingApi = () => {
    this.getGamingVideos()
  }

  renderFailureView = () => {
    const {isDarkTheme} = this.props

    return (
      <FailureContainer>
        {isDarkTheme ? (
          <FailureImage src="https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png" />
        ) : (
          <FailureImage src="https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png" />
        )}
        <FailureHeading>Oops! Something Went Wrong</FailureHeading>
        <FailureText>
          We are having some trouble to complete your request.Please try again.
        </FailureText>
        <RetryBtn type="button" onClick={this.onRetryingApi}>
          Retry
        </RetryBtn>
      </FailureContainer>
    )
  }

  render() {
    return (
      <ThemeContext.Consumer>
        {value => {
          const {isDarkTheme} = value
          const {gamingApiStatus} = this.state
          let gamingContent = null
          switch (gamingApiStatus) {
            case gamingApiStatusConstants.inProgress:
              gamingContent = this.renderLoadingView()
              break
            case gamingApiStatusConstants.success:
              gamingContent = this.renderSuccessView()
              break
            case gamingApiStatusConstants.failure:
              gamingContent = this.renderFailureView()
              break

            default:
              gamingContent = null
              break
          }

          return (
            <>
              <Header />
              <TrendingViewContainer isInDarkMode={isDarkTheme}>
                <Sidebar />
                {gamingContent}
              </TrendingViewContainer>
            </>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default Gaming
