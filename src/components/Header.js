import React from "react";
import SizeFilter from "./SizeFilter";
import ProductContainer from '../components/ProductContainer';

export default function Header(props) {
  const {items, handleChecked, filterItems} = props;
  return (
    <main>
      <div>
        <SizeFilter handleChecked={handleChecked}/>
        <ProductContainer filterItems={filterItems} productItems={items}/>
      </div>
    </main>
  )
}