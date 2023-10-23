import styled from 'styled-components'

export const AppLoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const LoginFormContainer = styled.form`
  box-shadow: #bfbfbf;
  background-color: #f8fafc;
  height: 250px;
  width: 200px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const LogoImage = styled.img`
  height: 30px;
  width: 90px;
`
export const LabelStyle = styled.label`
  color: #475569;
  font-family: 'Roboto';
`
export const InputStyle = styled.input`
  height: 30px;
  width: 150px;
  border-style: inset;
  border-color: #94a3b8;
`
export const CheckBoxInput = styled.input`
  color: #0f0f0f;
`
export const CheckBoxLabelStyle = styled.label`
  color: #0f0f0f;
  font-family: 'Roboto';
`
export const LoginButton = styled.button`
  height: 30px;
  width: 150px;
  background-color: #3b82f6;
  color: #ffffff;
  border-radius: 10px;
  text-align: center;
  margin-top: 10px;
`
export const ErrorMsg = styled.p`
  color: #ff0000;
`
