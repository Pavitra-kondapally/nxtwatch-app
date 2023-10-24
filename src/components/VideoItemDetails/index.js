import {Component} from 'react'

import Loader from 'react-loader-spinner'

import Cookies from 'js-cookie'

import {formatDistanceToNow} from 'date-fns'

import {BiLike, BiDislike} from 'react-icons/bi'
import {GiSaveArrow} from 'react-icons/gi'

import ReactPlayer from 'react-player'

import ThemeContext from '../../context/ThemeContext'
import Header from '../Header'
import Sidebar from '../Sidebar'

import {
  VideoDetailsPageContainer,
  VideoDetailsContainer,
  VideoDetailsText,
  ViewLikeContainer,
  ViewTimeContainer,
  LikeSaveContainer,
  LikeDisLikeBtn,
  HorizontalLine,
  ProfileContainer,
  ProfileImage,
  FailureContainer,
  FailureImage,
  FailureHeading,
  FailureText,
  RetryBtn,
} from './styledComponents'

const videoApiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
  isLikeActive: false,
  isDisLikeActive: false,
  isVideoSaved: false,
}

class VideoItemDetails extends Component {
  state = {videoData: {}, videoApiStatus: videoApiStatusConstants.initial}

  componentDidMount() {
    this.getVideoItemDetails()
  }

  getVideoItemDetails = async () => {
    this.setState({videoApiStatus: videoApiStatusConstants.inProgress})

    const {match} = this.props
    const {params} = match
    const {id} = params

    const jwtToken = Cookies.get('jwt_token')

    const videoApiUrl = await fetch(`https://apis.ccbp.in/videos/${id}`)
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }
    const response = await fetch(videoApiUrl, options)

    if (response.ok === true) {
      const data = await response.json()

      const updatedData = data.video_details.map(each => ({
        id: each.id,
        title: each.title,
        videoUrl: each.video_url,
        thumbnailUrl: each.thumbnail_url,
        channel: each.channel,
        viewCount: each.view_count,
        publishedAt: each.published_at,
        description: each.description,
      }))
      this.setState({
        videoData: updatedData,
        videoApiStatus: videoApiStatusConstants.success,
      })
    } else {
      this.setState({
        videoApiStatus: videoApiStatusConstants.failure,
      })
    }
  }

  onTogglingLike = () => {
    const {isLikeActive} = this.state

    if (isLikeActive === true) {
      this.setState({
        isLikeActive: false,
        isDisLikeActive: true,
      })
    } else {
      this.setState({
        isLikeActive: true,
        isDisLikeActive: false,
      })
    }
  }

  onSavingVideo = () => {
    const {savedList} = this.props // Ensure you receive 'savedList' via props
    const {videoData, isVideoSaved} = this.state

    if (!isVideoSaved) {
      savedList.push(videoData) // Update 'savedList' with the video data
      this.setState({isVideoSaved: true})
    }
  }

  renderSuccessView = () => {
    const {videoData, isLikeActive, isDisLikeActive, isVideoSaved} = this.state
    const {isDarkTheme} = this.props // Ensure you receive 'isDarkTheme' via props
    const timeAgo = formatDistanceToNow(new Date(videoData.publishedAt))
    return (
      <VideoDetailsContainer isDarkModeOn={isDarkTheme}>
        <ReactPlayer url={videoData.videoUrl} />
        <VideoDetailsText>{videoData.title}</VideoDetailsText>
        <ViewLikeContainer>
          <ViewTimeContainer>
            <VideoDetailsText>{videoData.viewCount} views</VideoDetailsText>
            <VideoDetailsText>.{timeAgo} ago</VideoDetailsText>
          </ViewTimeContainer>
          <LikeSaveContainer>
            <LikeDisLikeBtn
              type="button"
              onClick={this.onTogglingLike}
              isActive={isLikeActive}
            >
              <BiLike />
              Like
            </LikeDisLikeBtn>
            <LikeDisLikeBtn
              type="button"
              onClick={this.onTogglingDislike}
              isActive={isDisLikeActive}
            >
              <BiDislike />
              Dislike
            </LikeDisLikeBtn>
            <LikeDisLikeBtn type="button" onClick={this.onSavingVideo}>
              <GiSaveArrow />
              {isVideoSaved ? 'Saved' : 'Save'}
            </LikeDisLikeBtn>
          </LikeSaveContainer>
        </ViewLikeContainer>
        <HorizontalLine />
        <ProfileContainer>
          <ProfileImage
            src={videoData.channel.profileImageUrl}
            alt="channel logo"
          />
          <div>
            <VideoDetailsText>{videoData.channel.name}</VideoDetailsText>
            <VideoDetailsText>
              {videoData.channel.subscriberCount} subscribers
            </VideoDetailsText>
          </div>
          <VideoDetailsText>{videoData.description}</VideoDetailsText>
        </ProfileContainer>
      </VideoDetailsContainer>
    )
  }

  renderLoadingView = () => (
    <div className="loader-container" data-testid="loader">
      <Loader type="ThreeDots" color="#ffffff" height="50" width="50" />
    </div>
  )

  onRetryingApi = () => {
    this.getVideoItemDetails()
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
          const {videoApiStatus} = this.state

          let content = null
          switch (videoApiStatus) {
            case videoApiStatusConstants.inProgress:
              content = this.renderLoadingView()
              break
            case videoApiStatusConstants.success:
              content = this.renderSuccessView()
              break
            case videoApiStatusConstants.failure:
              content = this.renderFailureView()
              break

            default:
              content = null
              break
          }

          return (
            <>
              <Header />
              <VideoDetailsPageContainer isDarkModeOn={isDarkTheme}>
                <Sidebar />
                {content}
              </VideoDetailsPageContainer>
            </>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default VideoItemDetails
