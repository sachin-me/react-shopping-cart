import React, { Fragment } from "react";

export default function ProductFound(props) {
  const {filterItems, productItems, handleClick} = props
  console.log(handleClick);
  let fProduct;
  if (filterItems.length === 0) {fProduct = productItems.length}
  else {fProduct = filterItems.length}
  return (
    <Fragment>
      <div className="self-container-header">
        <span className="product-found">{fProduct} Products Found</span>
        <div className="sort">
          Order By: 
          <select name="" id="" onChange={(e) => handleClick(e)}>
            <option value="">Select</option>
            <option value="Lowest to Highest">Lowest to Highest</option>
            <option value="Highest to Lowest">Highest to Lowest</option>
          </select> 
        </div>
      </div>
    </Fragment>
  )
}