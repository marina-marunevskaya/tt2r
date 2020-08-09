import { applyMiddleware, createStore } from 'redux';

import { requestMiddleware } from '../middlewares/requestMiddleware';
import { rootReducer } from './combineReducers';

export const store = createStore(
    rootReducer,
    applyMiddleware(requestMiddleware)
);
