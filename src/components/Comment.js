import React from 'react';
import './Comment.css';

const Comment = (props) => (
    <div className={'Comment'}>
        <div className={'Comment__content'}>
            <div className={'Comment__content_body'}>
                {props.comment.body}
            </div>
            <div className={'Comment__content_date'}>
                {!!props.comment.date&&props.comment.date}
            </div>
        </div>
    </div>
);

export default Comment;