import React, {Fragment} from "react";

export default function Product(props) {
  const {item} = props;
  console.log(item)
  return (
    <Fragment>
      <div>
        <img src={require('../products-image/11033926921508488_1.jpg')} alt="product image"/>
        <h3>{item.title}</h3>
        <h5>${item.price}</h5>
        <div className="cart-btn-div">
          <button className="cart-btn">
            Add to Cart
          </button>
        </div>
      </div>
    </Fragment>
  )
}