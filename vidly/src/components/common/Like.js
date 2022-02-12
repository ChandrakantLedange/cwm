import React, { Component } from 'react';

//Input: liked : boolean
//Output : onClick

//Like is a stateless functional component
const Like = (props) => {
    let classes = "fa fa-heart";
        if(!props.liked){
            classes += "-o"; 
        }
        return (
            <i 
            onClick={props.onLikeToggle}
            className={classes} 
            style={{cursor:'pointer'}} 
            aria-hidden="true"
            ></i>
        );
}
 
export default Like;
