import React, {Fragment} from "react";
import ProductFound from '../components/productFound';
import Product from '../components/Product';
import FilteredProduct from '../components/FilteredProduct';

export default function ProductContainer(props) {
  const {productItems, filterItems, handleClick, addCart} = props;
  let pArr;
  let fArr;

  if (filterItems.length === 0) {
    pArr = productItems && productItems.map((v, i) => {
      return (
        <div className="product-div" key={v.id}>
          <Product key={v.id} item={v} addCart={addCart} id={i} />
        </div>
      )
    })
  } else {
    fArr = filterItems && filterItems.map((v, i) => {
      return (
        <div className="filter-product-div" key={v.id}>
          <FilteredProduct key={v.id} filItem={v} id={i} />
        </div>
      )
    })
  }
  
  return (
    <div className="header-wrapper">
      <ProductFound filterItems={filterItems} productItems={productItems} handleClick={handleClick} />
      <div className="product__container">
      {
        pArr
      }
      </div>
      <div className="product__container">
        {
          fArr
        }
      </div>
    </div>
  )
}