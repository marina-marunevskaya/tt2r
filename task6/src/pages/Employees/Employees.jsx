import React from 'react';

import { EmployeesList } from '../../components/EmployeesList';
import { useTitle } from '../../hooks';

export const Employees = ({
    deleteEmployee,
    employees
}) => {
    useTitle('Сотрудники');

    return (
        <EmployeesList deleteEmployee={deleteEmployee} employees={employees} />
    );
};
