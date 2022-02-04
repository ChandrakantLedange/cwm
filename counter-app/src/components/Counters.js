import React, { Component } from 'react';
import Counter from '../components/Counter'

class Counters extends Component {
    state = { 
        counters:[
            {id:1,value:1},
            {id:2,value:0},
            {id:3,value:0},
            {id:4,value:0},
        ]
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
    render() { 
        return (
            <div>
                <button className='btn btn-primary sm m-2' onClick={this.handleReset}>Reset</button>
                {this.state.counters.map(counter =>
                <Counter
                 key={counter.id} 
                 onDelete={this.handleDelete} 
                 counter={counter}
                 >
                    {/* passing children within component */}
                    <h4>Counter #{counter.id}</h4>
                </Counter> )}
            </div>
        );
    }
}
 
export default Counters;