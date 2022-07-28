import { addUserApi, getUsers } from "../../apis";
import { GET_USERS, ADD_USER } from "../types";
import { put, takeEvery } from "redux-saga/effects";
import { getUsersSlice, getUserByIdSlice, addUser } from "../slice/users";
import { getUserByIdApi } from "../../apis";
import { GET_USER_BY_ID } from "../types";

export function* getUserSaga() {
  const users = yield getUsers();
  yield put(getUsersSlice(users));
}
export function* getUserByIdSaga(action) {
  yield getUserByIdApi(action.id);
  yield put(getUserByIdSlice());
}
export function* createUserSaga(action) {
  console.log(action);
  yield addUserApi(action.user);
  yield put(addUser(action.user));
}
function* watchUsersAsync() {
  yield takeEvery(GET_USERS, getUserSaga);
  yield takeEvery(GET_USER_BY_ID, getUserByIdSaga);
  yield takeEvery(ADD_USER, createUserSaga);
}
export { watchUsersAsync };
