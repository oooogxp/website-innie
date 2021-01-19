import React, { Component } from 'react';
import './Mom.css';

class Book extends Component {
    render() {
        return(
            <div className="book-container">
                <article className="flex-align border">
                    <h3>2021.01.15</h3>
                    <h1>주린이도 술술 읽는 친절한 주식책</h1>
                    <h3>최정희, 이슬기</h3>
                    <p className="line-height contents-width">주식 투자 공부를 위해 구매한 책이다. 다른 책들은 내용이 기본 지식이 있어야 이해되지만 이 책은 정말 초보를 위한 가이드여서 마음에 들었다.</p>
                </article>
                <article className="flex-align border">
                    <h3>2021.01.14</h3>
                    <h1>제품의 언어</h1>
                    <h3>존 마에다</h3>
                    <p className="line-height contents-width">세계적인 UX디자이너 존 마에다만의 디지털 세계를 향한 디자인 법칙을 담은 책.</p>
                </article>
                <article className="flex-align border">
                    <h3>2021.01.13</h3>
                    <h1>독일인의 사랑</h1>
                    <h3>막스 뮐러</h3>
                    <p className="line-height contents-width">단순한 두 남녀의 사랑 이야기라기 보다 신을 향한 순수한 신앙 그 안에서의 두 사람의 대화와 관점이 흥미로웠던 책이다.</p>
                </article>
                <article className="flex-align border">
                    <h3>2021.01.13</h3>
                    <h1>P31</h1>
                    <h3>하형록</h3>
                    <p className="line-height contents-width">미국의 팀 하스 목사님이 잠언 31장을 토대로 기업을 경영하며 세상과는 다른 성경적 원리 안에서 놀랍게 하나님을 체험한 경험을 담은 책이다.</p>
                </article>
                <article className="flex-align border">
                    <h3>2021.01.12</h3>
                    <h1>book2</h1>
                    <h3>존 마에다</h3>
                    <p className="line-height contents-width">세계적인 UX디자이너 존 마에다만의 디지털 세계를 향한 디자인 법칙을 담은 책.</p>
                </article>
                <article className="flex-align border">
                    <h3>2021.01.11</h3>
                    <h1>book1</h1>
                    <h3>막스 뮐러</h3>
                    <p className="line-height contents-width">단순한 두 남녀의 사랑 이야기라기 보다 신을 향한 순수한 신앙 그 안에서의 두 사람의 대화와 관점이 흥미로웠던 책이다.</p>
                </article>
            </div>
        );
    }
}

export default Book;