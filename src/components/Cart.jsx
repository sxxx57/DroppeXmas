import React, { Component } from 'react'
import Product from './Product'
import './Cart.css'

export default class Cart extends Component {
  constructor(props){
    super(props)
    this.state = {

    }
  }
  componentDidMount(){
    console.log("购物车组件props: ",this.props)
  }
  render() {
    return (
      <div className='cart_container'>
        {
          this.props.cart.products.map((item, index) => {
            return (
              <Product key={index} product={item} />
            )
          })
        }
      </div>
    )
  }
}
