import React, { Fragment } from "react";

export default function Cart(props) {
  const {cartItem} = props;
  console.log(cartItem)
  let cartList;

  return (
    <Fragment> 
      <nav id="mobile__menu">
        <a href="#menu__open" id="menu__open">
          <i className="fas fa-shopping-cart" id="menu__open"></i>
        </a>
        <a href="#menu__close" id="menu__close">
        </a>
        <div className="panel">
          {
            cartItem.length && cartItem.map((v, i) => {
              return (
                <div className="cart-item" key={v.id}>
                  <div>
                    <img src={require(`../products-image/${v.sku}_1.jpg`)} alt="product image" />
                  </div>
                  <div>
                    <h3>{v.title}</h3>
                    <h5>${v.price}</h5>
                    <p>Quantity: {v.length}</p>
                  </div>
                </div>
              )
            })
          }
        </div>
      </nav>
    </Fragment>
  )
}