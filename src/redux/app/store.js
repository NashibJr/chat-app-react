import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import userSlice from "../users/userSlice";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persitConfig = {
  key: "users",
  storage,
};

const persistedReducer = persistReducer(persitConfig, userSlice.reducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware({ serializableCheck: false }),
});

export const persistor = persistStore(store);
export default store;
