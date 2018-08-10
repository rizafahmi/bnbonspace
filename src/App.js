import React, { Component } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import styles from './styles';

class App extends Component {
  constructor() {
    super();
    this.state = {
      spaces: [
        {
          id: 1,
          title: 'Cozy room in Mars',
          thumbnail: './img/SpaceX/21236949258_b9b916f54f_k.jpg',
        },
        {
          id: 2,
          title: 'Cozy room in space station',
          thumbnail: './img/SpaceX/17076243136_e0d0a52e72_k.jpg',
        },
        {
          id: 3,
          title: 'Nice room in the rooftop',
          thumbnail: './img/SpaceX/16851653497_3677957464_k.jpg',
        },
      ],
    };
  }

  render() {
    return (
      <div style={styles.container}>
        <Header />
        <div style={styles.searchBar}>
          <input
            style={styles.searchInput}
            type="text"
            placeholder="Search space..."
          />
        </div>
        <div style={styles.spaces}>
          {this.state.spaces.map(space => (
            <div key={space.id}>
              <img
                style={styles.thumbnail}
                src={space.thumbnail}
                alt={space.title}
              />
              <h3>
                {space.title}
              </h3>
            </div>
          ))}
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
