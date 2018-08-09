import React, { Component } from 'react';
import Header from './components/Header';

class App extends Component {
  constructor() {
    super();
    this.state = {
      spaces: [
        {
          id: 1,
          title: 'Cozy room in space',
          thumbnail: './img/SpaceX/21236949258_b9b916f54f_k.jpg',
        },
        {
          id: 2,
          title: 'Cozy room in space station',
          thumbnail: './img/SpaceX/17076243136_e0d0a52e72_k.jpg',
        },
      ],
    };
  }

  render() {
    return (
      <div>
        <Header />
        <input type="text" placeholder="Search space..." />
        {this.state.spaces.map(space => (
          <img key={space.id} src={space.thumbnail} alt={space.title} />
        ))}
      </div>
    );
  }
}

export default App;
