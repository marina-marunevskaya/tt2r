const onMessage = data => {
    switch (data.type) {
        case 'read_success': {
            console.log(data.data);
            break;
        }

        case 'write_success': {
            console.log('The data was successfully written.');
            break;
        }

        case 'delete_success': {
            console.log('The data was successfully deleted.');
            break;
        }

        case 'read_error':
        case 'write_error':
        case 'delete_error':
        case 'operation_error': {
            console.log(data.message);
            break;
        }

        default: {
            console.log(`The operation '${data.type}' is unknown.`);
        }
    }
};

const iframe = document.getElementById('domainTwo');
const cdsi = new CrossDomainStorageInteraction(window, iframe, onMessage);

const writeButton = document.getElementById('write');
writeButton.addEventListener('click', () => {
    cdsi.write('message', 'Hello, I am a message!');
});

const readButton = document.getElementById('read');
readButton.addEventListener('click', () => {
    cdsi.read('message');
});

const deleteButton = document.getElementById('delete');
deleteButton.addEventListener('click', () => {
    cdsi.delete('message');
});
