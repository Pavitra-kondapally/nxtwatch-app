import styled from 'styled-components'

export const SavedPageContainer = styled.div`
  background-color: ${props => (props.isInDarkMode ? '#0f0f0f' : '#f8fafc')};
  display: flex;
  flex-direction: row;
`
export const TrendingHeadingContainer = styled.div`
  background-color: ${props => (props.isInDarkMode ? '#0f0f0f' : '#f8fafc')};
  display: flex;
  padding-left: 25px;
  justify-content: flex-start;
  align-items: center;
  height: 50px;
`
export const TrendingHeading = styled.h1`
  color: ${props => (props.isInDarkMode ? '#f8fafc' : '#0f0f0f')};
  font-family: 'Roboto';
`
export const NoVideosContainer = styled.div`
  background-color: #909090;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const NoVideosImage = styled.img`
  height: 400px;
  width: 300px;
`
export const NoVideosHeading = styled.h1`
  color: #231f20;
  font-family: 'Roboto';
`
export const NoVideosText = styled.p`
  color: #383838;
  font-family: 'Roboto';
`
