import React, { Fragment } from 'react';

import { EmployeeForm } from '../../components/EmployeeForm';
import { EmployeesList } from '../../components/EmployeesList';
import { useTitle } from '../../hooks';

export const Employees = ({
    addEmployee,
    deleteEmployee,
    employees
}) => {
    useTitle('Сотрудники');

    return (
        <Fragment>
            <EmployeeForm addEmployee={addEmployee} />
            <EmployeesList deleteEmployee={deleteEmployee} employees={employees} />
        </Fragment>
    );
};
