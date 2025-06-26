import { configureStore, createAction, createReducer } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage
import { combineReducers } from 'redux';

// Actions
export const increment = createAction('counter/increment');
export const decrement = createAction('counter/decrement');

// Initial state
const initialState = { value: 0 };

// Reducer (manual)
const counterReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(increment, (state) => {
      state.value += 1;
    })
    .addCase(decrement, (state) => {
      state.value -= 1;
    });
});

// Combine reducer (in case you add more later)
const rootReducer = combineReducers({
  counter: counterReducer,
});

// Redux Persist config
const persistConfig = {
  key: 'root',
  storage,
};

// Persisted reducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

// Store
export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false, // required for redux-persist
    }),
});

export const persistor = persistStore(store);
