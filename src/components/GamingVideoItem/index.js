import {Link} from 'react-router-dom'

import {
  VideoItemContainer,
  VideoThumbnail,
  GamingVideoText,
} from './styledComponents'

const GamingVideoItem = props => {
  const {videoDetails} = props
  const {id, title, thumbnailUrl, viewCount} = videoDetails

  return (
    <Link to={`/videos/${id}`}>
      <VideoItemContainer>
        <VideoThumbnail src={thumbnailUrl} />
        <GamingVideoText>{title}</GamingVideoText>
        <GamingVideoText>{viewCount} Watching Worldwide</GamingVideoText>
      </VideoItemContainer>
    </Link>
  )
}

export default GamingVideoItem
