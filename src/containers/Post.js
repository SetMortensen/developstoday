import React, {Component} from 'react';
import './Post.css';
import {connect} from "react-redux";
import FullPost from '../components/FullPost'

class Post extends Component {

    componentWillMount() {
        this._fetchData();
    }

    _fetchData() {
        this.props.getPost(this.props.match.params.postid);
    }

    render() {
        return (
            <div>
                <h1>Post</h1>
                {!!this.props.post && <FullPost post={this.props.post}/>}
            </div>
        );
    }
};

const mapStateToProps = state => {
    return {
        post: state.currentPost
    };
};

const mapDispatchToProps = dispatch => {
    return {
        getPost: (postid) => dispatch({ type: "GET_POST", payload:postid }),
    };
};
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Post);