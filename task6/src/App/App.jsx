import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter, NavLink, Route, Switch } from 'react-router-dom';

import { addEmployee, deleteEmployee, loadEmployees } from '../actions/employeesActions';
import { ErrorMessage } from '../components/ErrorMessage';
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
                <nav className="container">
                    <ul className="navigation__menu">
                        <li>
                            <NavLink
                                activeClassName="navigation__link--current"
                                className="navigation__link"
                                isActive={({ isExact }) => isExact}
                                to="/"
                            >
                                Главная
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                activeClassName="navigation__link--current"
                                className="navigation__link"
                                to="/employees"
                            >
                                Сотрудники
                            </NavLink>
                        </li>
                    </ul>
                </nav>
            </header>

            <div className="container">
                <ErrorMessage message={requestErrorMessage} status={status} />
            </div>


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
