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
                {this.state.blogLists && this.state.blogLists.map(blog => <div> {blog.Title} </div> )}
            </div>
        );
    }
}

export default Blog;