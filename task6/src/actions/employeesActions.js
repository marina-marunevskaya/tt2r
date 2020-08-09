export const EMPLOYEES_REQUEST = 'EMPLOYEES_REQUEST';
export const EMPLOYEES_REQUEST_SUCCESS = 'EMPLOYEES_REQUEST_SUCCESS';
export const EMPLOYEES_REQUEST_ERROR = 'EMPLOYEES_REQUEST_ERROR';
export const EMPLOYEE_ADD = 'EMPLOYEE_ADD';
export const EMPLOYEE_DELETE = 'EMPLOYEE_DELETE';

const EMPLOYEES_URL = 'https://reqres.in/api/users?per_page=12';

export const loadEmployees = () => ({
    fetch: fetch(EMPLOYEES_URL),
    type: EMPLOYEES_REQUEST
});

export const addEmployee = employee => ({
    payload: employee,
    type: EMPLOYEE_ADD
});

export const deleteEmployee = id => ({
    payload: id,
    type: EMPLOYEE_DELETE
});
