import React, { Component } from 'react';
import './HoverBtn.css';

class Btn extends Component {

    constructor(props) {
        super(props);
        this.handleMouseHoverIn = this.handleMouseHoverIn.bind(this);
        this.handleMouseHoverOut = this.handleMouseHoverOut.bind(this);
        this.state = {
            isHovering: false,
        };
    }

    handleMouseHoverIn() {
        this.setState({
            isHovering: true,
        });
    }

    handleMouseHoverOut() {
        this.setState({
            isHovering: false,
        })
    }

    render(){
        return(
            <div className='hover-btn'>
                <button 
                    onMouseEnter={this.handleMouseHoverIn}
                    onMouseLeave={this.handleMouseHoverOut}
                    className={`${this.state.isHovering ? "bold" : ""} button`}>{this.props.title}
                </button>
            </div>
        );
    }
}

export default Btn;