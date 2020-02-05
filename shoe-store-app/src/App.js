import React from 'react';
import Home from './Home';
import Login from './Login';
import Checkout from './Checkout';
import WomanIndex from './WomanIndex';
import MenIndex from './MenIndex';
import NavbarComponent from './NavbarComponent'
import ShoeShowPage from './ShoeShowPage'
import About from './About'
import PastOrders from './PastOrders'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import ShoeCard from './ShoeCard'
import ThankYou from './ThankYou'

class App extends React.Component {

  state = {
    token: null,
    loggedInUserId: null,
    cartItems: [],
    initializedCart: {},
    username: ''
  }

  getUsername = (username) => {
    this.setState({
      username: username
    })
  }

  clearCartItems = () => {
    this.setState({
      cartItems: []
    })
  }

  getOrder = (order) => {
    this.setState({
      initializedCart: order
    })
  }

  addToCart = (shoe) => {
    console.log(this.state.initializedCart)
    this.setState({
      cartItems: [...this.state.cartItems, shoe]
    })
    fetch("http://localhost:3000/joiners", {
      method: "POST",
      headers:{
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        shoe_id: shoe.id,
        order_id: this.state.initializedCart.id
      })
    }).then(response => response.json())
    .then(data => {
      fetch("http://localhost:3000/orders/" + this.state.initializedCart.id).then(response => response.json())
      .then(data => {
        this.getOrder(data)
      })
    })
  }

  shoePageWithProps = (routeProps) => {
    return <ShoeShowPage location={routeProps.location} addToCart={this.addToCart} />
  }

  // componentDidMount(){
  // // this.setToken({
  // //   token: localStorage.token,
  // //   user_id: localStorage.userId
  // // })
  //   this.setState({
  //     token: localStorage.token,
  //     loggedInUserId: localStorage.userId
  //   })
  // }

  setToken = ({ token, user_id })  =>{

    // console.log(token, user_id)

    localStorage.token = token
    localStorage.userId = user_id

    this.setState({
      token: localStorage.token,
      loggedInUserId: localStorage.userId
    })
  }

  logOutClick = () => {
    localStorage.clear()

    this.setState({
      loggedInUserId: null,
      token: null
    })
  }

  render() {
    console.log(this.state);
    // debugger
    console.log(this.state.initializedCart)
  
  return (
    
    
    <div>
      <Router>
      <NavbarComponent logOutClick={this.logOutClick} token={this.state.token} cartItems={this.state.cartItems} username={this.state.username}/>
      <div>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>

          <Route path="/thankyou">
            <ThankYou />
          </Route>
          
          <Route 
          path="/shoe-show-page" 
          component= {this.shoePageWithProps}>
          </Route>

          <Route path="/past-orders">
            <PastOrders loggedInUserId={ this.state.loggedInUserId } />
          </Route>
          <Route path="/men-collection">
            <MenIndex />
          </Route>
          <Route path="/woman-collection">
            <WomanIndex />
          </Route>
          <Route path="/checkout">
            <Checkout clearCartItems={this.clearCartItems} token={this.state.token} loggedInUserId={ this.state.loggedInUserId } cartItems={this.state.cartItems} initializedCart={this.state.initializedCart} getOrder={this.getOrder} />
          </Route>
          <Route path="/login">
            <Login setToken={this.setToken} token={this.state.token} getOrder={this.getOrder} getUsername={this.getUsername}/>
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>

    {/* <div>
    { !!this.state.token ? <button onClick={ this.logOutClick }>Log out</button> : "" }
      {!!this.state.token ? <Home /> : <Login setToken={ this.setToken } />} */}
    {/* </div> */}

    </div>
    
  );
}
}

export default App;
