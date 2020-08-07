function get (url) {
    return new Promise(
        (resolve, reject) => {
            let xhr = new XMLHttpRequest();
            xhr.open('GET', url);

            xhr.onload = () => {
                if (xhr.status === 200) {
                    resolve(xhr.response);
                }

                reject(xhr.statusText);
            };

            xhr.onerror = () => reject(xhr.statusText);

            xhr.send();
        }
    );
}

Promise.all([
    get('https://www.boredapi.com/api/activity'),
    get('https://cat-fact.herokuapp.com/facts')
])
.then(() => console.log('Оба ответа получены'))
.catch(() => console.log('Произошла ошибка'));

/* Promise.all([
    fetch('https://www.boredapi.com/api/activity'),
    fetch('https://cat-fact.herokuapp.com/facts')
])
.then(() => console.log('Оба ответа получены'))
.catch(() => console.log('Произошла ошибка')); */
