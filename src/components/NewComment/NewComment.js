import React, { Component } from 'react';
import api from '../../api';

import './NewComment.css';

class NewComment extends Component {
    state = {
        email: '',
        name: '',
        body: ''
    }

    commentDataHandler = () => {
        const data = {
            email: this.state.email,
            name: this.state.name,
            body: this.state.body
        };
        api.post('/comments', data)
            .then(response => {
                console.log(response);
            });
    }

    render () {
        return (
            <div className="NewComment">
                <h1>Add a Comment</h1>
                <label>Email</label>
                <input type="email" value={this.state.email} onChange={(event) => this.setState({email: event.target.value})} />
                <label>Name</label>
                <input type="text" value={this.state.name} onChange={(event) => this.setState({name: event.target.value})} />
                <label>Body</label>
                <textarea rows="4" value={this.state.body} onChange={(event) => this.setState({body: event.target.value})} />
                <button onClick={this.commentDataHandler}>Add Comment</button>
            </div>
        );
    }
}

export default NewComment;