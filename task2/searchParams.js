function parseSearchStringWithURLSearchParams (searchString) {
    const params = new URLSearchParams(searchString.replace('?', ''));

    let searchParams = [];

    for (const [key, value] of params.entries()) {
        searchParams.push(
            {
                key,
                value
            }
        );
    }

    return searchParams;
}

function parseSearchStringWithDecodeURIComponent (searchString) {
    return searchString.replace('?', '').split('&').map(
        entry => {
            const pair = entry.split('=');

            return {
                key: decodeURIComponent(pair[0]),
                value: decodeURIComponent(pair[1])
            };
        }
    );
}

function parseSearchString (searchString) {
    if (searchString) {
        if (typeof window.URLSearchParams === 'function') {
            return parseSearchStringWithURLSearchParams(searchString);
        }

        return parseSearchStringWithDecodeURIComponent(searchString);
    }

    return [];
}

function buildSearchStringWithURLSearchParams (searchParams) {
    const params = new URLSearchParams();

    searchParams.forEach(
        ({ key, value }) => params.append(key, value)
    );

    return params.toString();
}

function buildSearchStringWithEncodeURIComponent (searchParams) {
    return searchParams.map(
        ({ key, value }) => `${encodeURIComponent(key)}=${encodeURIComponent(value)}`
    ).join('&');
}

function buildSearchString (searchParams) {
    if (searchParams.length) {
        if (typeof window.URLSearchParams === 'function') {
            return buildSearchStringWithURLSearchParams(searchParams);
        } else {
            return buildSearchStringWithEncodeURIComponent(searchParams);
        }
    }

    return '';
}