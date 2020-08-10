import React, { useCallback } from 'react';

export const EmployeeItem = ({
    deleteEmployee,
    id,
    name
}) => {
    const deleteItem = useCallback(
        () => deleteEmployee(id),
        [deleteEmployee, id]
    ); 

    return (
        <li className="employee my-1">
            <div className="employee__name">
                {name}
            </div>
            <div className="employee__actions">
                <button type="button" className="button" onClick={deleteItem}>Удалить</button>
            </div>
        </li>
    );
};
