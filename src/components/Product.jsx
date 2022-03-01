import React, { Component } from 'react'
import './Product.css'

export default class Product extends Component {
  constructor(props){
    super(props)
    this.state = {
      productInfo: {}
    }
  }
  componentDidMount(){
    fetch(`https://fakestoreapi.com/products/${this.props.product.productId}`)
            .then(res=>res.json())
            .then(json=>{
              console.log(json)

              this.setState({productInfo: json})
            })
  }
  render() {
    return (
      <div className='product_container'>
        <img src={this.state.productInfo.image} alt="" className='product_img' />
        <div>
          <div className='product_title'>{this.state.productInfo.title}</div>
          <p className='product_description'>{this.state.productInfo.description}</p>
        </div>
        <div className='price'>price: {this.state.productInfo.price}</div>
        <div></div>
      </div>
    )
  }
}
