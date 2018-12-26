import React from "react";
import SizeFilter from "./SizeFilter";
import ProductContainer from '../components/ProductContainer';

export default function Header(props) {
  const {items, handleChecked, filterItems, handleClick} = props;
  return (
    <main>
      <div>
        <SizeFilter handleChecked={handleChecked}/>
        <ProductContainer filterItems={filterItems} productItems={items} handleClick={handleClick} />
      </div>
    </main>
  )
}