import React from 'react';

class Header extends React.Component {
  render() {
    return (
      <header>
        <h1>Logo</h1>
        <nav>
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </nav>
      </header>
    )
  }
}

export default Header;