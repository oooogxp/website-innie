import React, { Component } from 'react';
import './Title.css';
import './HoverBtn.css';
import Btn from './Btn';

class Title extends Component {
    
    render(){
        return(
            <div className="flex-align">
                <h2>YOON JEONG IN</h2>
                <div className="hover-btn flex-menu-align">
                    <Btn title="About"/>
                    <Btn title="Blog"/>
                    <Btn title="Portfolio"/>
                    <Btn title="Gallery"/>
                </div>
            </div>
        );
    }
}

export default Title;