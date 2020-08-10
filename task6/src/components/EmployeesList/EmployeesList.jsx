import React from 'react';

import { EmployeeItem } from '../EmployeeItem';

export const EmployeesList = ({
    deleteEmployee,
    employees
}) => (
    <div className="container my-2">
        {employees.length
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
                <p className="message">
                    Список сотрудников пуст
                </p>
            )
        }
    </div>
);
