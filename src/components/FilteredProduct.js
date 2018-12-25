import React, { Fragment } from "react";

export default function FilteredProduct(props) {
  const {filItem} = props;

  return (
    <Fragment>
      <div>
        <img src={require('../products-image/11033926921508488_1.jpg')} alt="product image"/>
        <h3>{filItem.title}</h3>
        <h5>${filItem.price}</h5>
        <div className="cart-btn-div">
          <button className="cart-btn">
            Add to Cart
          </button>
        </div>
      </div>
    </Fragment>
  )
}