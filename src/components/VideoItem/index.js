import {formatDistanceToNow} from 'date-fns'
import {Link} from 'react-router-dom'

import {
  VideoItemContainer,
  VideoThumbnail,
  VideoInfoContainer,
  ProfileImg,
  VideoTextContainer,
  VideoInfoText,
  ViewTimeContainer,
} from './styledComponents'

const VideoItem = props => {
  const {videoDetails} = props
  const {
    id,
    title,
    thumbnailUrl,
    channel,
    viewCount,
    publishedAt,
  } = videoDetails
  const timeAgo = formatDistanceToNow(new Date(publishedAt))

  return (
    <Link to={`/videos/${id}`}>
      <VideoItemContainer>
        <VideoThumbnail src={thumbnailUrl} alt="video thumbnail" />
        <VideoInfoContainer>
          <ProfileImg src={channel.profileImageUrl} alt="channel logo" />
          <VideoTextContainer>
            <VideoInfoText>{title}</VideoInfoText>
            <VideoInfoText>{channel.name}</VideoInfoText>
            <ViewTimeContainer>
              <VideoInfoText>{viewCount} views</VideoInfoText>
              <VideoInfoText>{timeAgo}</VideoInfoText>
            </ViewTimeContainer>
          </VideoTextContainer>
        </VideoInfoContainer>
      </VideoItemContainer>
    </Link>
  )
}

export default VideoItem
