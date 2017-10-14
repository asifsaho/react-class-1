import React from 'react';


class SinglePost extends React.Component {
    constructor(props){
        super(props);
    }

    render(){
        return(
            <li className="list-group-item">
                <h3>{this.props.title}</h3>
                <p>{this.props.body}</p>
                <button onClick={ () => this.props.singleView(this.props.id)}>View Details</button>
            </li>
        )
    }
}

export default SinglePost;