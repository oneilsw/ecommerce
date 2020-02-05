import React from 'react';
import { Redirect } from 'react-router-dom';

class Login extends React.Component {

  state = {
    logIn: true,
    username: "",
    password: "",
    errors: [],
    currentCart: {}
  }

  onChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  // getUsername = () => {
  //   this.state.username
  // }

  logInSubmitted = (event) => {
    event.preventDefault()

    fetch("http://localhost:3000/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        username: this.state.username,
        password: this.state.password
      })
    })
    .then(res => res.json())
    .then(data => {
       if (data.error) {
          alert(data.error)
          this.setState({errors: data.error})
        } else {
          this.props.setToken(data);
          this.setState({logIn: true})

          fetch("http://localhost:3000/orders", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              "Accept": "application/json"
            },
            body: JSON.stringify({
              paid: false,
              user_id: data.user_id
            })
          }).then(response => response.json())
          .then(data => {
            this.props.getUsername(data.user.username)
            this.props.getOrder(data)
          })
        }
      })
  }

  signUpSubmitted = (event) => {
    event.preventDefault() 
    fetch("http://localhost:3000/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        username: this.state.username,
        password: this.state.password
      })
    }).then(res => res.json())
      .then(data => {
        if (data.errors) {
          this.setState({
            errors: data.errors
          })
        } else {
          this.props.setToken(data)
        }
      })
  }

  render(){
    console.log(this.props);
    
    if (this.props.token) return <Redirect to='/checkout' />

    return <>
      <ul>
        {
          this.state.errors.map(error => <li>{ error }</li>)
        }
      </ul>
      {
        this.state.logIn 
        ? 
        <section>
          <h2>Log In</h2>
          <button onClick={ () => this.setState({ logIn: false }) }>I need to register!!!</button>
          <form onSubmit={ this.logInSubmitted }>
            <label  htmlFor="log_in_username">Username</label>
            <input  id="username" 
                    type="text" 
                    onChange={ this.onChange } 
                    name="username" 
                    value={ this.state.username } />
            <br></br>
            <label  htmlFor="log_in_password">Password</label>
            <input  id="password" 
                    type="password" 
                    onChange={ this.onChange } 
                    name="password" 
                    value={ this.state.password } />
            <br/>
            <input type="submit" />
          </form>
        </section>
        :
        <section>
          <h2>Sign up</h2>
          <button onClick={ () => this.setState({ logIn: true }) }>I already signed up!!!</button>
          <form onSubmit={ this.signUpSubmitted }>
            <label  htmlFor="sign_up_username">Username</label>
            <input  id="sign_up_username" 
                    type="text" 
                    onChange={ this.onChange } 
                    name="username" 
                    value={ this.state.username } />
            <label  htmlFor="sign_up_password">Password</label>
            <input  id="sign_up_password" 
                    type="password" 
                    onChange={ this.onChange } 
                    name="password" 
                    value={ this.state.password } />
            <input type="submit" />
          </form>
        </section>
      }
    </>
  }

}

export default Login



