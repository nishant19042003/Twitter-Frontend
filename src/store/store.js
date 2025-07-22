import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../slices/userSlice';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web
import { combineReducers } from 'redux';
// 1. Combine reducers if needed
const rootReducer = combineReducers({
  user: userReducer,
});

// 2. Persist config
const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['user'], // only auth will be persisted
};
//3. Persisted reducer
const persistedReducer = persistReducer(persistConfig, rootReducer);
export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false, // redux-persist needs this disabled
    }),
});
// 5. Export persistor
export const persistor = persistStore(store);
