import React, { Component } from 'react';
import './Submenu.css';
import './Title.css';

// 하위메뉴 만드는 방법. 중요한 것 : return 안에서 function 실행할 때는 react 가 알아듣는 지정된 말로 해야 함. (react 웹사이트에서 검색해보기)

class Entertainments extends Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.ifOn = this.ifOn.bind(this);
        this.ifOff = this.ifOff.bind(this);
        this.state = {
            dropdownOpen : false
        };
    }

    toggle() {
        this.setState(prevState => ({
          dropdownOpen: !prevState.dropdownOpen
        }));
      }

    ifOn() {
        this.setState( {dropdownOpen: true} );
    }

    ifOff() {
        this.setState( {dropdownOpen: false} );
    }

    render() {
        
        const menu = 
        <div className="font-size flex-align">
            <div>Movie</div>
            <div>Book</div>
            <div>Music</div>
        </div>;

        return(
            <div className="hover-btn" onMouseOver={this.ifOn} onMouseLeave={this.ifOff} isOpen={this.state.dropdownOpen} toggle={this.toggle}>
                <button className={`${this.state.dropdownOpen ? "bold" : ""} button`}>{this.props.entTitle}</button>
                <div>
                    <div>{this.state.dropdownOpen ? menu : ''}</div>
                </div>
            </div>
        );
    }
}

export default Entertainments;