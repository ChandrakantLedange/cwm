import React, { Component } from 'react';
import Counter from '../components/Counter'

class Counters extends Component {
    
    render() { 
        console.log("Counters - rendered");
        const {counters,onReset,onDelete,onIncrement,onDecrement} = this.props;
        return (
            <div>
                <button className='btn btn-primary sm m-2' style={{display:'flex'}} onClick={onReset}>Reset</button>
                {counters.map(counter =>
                <Counter
                 key={counter.id} 
                 onDelete={onDelete} 
                 onIncrement={onIncrement} 
                 onDecrement={onDecrement} 
                 counter={counter}
                 >
                    {/* passing children within component */}
                    {/* <h4>Counter #{counter.id}</h4> */}
                </Counter> )}
            </div>
        );
    }
}
 
export default Counters;