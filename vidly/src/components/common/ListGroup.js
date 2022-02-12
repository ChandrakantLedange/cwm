import React from 'react';

const ListGroup = (props) => {
    const {items,textProperty,valueProperty} = props;
    return ( 
        <ul className='list-group' style={{marginTop:38}}>
            {items.map((item)=>(
                <li className='list-group-item' key={item[valueProperty]}>
                    {item[textProperty]}
                </li>
            ))}
        </ul>
     );
}

// Default props // instead of passing as props we use as below
ListGroup.defaultProps={
textProperty:"name",
valueProperty:'_id'
}
 
export default ListGroup;