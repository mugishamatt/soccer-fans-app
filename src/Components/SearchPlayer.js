
import React, { Component } from 'react';
class SearchPlayer extends Component {
    constructor(props) {
        super(props);
        this.state = 
        { playerName: '' };
  }
  mySubmitHandler = (event) => {
    event.preventDefault();
    alert("You are searching " + this.state.playerName);
  }
  myChangeHandler = (event) => {
    this.setState({playerName: event.target.value});
  }
  render() {
    return (
      <form onSubmit={this.mySubmitHandler}>
      <p>enter a Player Name:</p>
      <input
        type='text'
        onChange={this.myChangeHandler}
      />
      <input
        type='submit' value ='Search'
      />
      </form>
    );
  }
}
export default SearchPlayer;