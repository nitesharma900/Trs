import {combineReducers} from 'redux';
import authReducer from './slice';
const combinedReducer = combineReducers({
  authReducer: authReducer,
});

const rootReducer = (state: any, action: any) => {
  if (action.type === 'auth/reset') {
    state = undefined;
  }

  return combinedReducer(state, action);
};

export type RootState = ReturnType;

export default rootReducer;