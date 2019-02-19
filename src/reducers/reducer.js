const initialState = {
    posts:[]
};

const reducer = (state = initialState, action) => {
    const newState = { ...state };

    switch (action.type) {
        case "GET_POSTS_ASYNC":
            newState.posts = action.payload;
            break;
        case "GET_POST_ASYNC":
            newState.currentPost = action.payload;
            break;
        case "EDIT_POST_ASYNC":
            let postId;
            newState.posts.forEach((p,i)=>{
                if (p.id === action.payload.id) {
                    postId = i;
                    newState.posts[i] = {
                        id:action.payload.id,
                        comments:p.comments,
                        title:action.payload.title,
                        author:action.payload.author,
                        body:action.payload.body,
                        date:p.date
                    }
                }
            });
            newState.currentPost = {
                id:action.payload.id,
                comments:newState.posts[postId].comments,
                author:newState.posts[postId].author,
                title:action.payload.title,
                body:action.payload.body,
                date:newState.posts[postId].date
            };
            break;
        case "ADD_NEW_POST_ASYNC":
            alert('Post Added');
            newState.posts = [
                ...newState.posts,
                {
                    ...action.payload,
                    comments:[]
                }
            ];
            break;
        case "ADD_NEW_COMMENT_ASYNC":
            newState.currentPost = {
                ...newState.currentPost,
                comments: [
                    ...newState.currentPost.comments,
                    {
                        id:action.payload.id,
                        postId:action.payload.postId,
                        body:action.payload.body
                    }
                ]
            };
            break;
        default:
            break;
    }
    return newState;
};

export default reducer;