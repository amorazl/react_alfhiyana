import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import products from "./productSlice";

const rootReducers = combineReducers({
  products,
});

const persistConfig = {
  key: "root",
  storage,
};

const pReducer = persistReducer(persistConfig, rootReducers);

const store = configureStore({
  reducer: pReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false }),
});

const persistor = persistStore(store);

export { persistor };
export default store;
