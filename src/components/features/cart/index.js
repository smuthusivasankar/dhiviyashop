import React from 'react'
import { connect } from 'react-redux'

export const cartItemsWithQuantities = (cartItems) => {
  return cartItems.reduce((acc, item) => {
    const filteredItem = acc.filter(i2 => i2.id === item.id)[0]
    filteredItem !== undefined
      ? filteredItem.quantity ++
      : acc.push({ ...item, quantity: 1 })
    return acc
  }, [])
}

function Cart(props) {
  return <div className='cart'>
    { cartItemsWithQuantities(props.cart).map(item =>
      <div>
        { item.name } - { item.price } - { item.quantity }
      </div>)}
  </div>
}

function mapStateToProps(state, ownProps) {
  return {
    cart: state.cart,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    add: (value) => {
      dispatch({ type: 'ADD', payload: value })
    },
    remove: (index) => {
      dispatch({ type: 'REMOVE', payload: index }) 
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart)