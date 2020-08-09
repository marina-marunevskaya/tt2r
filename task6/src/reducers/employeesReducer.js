import {
    EMPLOYEES_REQUEST_SUCCESS,
    EMPLOYEES_REQUEST_ERROR,
    EMPLOYEE_ADD,
    EMPLOYEE_DELETE 
} from '../actions/employeesActions';
import { INITIAL_STATE, SUCCESS_REQUEST, ERROR_REQUEST } from '../constants/requestConstants';
import { createReducer } from './createReducer';

const initialState = {
    employees: [],
    requestErrorMessage: '',
    status: INITIAL_STATE
};

export const employeesReducer = createReducer(initialState, {
    [EMPLOYEES_REQUEST_SUCCESS]: (state, data) => ({
        ...state,
        employees: data.response.data,
        requestErrorMessage: '',
        status: SUCCESS_REQUEST
    }),
    [EMPLOYEES_REQUEST_ERROR]: (state, data) => ({
        ...state,
        employees: [],
        requestErrorMessage: data.error.message,
        status: ERROR_REQUEST
    }),
    [EMPLOYEE_ADD]: (state, employee) => ({
        ...state,
        employees: [...state.employees, employee],
        requestErrorMessage: '',
        status: INITIAL_STATE
    }),
    [EMPLOYEE_DELETE]: (state, id) => ({
        ...state,
        employees: state.employees.filter(employee => employee.id !== id),
        requestErrorMessage: '',
        status: INITIAL_STATE
    })
});
