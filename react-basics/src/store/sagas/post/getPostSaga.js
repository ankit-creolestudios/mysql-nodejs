import { put, call, takeLatest } from "redux-saga/effects";
import postblogApi from "../../../service/server/index";
import { getPostAction } from "../../feature/postSlice";
function* getPost(action) {
  try {
    const response = yield call(postblogApi.getPost);
    console.log(action, response, "post");
    yield put(getPostAction({ type: action.type, response }));
  } catch (error) {
    console.log(error);
    return error;
  }
}

export default function* getPostSaga() {
  yield takeLatest("POSTS", getPost);
}
