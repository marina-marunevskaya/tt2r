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
        <div className="container my-2">
            <form className="form" onSubmit={onSubmit}>
                <div className="field-wrapper">
                    <label className="field-label" htmlFor="firstName">Имя</label>
                    <input
                        type="text"
                        id="firstName"
                        className="field"
                        name="firstName"
                        onChange={onChange}
                        value={firstName}
                    />
                </div>
                <div className="field-wrapper">
                    <label className="field-label" htmlFor="lastName">Фамилия</label>
                    <input
                        type="text"
                        id="lastName"
                        className="field"
                        name="lastName"
                        onChange={onChange}
                        value={lastName}
                    />
                </div>
                <button type="button" className="button" onClick={addItem}>Добавить</button>
            </form>
        </div>
    );
};
