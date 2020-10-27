import React from 'react'
import logo from './logo.svg';
import './App.css';
import axios from 'axios'

class App extends React.Component {
  state = {
    foodItems: [],
    itemToAdd: ""
  };

  componentDidMount() {
    this.fetchValues()
  }

  handleChange = (e) => {
    this.setState({itemToAdd: e.target.value})
  }

  fetchValues = async () => {
    const values = await axios.get("/api");
    this.setState({foodItems: values.data});
  }

  handleSubmit = (e) => {
    axios.post("/api", {name: this.state.itemToAdd});
    this.setState({itemToAdd: ""})
  }

  render() {
    return (
      <div className="App">
          <img src={logo} className="App-logo" alt="logo" />
          <form onSubmit={this.handleSubmit}>
            <label>Name</label>
            <input value={this.state.itemToAdd} onChange={this.handleChange}/>
          </form>
          <ul>
          {
            this.state.foodItems.map((foodItem => <li key={foodItem._id}>{foodItem.name}</li>))
          }
          </ul>
      </div>
    );
  }
}

export default App;
