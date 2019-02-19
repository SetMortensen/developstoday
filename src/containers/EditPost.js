import React, {Component} from 'react';
import { connect } from "react-redux";
import PostComponent from '../components/PostComponent';
import EditPostForm from '../containers/EditPostForm';

class EditPost extends Component {

    componentWillMount() {
        this._fetchData();
    }

    _fetchData() {
        this.props.getPost(this.props.match.params.postid);
    }

    render() {
        const self = this;
        return (
            <div>
                <h1>EditPost</h1>
                {!!this.props.post && (
                    <PostComponent post={self.props.post}/>
                )}
                {!!this.props.post && (
                    <EditPostForm post={self.props.post} forPost={self.props.post.id}/>
                )}
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
)(EditPost);