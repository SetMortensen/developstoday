import React, {Component} from 'react';
import {connect} from "react-redux";

class EditPostForm extends Component {

    constructor(props) {
        super(props);

        this.editPostHandler = this.editPostHandler.bind(this);
    }

    editPostHandler() {
        let form = document.querySelector('.editPostForm');
        let formData = JSON.stringify({
            "title":form.title.value,
            "body":form.body.value
        });
        let postid = form.postId.value;
        this.props.editPost(formData,postid);
    }

    render() {
        return (
            <div>
                <h2>Edit post</h2>
                <form className={'editPostForm'} onSubmit={(e)=>{e.preventDefault();}}>
                    <input readOnly hidden type="text" name="postId" value={this.props.forPost}/>
                    <input type="text" name="title" placeholder={'title'}/>
                    <textarea name="body" cols="30" rows="10">

                    </textarea>
                    <button className={'editPost'} type="submit" onClick={this.editPostHandler}>Edit</button>
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
        editPost: (formData,postid) => dispatch({ type: "EDIT_POST", payload:{formData,postid} }),
    };
};
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(EditPostForm);