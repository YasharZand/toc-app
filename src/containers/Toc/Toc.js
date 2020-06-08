import React, { Component } from 'react';
import api from '../../api'
import Comment from '../../components/Comment/Comment';
import './Toc.css';

class Toc extends Component {
    state = {
        comments: [],
        filter: '',
        lastIndex: 10,
    }

    isBottom(el) {
        return el.getBoundingClientRect().bottom <= window.innerHeight;
    }

    componentDidMount() {
        document.addEventListener('scroll', this.trackScrolling);
        this.listHandler(this.state.lastIndex, 10);
    }

    listHandler = (index, step) => {
        api.get('/comments')
            .then(response => {
                const newComments = response.data.slice(index, index + step);
                this.setState({ comments: this.state.comments.concat(newComments) });
                console.log(this.state.comments);
            })
            .catch(error => {
                this.setState({ error: true });
            });
    }

    componentWillUnmount() {
        document.removeEventListener('scroll', this.trackScrolling);
    }

    trackScrolling = () => {
        const wrappedElement = document.getElementById('commentlist');
        if (this.isBottom(wrappedElement)) {
            console.log('List bottom reached');            
            this.setState({lastIndex: this.state.lastIndex + 10});
            this.listHandler(this.state.lastIndex, 10);
            console.log(this.state.lastIndex);
            // document.removeEventListener('scroll', this.trackScrolling);
        }
    };

    onChangeHandler(e) {
        this.setState({
            filter: e.target.value,
        })
    }


    render() {

        let comments = <p style={{ textAlign: 'center' }}>No Comments Found!</p>;
        if (!this.state.error) {
            comments = this.state.comments
                .filter(d => this.state.filter === '' || d.email.includes(this.state.filter) || d.body.includes(this.state.filter))
                .map(
                    comment => {
                        return <Comment key={comment.id} name={comment.name} email={comment.email} body={comment.body} />
                    }
                );
        }
        return (
            <div>
                <section>
                </section>
                <section>
                    <div className="Filter">
                        <label>Comment Filter:</label>
                        <input value={this.state.input} type="text" placeholder="Filter by body and email" onChange={this.onChangeHandler.bind(this)} />
                    </div>
                    <div id="commentlist" className="Comments">
                        {comments}
                    </div>
                </section>
            </div>
        );

    }
}

export default Toc;
