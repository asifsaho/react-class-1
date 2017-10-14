import React from 'react';
import SinglePost from './mini-components/SinglePost'
import axios from 'axios';
import './App.css';

class App extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            posts: [],
            details: 'Details post will goes here',
            requestedPost: {},
            requestedPostNumber: null
        }

    }

    componentWillMount(){
        document.title = 'All movies will be shown here'

        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then((res) => {
                this.setState({posts: res.data});
            })
            .catch((err) => {
                console.log(err);
            })
    }

    singlePostView = id => {
        console.log('Showing post details of ' + id);

        axios.get('https://jsonplaceholder.typicode.com/posts/' + id).then((res) => {
            this.setState({details: res.data.body});
            console.log(res.data);
        })
    }

    requestedPostView = (event) => {
        event.preventDefault();
        axios.get('https://jsonplaceholder.typicode.com/posts/' + this.state.requestedPostNumber).then((res) => {
            this.setState({requestedPost: res.data});
        })
    }

    postNumberSet = (ev) => {
        this.setState({requestedPostNumber: ev.target.value})
        console.log(ev.target.value);
    }

    render() {
        return (
            <div className="App">
                <div className="container">
                    <div className="body">
                        <div className="row">
                            <div className="col-xs-12">
                                <form onSubmit={this.requestedPostView}>
                                    <input onChange={this.postNumberSet} type="number" className="form-control"/>
                                </form>
                            </div>
                            <div className="col-xs-12">
                                <h2>{this.state.requestedPost.title}</h2>
                                <p>{this.state.requestedPost.body}</p>
                            </div>

                            <div className="col-xs-8">
                                <ul className="list-group">
                                    {this.state.posts.map(
                                        post => <SinglePost singleView={this.singlePostView} key={post.id} id={post.id} title={post.title} body={post.body}/>
                                    )}
                                </ul>
                            </div>

                            <div className="col-xs 4">
                                <p>{this.state.details}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
