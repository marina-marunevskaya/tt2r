import React from 'react';

import { EmployeeItem } from '../EmployeeItem';

export const EmployeesList = ({
    deleteEmployee,
    employees
}) => (
    employees.length
        ? (
            <ul>
                {employees.map(
                    employee => <EmployeeItem
                        deleteEmployee={deleteEmployee}
                        id={employee.id}
                        key={employee.id}
                        name={`${employee.first_name} ${employee.last_name}`}
                    />
                )}
            </ul>
        )
        : (
            <p>
                Список сотрудников пуст
            </p>
        )
);
