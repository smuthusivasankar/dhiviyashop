import React from 'react'
 
export default function ProductListItem(props) {
    const thisItemInCart = props.cart.filter(item => item.id === props.product.id)[0]
    return <div className='product-list-item'>
      <h3>{props.product.name}</h3>
      <img
        height={100}
        title={props.product.name} 
        alt="img"
        src={`/products/${props.product.image}`}
      />
      <div>{ props.product.description }</div>
      <div>${ props.product.price }</div>
      <div>
        <button className="add-btn" onClick={() => props.addToCart(props.product)}>Add to cart ({thisItemInCart && thisItemInCart.quantity || 0})</button>
      { thisItemInCart
        ? <button className="remove-btn" onClick={() => props.removeFromCart(props.product)}>Remove</button>
        : null
      }
      </div>
    </div>
  }