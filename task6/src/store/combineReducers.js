import { combineReducers } from 'redux';

import { employeesReducer } from '../reducers/employeesReducer';

export const rootReducer = combineReducers({
    employees: employeesReducer
});
