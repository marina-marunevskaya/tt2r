import React, { useCallback, useState } from 'react';

export const EmployeeForm = ({
    addEmployee
}) => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');

    const onSubmit = useCallback(
        event => event.preventDefault(),
        []
    );

    const onChange = useCallback(
        event => {
            switch (event.target.name) {
                case 'firstName':
                    setFirstName(event.target.value);
                    break;
                case 'lastName': 
                    setLastName(event.target.value);
                    break;
                default:
                    break;
            }
        },
        []
    );

    const addItem = useCallback(
        () => addEmployee({
            id: Date.now(),
            first_name: firstName,
            last_name: lastName
        }),
        [addEmployee, firstName, lastName]
    );

    return (
        <form onSubmit={onSubmit}>
            <div>
                <label htmlFor="firstName">Имя</label>
                <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    onChange={onChange}
                    value={firstName}
                />
            </div>
            <div>
                <label htmlFor="lastName">Фамилия</label>
                <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    onChange={onChange}
                    value={lastName}
                />
            </div>
            <button type="button" onClick={addItem}>Добавить</button>
        </form>
    );
};
