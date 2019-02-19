import React from "react";
import {BrowserRouter as Router,Route,Link } from "react-router-dom";
import Home from './containers/Home';
import Posts from './containers/Posts';
import Post from './containers/Post';
import NewPost from './containers/NewPost';
import EditPost from './containers/EditPost';

const BasicRouter = () => (
    <Router>
        <div>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/posts">Posts</Link>
                </li>
                <li>
                    <Link to="/new-post">Add new post</Link>
                </li>
            </ul>

            <hr />

            <Route exact path="/" component={Home} />
            <Route exact path="/posts" component={Posts} />
            <Route exact path="/posts/:postid" component={Post} />
            <Route path="/new-post" component={NewPost} />
            <Route path="/edit-post/:postid" component={EditPost} />
        </div>
    </Router>
);

export default BasicRouter;