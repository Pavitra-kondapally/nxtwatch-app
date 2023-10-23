import styled from 'styled-components'

export const TrendingViewContainer = styled.div`
  background-color: ${props => (props.isInDarkMode ? '#0f0f0f' : '#f8fafc')};
  display: flex;
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
