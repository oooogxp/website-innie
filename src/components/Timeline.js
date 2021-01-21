import React, { Component } from 'react';
import './Mom.css';


class Timeline extends Component {
    render(){
        return(
            <div className="flex-align">
                <div className="dot">
                    <span className="content-a">2021.01
                    <span className="content-b">I made my website!</span>
                    </span>  
                </div>
                <div className="line"></div>
                <div className="dot">
                    <span className="content-a">2020. 12
                    <span className="content-b">I am married!:)</span>
                    </span>
                </div>
            </div>
        );
    }
}

export default Timeline;