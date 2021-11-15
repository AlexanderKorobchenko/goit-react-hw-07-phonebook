import { configureStore } from '@reduxjs/toolkit';
import filterReducer from './phonebook/filter/filter-reducer';
import { contactsApi } from './phonebook/contactsSlice';
// import { setupListeners } from '@reduxjs/toolkit/query';

export const store = configureStore({
  reducer: {
    filter: filterReducer,
    [contactsApi.reducerPath]: contactsApi.reducer,
  },
  middleware: getDefaultMiddleware => [
    ...getDefaultMiddleware(),
    contactsApi.middleware,
  ],
  devTools: process.env.NODE_ENV === 'development',
});

// setupListeners(store.dispatch);
export default store;
