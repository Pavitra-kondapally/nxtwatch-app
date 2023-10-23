import styled from 'styled-components'

export const HomeContainer = styled.div`
  padding: 10px;
  display: flex;
  flex-direction: row;
`
export const RightHomeBar = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${props => (props.isInDarkMode ? '#0f0f0f' : '#f8fafc')};
`
export const VideosContainer = styled.div`
  display: flex;
`
export const SearchBox = styled.input`
  height: 30px;
  width: 70px;
  border-color: #383838;
`
export const SearchContainer = styled.div`
  display: flex;
  flex-direction: row;
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
export const SuccessContainer = styled.div`
  display: flex;
  list-style: none;
`
