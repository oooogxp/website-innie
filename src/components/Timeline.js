import React, { Component } from 'react';
import './Mom.css';


class Timeline extends Component {
    render(){
        return(
            <div className="flex-align">
               <p className="dot"></p>
               <p className="line"></p>
               <p className="dot"></p>
            </div>
        );
    }
}

export default Timeline;