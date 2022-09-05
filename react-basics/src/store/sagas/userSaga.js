import { put, call } from "redux-saga/effects";
import { getUserApi, getUserByNameApi } from "../../service/api";
import { setUser } from "../feature/userSlice";

export function* getUserSaga(action) {
  try {
    const response = yield call(getUserApi);
    console.log(response, "saga");
    const { data } = response;
    yield put(setUser({ ...data }));
  } catch (error) {
    console.log(error);
    return error;
  }
}
// export function* getUserByNameSaga(action) {
//   console.log(action);
//   try {
//     const userName = yield put(getUserName());
//     console.log(userName, "username");
//     const response = yield call(getUserByNameApi(userName));
//     console.log(response, "saga");
//     const { data } = response;
//     yield put(setUserByName({ ...data }));
//   } catch (error) {
//     console.log(error);
//     return error;
//   }
// }
