import React, {Fragment} from "react";
import ProductFound from '../components/productFound';
import Product from '../components/Product';

export default function ProductContainer(props) {
  const {productItems} = props;
  console.log(productItems);
  return (
    <Fragment>
      <ProductFound />
      {
        productItems && productItems.map((v, i) => {
          return <Product key={v.id} item={v} />
        })
      }
    </Fragment>
  )
}