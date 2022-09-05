import { takeLatest } from "redux-saga/effects";
import { getUser } from "../feature/userSlice";
import { getUserSaga } from "./userSaga";

function* watcherSaga() {
  yield takeLatest(getUser.type, getUserSaga);

  //   yield takeLatest("get-user-by-name", getUserByNameSaga);
}

export { watcherSaga };
