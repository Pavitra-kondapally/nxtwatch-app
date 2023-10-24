import styled from 'styled-components'

export const HeaderContainer = styled.div`
  background-color: ${props => (props.isInDarkMode ? '#0f0f0f' : '#f8fafc')};
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-left: 15px;
  padding-right: 15px;
`
export const HeaderLogoImage = styled.img`
  height: 30px;
  width: 80px;
`
export const ProfileContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  background-color: ${props => (props.isInDarkMode ? '#0f0f0f' : '#f8fafc')};
`
export const ThemeIconButtonDark = styled.button`
  height: 30px;
  width: 30px;
  color: #f9f9f9;
`
export const ThemeIconButtonLight = styled.button`
  height: 30px;
  width: 30px;
`
export const ProfileImage = styled.img`
  height: 30px;
  width: 30px;
  margin-left: 10px;
  margin-right: 10px;
`
export const LightLogoutButton = styled.button`
  height: 30px;
  width: 60px;
  border-color: #3b82f6;
  border-style: solid;
  border-radius: 5px;
  background-color: transparent;
`
export const DarkLogoutButton = styled.button`
  height: 30px;
  width: 60px;
  border-color: #f1f1f1;
  border-style: solid;
  border-radius: 5px;
  background-color: transparent;
`
export const PopupContainer = styled.div`
  height: 100px;
  width: 150px;
  border-radius: 5px;
`
export const ButtonsContainer = styled.div`
  display: flex;
`
export const ConfirmButton = styled.button`
  height: 40px;
  width: 60px;
  border-style: solid;
  background-color: transparent;
`
export const CancelButton = styled.button`
  height: 40px;
  width: 60px;
  border-style: none;
  background-color: #3b82f6;
`
