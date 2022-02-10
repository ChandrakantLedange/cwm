import React, { Component } from 'react';
class Navbar extends Component {
    
    render() { 
        console.log("Navbar: 5 :", this.props.totalCount);
        return (
            <nav className="navbar navbar-light bg-light">
  <a className="navbar-brand" href="#">Navbar 
  <span className='badge badge-pill badge-secondary ml-3'>{this.props.totalCount}</span>
  </a>
</nav>
        );
    }
}
 
export default Navbar;