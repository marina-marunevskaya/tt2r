import React from 'react';

import { useTitle } from '../../hooks';

export const Home = () => {
    useTitle('Главная');

    return (
        <div className="container my-2 home">
            Главная
        </div>
    );
};
