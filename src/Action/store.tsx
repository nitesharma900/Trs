import {configureStore} from '@reduxjs/toolkit';
import rootReducer from './rootReducer';
// import { authSlice } from './slice';

// import rootReducer from './rootReduser';

const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: {},
      },
    }),
});
export default store;