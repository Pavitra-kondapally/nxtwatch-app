import {GiSaveArrow} from 'react-icons/gi'
import ThemeContext from '../../context/ThemeContext'
import Header from '../Header'
import Sidebar from '../Sidebar'
import VideoItem from '../VideoItem'
import {
  SavedPageContainer,
  TrendingHeadingContainer,
  TrendingHeading,
  NoVideosContainer,
  NoVideosImage,
  NoVideosHeading,
  NoVideosText,
} from './styledComponents'

const SavedVideos = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme, savedList} = value

      const renderVideosView = () => (
        <div>
          <TrendingHeadingContainer isInDarkMode={isDarkTheme}>
            <GiSaveArrow />
            <TrendingHeading isInDarkMode={isDarkTheme}>
              Saved Videos
            </TrendingHeading>
          </TrendingHeadingContainer>
          {savedList.map(eachVideo => (
            <VideoItem key={eachVideo.id} videoDetails={eachVideo} />
          ))}
        </div>
      )

      const renderNoResultsView = () => (
        <NoVideosContainer>
          <NoVideosImage
            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-saved-videos-img.png"
            alt="no saved videos"
          />
          <NoVideosHeading>No saved videos found</NoVideosHeading>
          <NoVideosText>
            You can save your videos while watching them.
          </NoVideosText>
        </NoVideosContainer>
      )

      return (
        <>
          <Header />
          <SavedPageContainer isInDarkMode={isDarkTheme}>
            <Sidebar />
            {savedList.length === 0
              ? renderNoResultsView()
              : renderVideosView()}
          </SavedPageContainer>
        </>
      )
    }}
  </ThemeContext.Consumer>
)

export default SavedVideos
