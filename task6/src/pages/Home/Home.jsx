import React from 'react';

import { useTitle } from '../../hooks';

export const Home = () => {
    useTitle('Главная');

    return (
        <div>
            Главная
        </div>
    );
};
