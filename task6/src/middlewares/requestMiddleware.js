export const requestMiddleware = store => next => action => {
    if (action.fetch) {
        const { fetch, type, ...data } = action;

        fetch
            .then(response => {
                const isSuccess = response.ok;

                return response.json()
                    .then(response => {
                        if (isSuccess) {
                            return response;
                        }

                        throw new Error(response.message);
                    });
            })
            .then(response => store.dispatch({
                payload: { ...data, response },
                type: `${type}_SUCCESS`
            }))
            .catch(error => store.dispatch({
                payload: { ...data, error },
                type: `${type}_ERROR`
            }));
    } else {
        next(action);
    }
};
