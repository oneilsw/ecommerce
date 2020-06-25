import React, { Component } from 'react';
import ShoeCard from './ShoeCard';
import { Container, Row, Col } from 'reactstrap';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

export default class MenIndex extends Component {

  state = {
    shoes: []
  }

  componentDidMount() {
    fetch('http://localhost:3000/shoes')
    .then(response => response.json())
    .then(data => {
      console.log(Object.keys(data))
      this.setState({
        shoes: data.filter(element => element.category.name === 'Men')
      })
    })
  }

  render() {
    return (
        
        <Container>
        <Row>
          {this.state.shoes.map(shoe => {
            return <ShoeCard key={shoe.id} shoe={shoe}/>
          })}
        </Row>
      </Container>
    )
  }
}
