import React, {Fragment} from "react";

export default function SizeFilter(props) {
  const {handleChecked} = props;
  return (
    <Fragment>
      <h4 className="title">Sizes: </h4>
      <div className="filters-sizes">
        <label htmlFor="">
          <input type="checkbox" name="" value="XS" id="" onChange={handleChecked}/>
          <span className="check-mark">XS</span>
        </label>
      </div>
      <div className="filters-sizes">
        <label htmlFor="">
          <input type="checkbox" name="" value="S" id=""/>
          <span className="check-mark">S</span>
        </label>
      </div>
      <div className="filters-sizes">
        <label htmlFor="">
          <input type="checkbox" name="" value="M" id=""/>
          <span className="check-mark">M</span>
        </label>
      </div>
      <div className="filters-sizes">
        <label htmlFor="">
          <input type="checkbox" name="" value="ML" id=""/>
          <span className="check-mark">ML</span>
        </label>
      </div>
      <div className="filters-sizes">
        <label htmlFor="">
          <input type="checkbox" name="" value="L" id=""/>
          <span className="check-mark">L</span>
        </label>
      </div>
      <div className="filters-sizes">
        <label htmlFor="">
          <input type="checkbox" name="" value="XL" id=""/>
          <span className="check-mark">XL</span>
        </label>
      </div>
      <div className="filters-sizes">
        <label htmlFor="">
          <input type="checkbox" name="" value="XXL" id=""/>
          <span className="check-mark">XXL</span>
        </label>
      </div>
    </Fragment>
  )
}