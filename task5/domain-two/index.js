window.addEventListener('message', event => {
    const data = event.data;

    let response;

    switch (data.type) {
        case 'read': {
            if (data.key in localStorage) {
                response = {
                    data: localStorage.getItem(data.key),
                    type: 'read_success'
                };
            } else {
                response = {
                    message: `The key '${data.key}' doesn't exist.`,
                    type: 'read_error'
                };
            }

            break;
        }

        case 'write': {
            try {
                localStorage.setItem(data.key, data.data);
                response = {
                    type: 'write_success'
                };
            } catch (e) {
                response = {
                    message: `An error during writing occured.`,
                    type: 'write_error'
                };
            }

            break;
        }

        case 'delete': {
            if (data.key in localStorage) {
                localStorage.removeItem(data.key);
                response = {
                    type: 'delete_success'
                };
            } else {
                response = {
                    message: `The key '${data.key}' doesn't exist.`,
                    type: 'delete_error'
                };
            }

            break;
        }

        default: {
            response = {
                message: `The operation '${data.type}' is unknown.`,
                type: 'operation_error'
            };
        }
    }

    if (data.callbackKey) {
        response = {
            ...response,
            callbackKey: data.callbackKey
        };
    }

    window.parent.postMessage(response, '*');
});
