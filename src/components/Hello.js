import React from 'react';
import Header from './Header.js';
import Footer from './Footer.js';

class Hello extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <p>Hello KODE</p>
        <Footer />
      </div>
    )
  }
}

export default Hello;