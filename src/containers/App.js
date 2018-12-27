import React, { Component } from 'react';
import '../style/App.scss';
import Header from '../components/Header';
import Cart from '../components/Cart';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      productItems: [],
      filterArr: [],
      cartArr: []
    }
  }

  componentWillMount() {
    fetch('https://gist.githubusercontent.com/SiddharthShringi/00b55e2aed2dc0512621bfb42c609659/raw/0590c7f044ad3264d9586251e2a5da03659f835f/shoppingKartData.json').then(d => d.json()).then(data => {
      this.setState({productItems: data.products})
    })
  }

  handleCheck = (e) => {
    const {productItems} = this.state;
    let checkItem = productItems.filter((v, i) => v.availableSizes.includes(e.target.value));
    this.setState({filterArr: checkItem})
  }

  handleClickAscending = (e) => {
    console.log(e.target.value);
    const {productItems} = this.state;
    let sortedItem = (e.target.value === "Highest to Lowest") ? productItems.sort((x, y) => {
      return y.price - x.price;
    }) : productItems.sort((x, y) => {
      return x.price - y.price;
    })
    this.setState({productItems: sortedItem});
  }

  addCart = (e) => {
    let id = e.target.id;
    this.setState({
      cartArr: [...this.state.cartArr, this.state.productItems[id]]
    })
  }

  render() {
    return (
      <div className="App">
        <div className="cart">{this.state.cartArr.length}</div>
        <Header items={this.state.productItems} handleChecked={this.handleCheck} filterItems={this.state.filterArr} handleClick={this.handleClickAscending} addCart={this.addCart} />
        <Cart cartItem={this.state.cartArr} />
      </div>
    );
  }
}

export default App;
