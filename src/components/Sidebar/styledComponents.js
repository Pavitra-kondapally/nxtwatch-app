import styled from 'styled-components'

export const SidebarContainer = styled.div`
  background-color: ${props => (props.isInDarkMode ? '#0f0f0f' : '#f8fafc')};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  width: 30vw;
  height: 70vh;
`
export const SidebarList = styled.ul`
  list-style: none;
`
export const ListItem = styled.li`
  color: ${props => (props.isInDarkMode ? '#f8fafc' : '#0f0f0f')};
  display: flex;
  flex-direction: row;
`
export const SidebarLink = styled.Link`
  &:hover {
    color: red;
    background-color: #909090;
  }
`
export const FooterContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const FooterText = styled.p`
  color: ${props => (props.isInDarkMode ? '#f8fafc' : '#0f0f0f')};
  font-family: 'Roboto';
`
export const IconContainer = styled.div`
  display: flex;
  flex-direction: row;
`
export const IconImage = styled.img`
  height: 20px;
  width: 20px;
`
