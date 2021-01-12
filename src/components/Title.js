import React, { Component } from 'react';
import './Mom.css';
import Btn from './Btn';
import Entertainments from './Entertainments';
import { Link } from 'react-router-dom';

class Title extends Component {  
    render(){
        return(
            <div className="flex-align">
                <h2>YOON JEONG IN</h2>
                <div className="hover-btn button flex-menu-align">
                    <Link to="/about"><Btn title="About"/></Link>
                    <Link to="/blog"><Btn title="Blog"/></Link>
                    <Link to="/entertainments"><Entertainments entTitle="Entertainments"/></Link>
                </div>
            </div>
        );
    }
}

export default Title;