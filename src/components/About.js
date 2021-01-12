import React, { Component } from 'react';

class About extends Component {
    render() {
        return(
            <div>
                <h1 className="hFont flex-align">Hello!</h1>
                <div className="pFont flex-align">
                    <p>개발자를 향한 첫 프로젝트 Website-innie 입니다.</p>
                    <p className="bold">프로젝트 목표</p>
                    <ul className="contents-border">
                        <li> 프론트엔드 먼저 예쁘게 완성!</li>
                        <li><a target="_blank" rel="noopener noreferrer" href="https://strapi.io/">strapi</a>와 연결하는 것 이해하기</li>
                        <li>한 달 안에 완성하기</li>
                    </ul>
                    <p>좋은 개발자가 되기 위한 2021년 첫 프로젝트 화이팅!</p>
                </div>
            </div>
        );
    }
}

export default About;