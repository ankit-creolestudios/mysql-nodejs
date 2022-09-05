import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import createSagaMiddleware from "@redux-saga/core";
import userSlice from "./feature/userSlice";
import { watcherSaga } from "./sagas/rootSaga";
import { getPostSaga } from "./sagas/post";
import postSlice from "./feature/postSlice";
const sagaMiddleware = createSagaMiddleware();
const store = configureStore({
  reducer: {
    user: userSlice,
    post: postSlice,
  },
  middleware: [...getDefaultMiddleware({ thunk: false }), sagaMiddleware],

  // middleware: (getDefaultMiddleware) => {
  //   return getDefaultMiddleware({ thunk: false }).prepend(sagaMiddleware);
  // },
});
sagaMiddleware.run(watcherSaga);
sagaMiddleware.run(getPostSaga);
export default store;
