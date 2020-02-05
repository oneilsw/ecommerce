import React, { Component } from 'react'
import PastOrderCard from './PastOrderCard';

export default class PastOrders extends Component {

  state = {
    paidOrders: []
  }

  componentDidMount() {
    fetch("http://localhost:3000/users/" + this.props.loggedInUserId)
    .then(response => response.json())
    .then(data => {
      // if(data.orders.paid === true) {
        console.log(data);
        
        this.setState({
          paidOrders: data.orders.filter(element => element.paid === true)
          
        })
      // }
    })
  }

  render() {
    console.log(this.props);
    
    return (
      <div>
        {this.state.paidOrders.map(po => {
          return <PastOrderCard key = {po.id} po ={po} />
        })}
      </div>
    )
  }
}
