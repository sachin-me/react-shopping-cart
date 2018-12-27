import React, {Fragment} from "react";

export default function Product(props) {
  const {item, addCart, id} = props;
  
  return (
    <Fragment>
      <div id={id} className="product-container">
        <img src={require(`../products-image/${item.sku}_1.jpg`)} alt="product image" id={id} />
        <h3 id={id}>{item.title}</h3>
        <h5 id={id}>${item.price}</h5>
        <div className="cart-btn-div">
          <button id={id} className="cart-btn" onClick={(e) => addCart(e)}>
            Add to Cart
          </button>
        </div>
      </div>
    </Fragment>
  )
}