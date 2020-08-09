import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';

import { loadEmployees, deleteEmployee, addEmployee } from '../actions/employeesActions';
import { Employees } from '../pages/Employees';
import { Home } from '../pages/Home';

const DefaultApp = ({
    addEmployee,
    deleteEmployee,
    employees,
    loadEmployees,
    requestErrorMessage,
    status
}) => {
    useEffect(
        () => {
            loadEmployees();
        },
        []
    );

    return (
        <BrowserRouter>
            <header>
                <nav>
                    <ul>
                        <li>
                            <Link to="/">Главная</Link>
                        </li>
                        <li>
                            <Link to="/employees">Сотрудники</Link>
                        </li>
                    </ul>
                </nav>
            </header>

            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route path="/employees">
                    <Employees addEmployee={addEmployee} deleteEmployee={deleteEmployee} employees={employees} />
                </Route>
            </Switch>
        </BrowserRouter>
    );
};

const mapStateToProps = store => ({
    employees: store.employees.employees,
    requestErrorMessage: store.employees.requestErrorMessage,
    status: store.employees.status
});

const mapDispatchToProps = {
    addEmployee,
    deleteEmployee,
    loadEmployees
};

export const App = connect(mapStateToProps, mapDispatchToProps)(DefaultApp);
