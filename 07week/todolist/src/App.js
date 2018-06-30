import React, {Component} from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: '',
      listItems: []
    }
  }

  // state = {
  //     count: 0
  // };

  handleInputChange = (e) => {
    this.setState({inputValue: e.target.value})
  };

  handleAddToList=()=> {
    const newItem = this.state.inputValue;
    const newList = [...this.state.listItems, newItem];
    // newList.push(this.state.inputValue);
    this.setState({
      listItems: newList,
      inputValue:''
    });
  };

  rendList = () => {
    const mapArray = this.state.listItems.map((item, i) => {
      return(
        <li key={i}>
          {item}
        <button onClick>del</button>
        </li>
      )
    })
    return(mapArray)
  }


  render() {
    return (
      <div>
        <h2> Get er done {this.state.count} < /h2>
        <button onClick = {() => this.handleAddToList()} > Add to list < /button>
        <input type = "text" value = {this.state.inputValue} onChange = {(e) => this.handleInputChange(e) } />
        <ul>{this.rendList()}</ul>
      </div >
    )
  }
}

export default App;
