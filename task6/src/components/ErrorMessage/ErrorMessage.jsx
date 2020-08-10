import React from 'react';

import { ERROR_REQUEST } from '../../constants/requestConstants';

export const ErrorMessage = ({
    message,
    status
}) => (
    status === ERROR_REQUEST
        ? <p className="message message--error">{message}</p>
        : null
);
