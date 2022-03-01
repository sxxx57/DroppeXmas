import React, { Component } from 'react'
import Cart from './Cart'
import './AllCarts.css'
import Nav from './Nav'

export default class AllCarts extends Component {
  constructor(props){
    super(props)
    
    this.state = {
      CartList: []
    }
  }
  componentDidMount () {
    let CartList = []
    fetch('https://fakestoreapi.com/carts?limit=5')
            .then(res=>res.json())
            .then(json=>{
              CartList = json
              console.log("json: ",json)
              this.setState({CartList: CartList})
            })
  }

  render() {
    console.log(this.state)
    return (
      
      <div className='all_carts'>
      
        <div className='all_carts_container'>
          {
            this.state.CartList.map((item, index) => {
              return (
                <Cart key={index} cart={item} />
              )
            })
          }
        </div>
      </div>
    )
  }
}
