import React, { Component } from 'react';
import '../style/App.css';
import Header from '../components/Header';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      productItems: []
    }
  }

  componentWillMount() {
    fetch('https://gist.githubusercontent.com/SiddharthShringi/00b55e2aed2dc0512621bfb42c609659/raw/0590c7f044ad3264d9586251e2a5da03659f835f/shoppingKartData.json').then(d => d.json()).then(data => {
      this.setState({productItems: data.products})
    })
  }

  handleCheck = (e) => {
    console.log(e);
  }

  render() {
    return (
      <div className="App">
        <Header items={this.state.productItems} handleChecked={this.handleCheck}/>
      </div>
    );
  }
}

export default App;
