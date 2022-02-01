import React, { Component } from 'react';

export default class Counter extends Component {
    state ={ 
        count:0,
        tags:[]
    };
    // constructor
    //There are two ways we can bind methods and function
    // 1.Always bind method/function within constructor
    // 2.Convert method/function within arrow function 
    // constructor(){
    //     super();
    //     this.handleIncrement = this.handleIncrement.bind(this);
    // }
    styles={
        fontSize:20,
        fontWeight:"bold"
    }
    //   conditional rendering
    returnTags(){
        if(this.state.tags.length === 0) return <p>There are no tags</p>

        return <ul>
        {this.state.tags.map(tag => <li key={tag}>{tag}</li>)}
    </ul>
    }

    handleIncrement=(product)=>{
        console.log(product);
        this.setState({
            count: this.state.count +1
        })
    }
    //pass event argument there are two ways
    //1.create another method and call main method within it as below
    // doHandleIncrement=()=>{
    //     this.handleIncrement({id:1})
    // }
    //2.call main method from event with arrow function paasing an argument
  render() { 
    
    return (
        <React.Fragment>
            {/* dynamic css */}
            <span style={this.styles} className={this.getBadgeClasses()}>{this.formatCount()}</span>
            {/* inline css */}
            <button onClick={()=>this.handleIncrement({id:1})} style={{fontSize:30}} className='btn btn-secondary sm'>Increment</button>
            {/* short conditional rendering */}
            <br></br>
            {this.state.tags.length === 0 && "Please create new tag"} 
            {/* In the above line first one is trusy that's why text will return */}
            {this.returnTags()}
        </React.Fragment>
    );
  } 
  //Dynamic classess
    getBadgeClasses() {
        let classes = "badge m-2 badge-";
        classes += this.state.count === 0 ? "warning" : "primary";
        return classes;
    }

  formatCount(){
      const {count} = this.state;
      return count === 0 ? 'ZERO' : count;
  }
}


