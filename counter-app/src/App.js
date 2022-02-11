import './App.css';
import React, { Component } from 'react';
import Counters from './components/Counters';
import Navbar from './components/Navbar';


class APP extends Component {
  state = { 
    counters:[
        {id:1,value:1},
        {id:2,value:0},
        {id:3,value:0},
        {id:4,value:0},
    ]
 } 
//Mouting first step
 constructor(props){
  super(props);
  console.log("App - constructor",this.props);
  // this.state = this.props.something
}

//Mouting third step
//here is the right (ajax call) place to call api or fetch data from the server
//reason is this will call after component render
componentDidMount(){
  console.log("APP - ComponentDidMount");
}
 handleIncrement=(counter)=>{
    //  console.log("controlled by parent",counter);
    //  spread operator
     const counters = [...this.state.counters];
     const index = counters.indexOf(counter);
     counters[index] = {...counter};
     counters[index].value++;
     this.setState({counters});
 }
 handleDecrement=(counter)=>{
    //  console.log("controlled by parent",counter);
    //  spread operator
     const counters = [...this.state.counters];
     const index = counters.indexOf(counter);
     counters[index] = {...counter};
     counters[index].value--;
     this.setState({counters});
 }
 handleDelete=(counterId)=>{
     const counters = this.state.counters.filter(c => c.id !== counterId);
     this.setState({
         counters
     })
 }
 handleReset=()=>{
     const counters = this.state.counters.map(c =>{
         c.value = 0;
         return  c;
     })
     this.setState({
         counters
     })
 }

 //render is the second mounting step
  render() { 
    console.log("APP- rendered");
    // console.log("APP : 41 :",this.state.counters.length);
    
    return (
      <div className="App">
        <Navbar
        totalCount={this.state.counters.filter(c => c.value > 0).length}
        />
        <main className='container'>
  
        <Counters
        counters={this.state.counters}
        onIncrement={this.handleIncrement}
        onDecrement={this.handleDecrement}
        onDelete={this.handleDelete}
        onReset={this.handleReset}
        />
        </main>
      </div>
    );
  }
}
 
export default APP;
