import React, {Component} from 'react';
import './NewPost.css';
import {connect} from "react-redux";

class NewPost extends Component {

    constructor(props) {
        super(props);

        this.addNewPost = this.addNewPost.bind(this);
    }

    addNewPost(){
        let form = document.querySelector('.addNewPost');
        let data = JSON.stringify({
            "title":form.title.value,
            "body":form.body.value
        });
        this.props.newPost(data);
        form.title.value = '';
        form.body.value = '';
    }

    render() {
        return (
            <div>
                <h1>NewPost</h1>
                <form className={'addNewPost'} onSubmit={(e)=>{e.preventDefault();}}>
                    <input type="text"
                           name={'title'}
                           placeholder={'title'}
                          />
                    <textarea name="body" cols="30" rows="10">

                    </textarea>
                    <button onClick={this.addNewPost}>Add</button>
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
        newPost: (data) => dispatch({ type: "NEW_POST", payload:data }),
    };
};
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(NewPost);