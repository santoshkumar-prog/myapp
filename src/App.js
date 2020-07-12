import React, {Component} from 'react';
import Ninjas from './Ninjas';


class App extends Component {
  state = {
    ninjas : [
     { name: 'sik', age: 33, belt: 'red', id: 1 },
     { name: 'sek', age: 44, belt: 'black', id: 2 },
     { name: 'sok', age: 55, belt: 'green', id: 3 }, 
    ]
  }
  render() {
    return (
      <div className="App">
        <h1>Welcome React</h1>
        <Ninjas ninjas={this.state.ninjas} />
        
      </div>
    );
  }
}

export default App;
