import styled from 'styled-components'

export const VideoDetailsPageContainer = styled.div`
  display: flex;
  flex-direction: row;
`
export const VideoDetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  background-color: ${props => (props.isInDarkMode ? '#0f0f0f' : '#f9f9f9')};
`
export const VideoDetailsText = styled.p`
  color: ${props => (props.isInDarkMode ? '#f8fafc' : '#0f0f0f')};
`
export const ViewLikeContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`
export const ViewTimeContainer = styled.div`
  display: flex;
  flex-direction: row;
`
export const LikeSaveContainer = styled.div`
  display: flex;
  flex-direction: row;
`
export const LikeDisLikeBtn = styled.button`
  background-color: transparent;
  border-style: none;
  color: ${props => (props.isActive ? '#2563eb' : '#64748b')};
`
export const HorizontalLine = styled.hr`
  color: #f8fafc;
`
export const ProfileContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
`
export const ProfileImage = styled.img`
  height: 40px;
  width: 40px;
`
export const FailureContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #cbd5e1;
  background-color: ${props => (props.isInDarkMode ? '#0f0f0f' : '#f8fafc')};
`
export const FailureImage = styled.img`
  height: 300px;
  width: 300px;
`
export const FailureHeading = styled.h1`
  color: ${props => (props.isInDarkMode ? '#f8fafc' : '#0f0f0f')};
`
export const FailureText = styled.p`
  color: ${props => (props.isInDarkMode ? '#f8fafc' : '#0f0f0f')};
`
export const RetryBtn = styled.button`
  height: 30px;
  width: 60px;
  background-color: #4f46e5;
  color: #ffffff;
`
