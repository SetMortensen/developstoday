import { take, put, call, fork } from 'redux-saga/effects';

/**
 **** Subroutines ****
 */
async function gps(){
    const response = await fetch('https://simple-blog-api.crew.red/posts?_embed=comments');
    const json = await response.json();

    return json.filter((post)=>{
        return !!post.title;
    });
}

async function g1ps(postid){
    const response = await fetch(`https://simple-blog-api.crew.red/posts/${postid}?_embed=comments`);
    const json = await response.json();
    return json;
}
async function ncs(formData){
    let myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    const response = await fetch(`https://simple-blog-api.crew.red/comments`,{
        method: "POST",
        headers: myHeaders,
        body: formData
    });
    const json = await response.json();
    return json;
}

async function aps(formData){
    let myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    const response = await fetch(`https://simple-blog-api.crew.red/posts`,{
        method: "POST",
        headers: myHeaders,
        body: formData
    });
    const json = await response.json();
    return json;
}

async function eps(data){
    let myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    const response = await fetch(`https://simple-blog-api.crew.red/posts/${data.postid}`,{
        method: "PUT",
        headers: myHeaders,
        body: data.formData
    });
    const json = await response.json();
    return json;
}

export function* getPostsSaga() {
    const response = yield call(gps);
    yield put({type:'GET_POSTS_ASYNC', payload:response});
}

export function* getPostSaga(postid) {
    const response = yield call(g1ps,postid);
    yield put({type:'GET_POST_ASYNC', payload:response});
}

export function* newCommentSaga(formData) {
    const response = yield call(ncs,formData);
    yield put({type:'ADD_NEW_COMMENT_ASYNC', payload:response});
}

export function* editPostSaga(data) {
    const response = yield call(eps,data);
    yield put({type:'EDIT_POST_ASYNC', payload:response});
}

export function* addPostSaga(data) {
    const response = yield call(aps,data);
    yield put({type:'ADD_NEW_POST_ASYNC', payload:response});
}

/**
 ****************************** WATCHERS ***********************************
 **/

export function* watchGetPosts() {
    while (true) {
        yield take('GET_POSTS');
        yield getPostsSaga();
    }
}

export function* watchGetPost() {
    while (true) {
        const {payload} = yield take('GET_POST');
        yield getPostSaga(payload);
    }
}
export function* watchNewComment() {
    while (true) {
        const {payload} = yield take('ADD_NEW_COMMENT');
        yield newCommentSaga(payload);
    }
}

export function* watchEditPost() {
    while (true) {
        const {payload} = yield take('EDIT_POST');
        yield editPostSaga(payload);
    }
}

export function* watchAddPost() {
    while (true) {
        const {payload} = yield take('NEW_POST');
        yield addPostSaga(payload);
    }
}

export default [
    fork(watchGetPosts), //getAll
    fork(watchGetPost), //getOne
    fork(watchNewComment), //newComment
    fork(watchEditPost), //editPost
    fork(watchAddPost), //addPost
];
