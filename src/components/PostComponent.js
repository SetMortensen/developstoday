import React from 'react';
import { Link } from "react-router-dom";
import './PostComponent.css';

const PostComponent = (props) => (
    <div className={'postComponent'} title={''}>
        <div className={'postComponent__header'}>
            <div className={'postComponent__header_author'}>
                Автор: {props.post.author||'Аноним'}
            </div>
            <div className={'postComponent__header_comments'}>
                Комментариев: {props.post.comments.length}
            </div>
            <div className={'postComponent__header_date'}>
                {props.post.date}
            </div>
        </div>
        <div className={'postComponent__content'}>
            <div className={'postComponent__content_title'}>
                <Link to={'/posts/'+props.post.id}>{props.post.title}</Link>
            </div>
            <div className={'postComponent__content_body'}>
                {props.post.body}
            </div>
        </div>
    </div>
);

export default PostComponent;