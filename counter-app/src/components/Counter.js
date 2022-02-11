import React, { Component } from 'react';

export default class Counter extends Component {
//Updating phase
//whenever prop and state update this lifecycle will call
componentDidUpdate(prevProps,prevState){
  console.log("prevProps",prevProps);
  console.log("prevState",prevState);
  if(prevProps.counter.value !== this.props.counter.value){
    //Ajax call and get new data from server
  }
}

    // remove state beacause single source of truth
    // state ={ 
    //     value:this.props.counter.value,
    //     tags:[]
    // };

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
    // returnTags(){
    //     if(this.state.tags.length === 0) return <p>There are no tags</p>

    //     return <ul>
    //     {this.state.tags.map(tag => <li key={tag}>{tag}</li>)}
    // </ul>
    // }

    // handleIncrement=(product)=>{
    //     console.log(product);
    //     // props are read only & state - each component having their own state
    //     // this.props.value = 30;
    //     this.setState({
    //         value: this.state.value + 1
    //     })
    // }

    //pass event argument there are two ways
    //1.create another method and call main method within it as below
    // doHandleIncrement=()=>{
    //     this.handleIncrement({id:1})
    // }
    //2.call main method from event with arrow function paasing an argument

  render() { 
    console.log("Counter - rendered");
    // console.log("porps",this.props);
    return (
        <React.Fragment>
            {/* calling children prop */}
            {this.props.children}

            {/* dynamic css */}
            <span style={this.styles} className={this.getBadgeClasses()}>{this.formatCount()}</span>

            {/* inline css */}
            <button onClick={()=>this.props.onIncrement(this.props.counter)} style={{fontSize:30}} className='btn btn-secondary sm'>Increment</button>

            {/* event handling */}
            <button className='btn btn-danger sm m-2' onClick={()=>this.props.onDelete(this.props.counter.id)}>Delete</button>

            {/* short conditional rendering */}
            <br></br>
            {/* {this.state.tags.length === 0 && "Please create new tag"}  */}
            {/* In the above line first one is trusy that's why text will return */}
            {/* {this.returnTags()} */}
        </React.Fragment>
    );
  } 
  //Dynamic classess
    getBadgeClasses() {
        let classes = "badge m-2 badge-";
        classes += this.props.counter.value === 0 ? "warning" : "primary";
        return classes;
    }

  formatCount(){
      const {value} = this.props.counter;
      return value === 0 ? 'ZERO' : value;
  }
}

//what is controlled component
//> it means it don't have loca state
//>handled by parent component through the props



