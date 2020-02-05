import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Link
} from "react-router-dom";
import { Container, Row, Col } from 'reactstrap';
import './NavbarComponent.css'

export default class NavbarComponent extends Component {
  render() {
    return (
      <div>
        <Row>
        <Col className='banner'>Free Shipping On Orders Over $50 </Col>
        </Row>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand" href="#"><h2>OG Store</h2></a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarText">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
            <Link to="/"><a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a></Link>
            </li>
            <li class="nav-item">
            <Link to="/men-collection"><a class="nav-link" href="#">Men</a></Link>
            </li>
            <li class="nav-item">
            <Link to="/woman-collection"><a class="nav-link" href="#">Woman</a></Link>
            </li>
            {/* <li class="nav-item">
            <Link to="/about"><a class="nav-link" href="#">About</a></Link>
            </li> */}
            <li class="nav-item">
            {!!this.props.token ? <Link to="/past-orders"><a class="nav-link" href="#">Past Orders</a></Link> : " "}
            </li>
          </ul>
          <div class="navbar-text">
            {!!this.props.token ? <h5>Welcome, { this.props.username.toUpperCase()}!</h5> : " "}
          { !!this.props.token ? <button className="logout-btn" style={{marginLeft: 20}}onClick={ this.props.logOutClick }>Log Out</button> : "" }
          <Link to="/checkout"><img src={require('./cart.png')} style={{marginLeft: 20}}></img></Link>
          <h6 style={{marginLeft: 20, fontSize: 22}}>{this.props.cartItems.length}</h6>
          </div>
        </div>
      </nav>
    </div>
  );
}
}
