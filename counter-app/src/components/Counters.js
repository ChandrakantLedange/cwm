import React, { Component } from 'react';
import Counter from '../components/Counter'

class Counters extends Component {
    
    render() { 
        return (
            <div>
                <button className='btn btn-primary sm m-2' onClick={this.props.onReset}>Reset</button>
                {this.props.counters.map(counter =>
                <Counter
                 key={counter.id} 
                 onDelete={this.props.onDelete} 
                 onIncrement={this.props.onIncrement} 
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