import React, { Component } from 'react';
import './Mom.css';
import Btn from './Btn';
import { Link } from 'react-router-dom';

class Title extends Component {  
    render(){
        return(
            <div className="flex-align">
                <h2 className="flex-title">YOON JEONG IN</h2>
                <div className="hover-btn button flex-menu-align">
                    <Link to="/about"><Btn title="About"/></Link>
                    <Link to="/blog"><Btn title="Blog"/></Link>
                    <Link to="/book"><Btn title="Book"/></Link>
                </div>
            </div>
        );
    }
}

export default Title;