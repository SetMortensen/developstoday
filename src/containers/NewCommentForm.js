import React, {Component} from 'react';
import {connect} from "react-redux";

class NewCommentForm extends Component {

    constructor(props) {
        super(props);

        this.addComment = this.addComment.bind(this);
    }

    addComment() {
        let form = document.querySelector('.newCommentForm');
        let formData = JSON.stringify({
            "postId":form.postId.value,
            "body":form.body.value
        });
        this.props.addNewComment(formData);
    }

    render() {
        return (
            <div>
                <h2>Add comment</h2>
                <form className={'newCommentForm'} onSubmit={(e)=>{e.preventDefault();}}>
                    <input readOnly hidden type="text" name="postId" value={this.props.forPost}/>
                    <textarea name="body" cols="30" rows="10">

                    </textarea>
                    <button className={'addNewCommentButton'} type="submit" onClick={this.addComment}>Add</button>
                </form>
            </div>
        );
    }
};

const mapStateToProps = state => {
    return {

    };
};

const mapDispatchToProps = dispatch => {
    return {
        addNewComment: (formData) => dispatch({ type: "ADD_NEW_COMMENT", payload:formData }),
    };
};
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(NewCommentForm);