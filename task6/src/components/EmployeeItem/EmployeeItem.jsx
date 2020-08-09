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
        <li>
            <span>
                {name}
            </span>
            <div>
                <button onClick={deleteItem}>Удалить</button>
            </div>
        </li>
    );
};
