import React from 'react';
import './PostComponent.css';
import { Link } from "react-router-dom";
import Comment from './Comment';
import NewCommentForm from '../containers/NewCommentForm';

const FullPost = (props) => (
    <div className={'postComponent'}>
        <div className={'postComponent__header'}>
            <div className={'postComponent__header_author'}>
                Автор: {props.post.author||'Аноним'}
                <Link to={'/edit-post/'+props.post.id}> (edit)</Link>
            </div>
            <div className={'postComponent__header_date'}>
                {props.post.date}
            </div>
        </div>
        <div className={'postComponent__content'}>
            <div className={'postComponent__content_title FullPost_title'}>
                {props.post.title}
            </div>
            <div className={'postComponent__content_body'}>
                {props.post.body}
            </div>
        </div>
        {!!props.post.comments.length && (
            <div className={'postComponent__comments'}>
                <div className={'postComponent__comments_title'}>
                    Комментарии
                </div>
                {props.post.comments.map((comment)=>(
                    <Comment key={comment.id} comment={comment}/>
                ))}
            </div>
        )}
        <NewCommentForm forPost={props.post.id}/>
    </div>
);

export default FullPost;