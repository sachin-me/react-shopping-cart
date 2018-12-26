import React, {Fragment} from "react";
import ProductFound from '../components/productFound';
import Product from '../components/Product';
import FilteredProduct from '../components/FilteredProduct';

export default function ProductContainer(props) {
  const {productItems, filterItems, handleClick} = props;
  let pArr;
  let fArr;

  if (filterItems.length === 0) {
    pArr = productItems && productItems.map((v, i) => {
      return <Product key={v.id} item={v} />
    })
  } else {
    fArr = filterItems && filterItems.map((v, i) => {
      return <FilteredProduct key={v.id} filItem={v} />
    })
  }
  
  return (
    <Fragment>
      <ProductFound filterItems={filterItems} productItems={productItems} handleClick={handleClick} />
      {
        pArr
      }
      {
        fArr
      }
    </Fragment>
  )
}