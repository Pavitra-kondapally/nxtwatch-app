import {Component} from 'react'
import Loader from 'react-loader-spinner'
import {FaFireAlt} from 'react-icons/fa'

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

import VideoItem from '../VideoItem'
import ThemeContext from '../../context/ThemeContext'

const trendingApiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class Trending extends Component {
  state = {
    trendingVideosList: [],
    trendingApiStatus: trendingApiStatusConstants.initial,
  }

  componentDidMount() {
    this.getTrendingVideos()
  }

  getTrendingVideos = async () => {
    this.setState({trendingApiStatus: trendingApiStatusConstants.inProgress})

    const jwtToken = Cookies.get('jwt_token')

    const trendingApiUrl = 'https://apis.ccbp.in/videos/trending'
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }
    const response = await fetch(trendingApiUrl, options)
    if (response.ok === true) {
      const fetchedData = await response.json()

      const updatedTrendingData = fetchedData.videos.map(each => ({
        id: each.id,
        title: each.title,
        thumbnailUrl: each.thumbnail_url,
        channel: each.channel,
        videoCount: each.view_count,
        publishedAt: each.published_at,
      }))
      this.setState({
        trendingVideosList: updatedTrendingData,
        trendingApiStatus: trendingApiStatusConstants.inProgress,
      })
    } else {
      this.setState({trendingApiStatus: trendingApiStatusConstants.failure})
    }
  }

  renderLoadingView = () => (
    <div className="loader-container" data-testid="loader">
      <Loader type="ThreeDots" color="#ffffff" height="50" width="50" />
    </div>
  )

  renderSuccessView = () => {
    const {trendingVideosList} = this.state
    const {isDarkTheme} = this.props

    return (
      <div>
        <TrendingHeadingContainer isInDarkMode={isDarkTheme}>
          <FaFireAlt />
          <TrendingHeading isInDarkMode={isDarkTheme}>Trending</TrendingHeading>
        </TrendingHeadingContainer>
        {trendingVideosList.map(eachVideo => (
          <VideoItem key={eachVideo.id} videoDetails={eachVideo} />
        ))}
      </div>
    )
  }

  onRetryingApi = () => {
    this.getTrendingVideos()
  }

  renderFailureView = () => {
    const {isDarkTheme} = this.props
    return (
      <FailureContainer isDarkModeOn={isDarkTheme}>
        {isDarkTheme ? (
          <FailureImage src="https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png" />
        ) : (
          <FailureImage src="https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png" />
        )}
        <FailureHeading isDarkModeOn={isDarkTheme}>
          Oops! Something Went Wrong
        </FailureHeading>
        <FailureText isDarkModeOn={isDarkTheme}>
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
          const {trendingApiStatus} = this.state
          let trendingContent = null
          switch (trendingApiStatus) {
            case trendingApiStatusConstants.inProgress:
              trendingContent = this.renderLoadingView()
              break
            case trendingApiStatusConstants.success:
              trendingContent = this.renderSuccessView()
              break
            case trendingApiStatusConstants.failure:
              trendingContent = this.renderFailureView()
              break

            default:
              trendingContent = null
              break
          }

          return (
            <>
              <Header />
              <TrendingViewContainer isInDarkMode={isDarkTheme}>
                <Sidebar />
                {trendingContent}
              </TrendingViewContainer>
            </>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default Trending
