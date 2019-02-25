import React from 'react'
import ProductListItem from './product-list'
import { connect } from 'react-redux'
import {cartItemsWithQuantities } from '../cart'
function ProductList(props) {
  return (
    <div className="product-listing">{
    props.products.map(product => <ProductListItem 
    product ={product}
    addToCart ={props.addToCart}
    removeFromCart ={props.removeFromCart}
    cart ={cartItemsWithQuantities(props.cart)}
    /> )
    }
    </div>
  )
}

function mapStateToProps(state, ownProps){
    return{
        cart:state.cart
    }
}
function mapDispatchToProps(dispatch){
    return {
        addToCart:(item) =>{
            dispatch({type:'ADD', payload: item})
        },
        removeFromCart:(item)=>{
            dispatch({type:'REMOVE', payload:item})
        }

    }
}
 

export default connect(mapStateToProps, mapDispatchToProps)(ProductList);

