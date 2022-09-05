import { put, call, takeLatest } from "redux-saga/effects";
import postblogApi from "../../../service/server/index";
export function* addNewPost(action) {
  try {
    const response = yield call(postblogApi.addPost, action.payload);
    console.log(action, response);
    yield put({ response });
  } catch (error) {
    console.log(error);
    return error;
  }
}

export default function* addNewPostSaga() {
  yield takeLatest("NEW_POST", addNewPost);
}
