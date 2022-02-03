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
     handleDelete=()=>{
         console.log("delete button clicked");
     }
    render() { 
        return (
            <div>
                {this.state.counters.map(counter =><Counter key={counter.id} value={counter.value} onDelete={this.handleDelete}>
                    {/* passing children within component */}
                    <h4>Counter #{counter.id}</h4>
                </Counter> )}
            </div>
        );
    }
}
 
export default Counters;