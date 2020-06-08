import React from 'react';
import './Comment.css';

const comment = (props) => (
    <div className='Comment'>
        <div>
            <div>{props.name}</div>
            <div>{props.email}</div>
        </div>
        <div><p>{props.body}</p></div>
    </div>
)

export default comment;