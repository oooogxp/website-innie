import React, { Component } from 'react';
import './Mom.css';

class Book extends Component {
    render() {
        return(
            <div className="flex-align">
                <article className="flex-align border">
                    <h3>2021.01.13</h3>
                    <h1>P31</h1>
                    <h3>저자 / 하형록</h3>
                    <p className="line-height contents-width">미국의 팀 하스 목사님이 잠언 31장을 토대로 기업을 경영하며 세상과는 다른 성경적 원리 안에서 놀랍게 하나님을 체험한 경험을 담은 책이다.</p>
                </article>
            </div>
        );
    }
}

export default Book;