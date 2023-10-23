import {Component} from 'react'
import Cookies from 'js-cookie'
import {Redirect} from 'react-router-dom'

import {
  AppLoginContainer,
  LoginFormContainer,
  LogoImage,
  InputStyle,
  CheckBoxInput,
  CheckBoxLabelStyle,
  LoginButton,
  ErrorMsg,
  LabelStyle,
} from './styledComponents'

class LoginPage extends Component {
  state = {
    username: '',
    password: '',
    showSubmitError: false,
    errorMsg: '',
    isPasswordVisible: false,
  }

  onChangeUsername = event => {
    this.setState({username: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  onChangingCheckbox = () => {
    this.setState(prevState => ({
      isPasswordVisible: !prevState.isPasswordVisible,
    }))
  }

  onSubmitSuccess = jwtToken => {
    const {history} = this.props

    Cookies.set('jwt_token', jwtToken, {
      expires: 30,
      path: '/',
    })
    history.replace('/')
  }

  onSubmitFailure = errorMsg => {
    console.log(errorMsg)
    this.setState({showSubmitError: true, errorMsg})
  }

  submitForm = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const userDetails = {username, password}
    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(url, options)
    const data = await response.json()
    if (response.ok === true) {
      this.onSubmitSuccess(data.jwt_token)
    } else {
      this.onSubmitFailure(data.error_msg)
    }
  }

  render() {
    const {
      username,
      password,
      showSubmitError,
      errorMsg,
      isPasswordVisible,
    } = this.state
    const jwtToken = Cookies.get('jwt_token')
    if (jwtToken !== undefined) {
      return <Redirect to="/" />
    }
    return (
      <AppLoginContainer>
        <LoginFormContainer onSubmit={this.submitForm}>
          <LogoImage src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png" />
          <LabelStyle htmlFor="username">USERNAME</LabelStyle>
          <InputStyle
            id="username"
            onChange={this.onChangeUsername}
            value={username}
            placeholder="Username"
          />
          <LabelStyle htmlFor="password">PASSWORD</LabelStyle>
          {isPasswordVisible ? (
            <InputStyle
              id="password"
              type="text"
              onChange={this.onChangePassword}
              value={password}
              placeholder="Password"
            />
          ) : (
            <InputStyle
              id="password"
              type="password"
              onChange={this.onChangePassword}
              value={password}
              placeholder="Password"
            />
          )}

          <CheckBoxInput
            type="checkbox"
            id="checkbox"
            onChange={this.onChangingCheckbox}
          />
          <CheckBoxLabelStyle htmlFor="checkbox">
            Show Password
          </CheckBoxLabelStyle>
          <LoginButton type="submit">Login</LoginButton>
          {showSubmitError && <ErrorMsg>{errorMsg}</ErrorMsg>}
        </LoginFormContainer>
      </AppLoginContainer>
    )
  }
}

export default LoginPage
