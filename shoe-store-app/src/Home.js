import React, { Component } from 'react'
import { Container, Row, Col } from 'reactstrap';
// import './home.jpg';
// import './CSS/home.css'
import './Home.css'

export default class Home extends Component {
  render() {
    return (
      
      <div >
       <Row>
        <Col>
          {/* <img className= 'home-image' src ={require('./home.jpg')}></img> */}
          <img src={require('./Images/store.jpg')} className='home-image'/>
        </Col>
        </Row>
      </div>
    )
  }
}
