import React from "react";
import SizeFilter from "./SizeFilter";
import ProductContainer from '../components/ProductContainer';

export default function Header(props) {
  const {items, handleChecked} = props;
  console.log(items);
  return (
    <main>
      <div>
        <SizeFilter handleChecked={handleChecked}/>
        <ProductContainer productItems={items}/>
      </div>
    </main>
  )
}