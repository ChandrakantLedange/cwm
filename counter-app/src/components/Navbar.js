import React from 'react';

// Stateless function component that means in this we are not declaring state, data is coming via porps
//shortcut key sfc>enter

const Navbar =(props)=>{
    console.log("Navbar: 5 :", props.totalCount);
    return (
        <nav className="navbar navbar-light bg-light">
    <a className="navbar-brand" href="#">Navbar 
    <span className='badge badge-pill badge-secondary ml-3'>{props.totalCount}</span>
    </a>
    </nav>
    );
    
}

 
export default Navbar;