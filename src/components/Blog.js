import React, { Component } from 'react';

class Blog extends Component {  
    constructor(props) {
        super(props);

        this.state = {
            blogLists: [],
        };
    }
    componentDidMount() {
        fetch('http://localhost:1337/blogs')
            .then(res => res.json())
            .then((data) => {
                this.setState({blogLists: data});
            });
    }

    render(){
        console.log('State:', this.state.blogLists);
        return(
            <div>
                <div className="flex-align">
                    <article className="flex-align border">
                        <h3>2021.01.13</h3>
                        <h1>첫 버그를 만났다</h1>
                        <p className="line-height contents-width">지금은 새벽 한 시. 이 와중에 발견한 첫 버그..! 내가 첫 버그라니!<br/>
                        Entertainments 메뉴에 마우스를 갖다 대면 Submenu가 나와야 하는데, mouseover가 안 된 상태인데도 Submenu가 따단..!<br/>
                        이유를 알려줘...! 모든 개발자들의 마음인가.. 겪어보니 이렇게 찝찝할 수가 없다. </p>
                    </article>
                    <article className="flex-align border">
                        <h3>2021.01.12</h3>
                        <h1>Snowy Day!</h1>
                        <p className="line-height contents-width">지난주에 이어 오늘도 폭설이 내렸다. 순식간에 5cm는 쌓인 것 같다. 온 세상이 하얗다!<br/>
                        방송에서 제설 작업을 할 사람을 찾는다고 도움을 요청했다. 관리사무소 직원분들 일손이 모자른가 보다.<br/>
                        내일 서울에 가야하는데 운전은 어려울 것 같다. 오늘 부디 아무 사고도 일어나지 않길!</p>
                    </article>
                    <article className="flex-align border">
                        <h3>2021.01.11</h3>
                        <h1>너무 졸리다</h1>
                        <p className="line-height contents-width">요즘(?) 아침에 눈 뜨는게 너무 힘들다.<br/>
                        1시 쯤이면 일찍 자는 편인 것 같은데, 내 몸은 하루 8시간 이상 꼬박 자 줘야 제 기능을 하는 듯 하다.<br/>
                        운동 부족도 원인이겠지. 그렇지만 운동은 너무 어려운 일! 잠이 조금만 줄었으면 좋겠다.<br/>
                        아니면 내 집중력이 2배로 높아져서 일과를 빨리 마치고 잘 수 있다면 내 죄책감이 조금은 덜 할 것 같다. 흑흑..</p>
                    </article>
                    <article className="flex-align border">
                        <h3>2021.01.10</h3>
                        <h1>애플 전기차</h1>
                        <p className="line-height contents-width">애플에서 전기 자동차를 만들 예정이라는 기사를 보고 너무 설렜다.<br/>
                        테슬라와 애플카의 경쟁구도! 앞으로 더 좋은 전기차들을 많이 만나게 될 것 같아 기대된다.<br/>
                        애플 주식은 어디까지 오룰까! 한 주라도 제대로 가져보고 싶다.<br/></p>
                    </article>
                </div>
                {/* {this.state.blogLists && this.state.blogLists.map(blog => <div> {blog.Title} </div> )} */}
            </div>
        );
    }
}

export default Blog;