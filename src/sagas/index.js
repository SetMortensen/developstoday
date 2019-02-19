import { all } from 'redux-saga/effects';
import postsSaga from './posts';

export default function* root() {
    yield all([
        ...postsSaga,
    ]);
}