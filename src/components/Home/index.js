import {Component} from 'react'
import {AiOutlineSearch} from 'react-icons/ai'
import Loader from 'react-loader-spinner'

import {Redirect, withRouter} from 'react-router-dom'
import Cookies from 'js-cookie'
import {
  HomeContainer,
  RightHomeBar,
  SearchBox,
  SearchContainer,
  FailureContainer,
  FailureImage,
  FailureHeading,
  FailureText,
  RetryBtn,
  SuccessContainer,
} from './styledComponents'

import Header from '../Header'
import Sidebar from '../Sidebar'
import Banner from '../Banner'
import VideoItem from '../VideoItem'
import ThemeContext from '../../context/ThemeContext'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class Home extends Component {
  state = {
    videosList: [],
    searchInput: '',
    apiStatus: apiStatusConstants.initial,
  }

  componentDidMount() {
    this.getVideos()
  }

  getVideos = async () => {
    const {searchInput} = this.state

    this.setState({
      apiStatus: apiStatusConstants.inProgress,
    })

    const jwtToken = Cookies.get('jwt_token')

    if (jwtToken === undefined) {
      return <Redirect to="/login" />
    }

    const apiUrl = `https://apis.ccbp.in/videos/all?search=${searchInput}`
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }
    const response = await fetch(apiUrl, options)
    if (response.ok === true) {
      const fetchedData = await response.json()

      const updatedVideoData = fetchedData.videos.map(video => ({
        id: video.id,
        title: video.title,
        thumbnailUrl: video.thumbnail_url,
        channel: video.channel,
        viewCount: video.view_count,
        publishedAt: video.published_at,
      }))
      this.setState({
        apiStatus: apiStatusConstants.success,
        videosList: updatedVideoData,
      })
    } else {
      this.setState({apiStatus: apiStatusConstants.failure})
    }
    return Promise.resolve('Success')
  }

  onChangingSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  renderLoadingView = () => (
    <div className="loader-container" data-testid="loader">
      <Loader type="ThreeDots" color="#ffffff" height="50" width="50" />
    </div>
  )

  onRetryingApi = () => {
    this.getVideos()
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

  renderNoResultsView = () => {
    const {isDarkTheme} = this.props
    return (
      <FailureContainer isDarkModeOn={isDarkTheme}>
        <FailureImage
          src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png"
          alt="no videos"
        />
        <FailureHeading isDarkModeOn={isDarkTheme}>
          No Search results found
        </FailureHeading>
        <FailureText isDarkModeOn={isDarkTheme}>
          Try different keywords or remove search filter
        </FailureText>
        <RetryBtn type="button" onClick={this.onRetryingApi}>
          Retry
        </RetryBtn>
      </FailureContainer>
    )
  }

  renderSuccessView = () => {
    const {videosList, searchInput} = this.state
    const filteredList = videosList.filter(each =>
      each.title.toLowerCase().includes(searchInput.toLowerCase()),
    )

    if (filteredList.length === 0) {
      return this.renderNoResultsView()
    }
    return (
      <SuccessContainer>
        {filteredList.map(eachVideo => (
          <VideoItem videoDetails={eachVideo} key={eachVideo.id} />
        ))}
      </SuccessContainer>
    )
  }

  render() {
    return (
      <ThemeContext.Consumer>
        {value => {
          const {isDarkTheme, isBannerVisible} = value
          const {apiStatus, searchInput} = this.state
          let content = null
          switch (apiStatus) {
            case apiStatusConstants.inProgress:
              content = this.renderLoadingView()
              break
            case apiStatusConstants.success:
              content = this.renderSuccessView()
              break
            case apiStatusConstants.failure:
              content = this.renderFailureView()
              break

            default:
              content = null
              break
          }
          return (
            <>
              <Header isDarkModeOn={isDarkTheme} />
              <HomeContainer isDarkModeOn={isDarkTheme}>
                <Sidebar />
                <RightHomeBar isDarkModeOn={isDarkTheme}>
                  {isBannerVisible ? <Banner /> : null}
                  <SearchContainer>
                    <SearchBox
                      placeholder="Search"
                      onChange={this.onChangingSearchInput}
                      value={searchInput}
                    />
                    <AiOutlineSearch />
                  </SearchContainer>
                  {content}
                </RightHomeBar>
              </HomeContainer>
            </>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default withRouter(Home)
