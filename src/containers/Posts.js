import React, {Component} from 'react';
import { connect } from "react-redux";
import PostComponent from '../components/PostComponent';
import './Posts.css';

class Posts extends Component {

    componentWillMount() {
        this._fetchData();
    }

    _fetchData() {
        this.props.getPosts();
    }

    render() {
        return (
            <div>
                <h1>Posts</h1>
                {!!this.props.posts.length && this.props.posts.map((post)=>(
                    <PostComponent key={post.id} post={post}/>
                ))}
            </div>
        );
    }
};

const mapStateToProps = state => {
    return {
        posts: state.posts
    };
};

const mapDispatchToProps = dispatch => {
    return {
        getPosts: () => dispatch({ type: "GET_POSTS" }),
    };
};
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Posts);