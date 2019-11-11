import React from 'react';

import './App.css';

class App extends React.Component {
  
  state = {
    counter:1
  }


constructor(props) {
  super(props);
  this.handlerCounterUp = this.handlerCounterUp.bind(this);
  this.handlerCounterDown = this.handlerCounterDown.bind(this);
  

}

handlerCounterUp() {
  this.setState({counter: this.state.counter +1});
  
}

handlerCounterDown(){
  this.setState({counter: this.state.counter -1});
}


render() {
  return (
    <div className="App">
      <button onClick={this.handlerCounterUp}>counter up</button>
      <button onClick={this.handlerCounterDown}>counter up</button>
      
      <p>my count is {this.state.counter}</p>
     
    </div>
  );
}
} 
export default App;
   