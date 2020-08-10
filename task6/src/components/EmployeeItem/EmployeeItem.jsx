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
            <div>
                {name}
            </div>
            <div>
                <button type="button" onClick={deleteItem}>Удалить</button>
            </div>
        </li>
    );
};
