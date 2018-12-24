import React, { Fragment } from "react";

export default function ProductFound(props) {
  return (
    <Fragment>
      <div className="self-container-header">
        <span className="product-found">Products Found</span>
        <div className="sort">
          Order By: 
          <select name="" id="">
          <option value="">Select</option>
            <option value="">Lowest to Highest</option>
            <option value="">Highest to Lowest</option>
          </select> 
        </div>
      </div>
    </Fragment>
  )
}