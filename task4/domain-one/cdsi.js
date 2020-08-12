class CrossDomainStorageInteraction {
    constructor (parentWindow, iframe, onMessage) {
        this.iframeWindow = iframe.contentWindow;

        parentWindow.addEventListener('message', event => onMessage(JSON.parse(event.data)));
    }

    sendMessage (data) {
        this.iframeWindow.postMessage(JSON.stringify(data), '*');
    }

    read (key) {
        this.sendMessage({
            key,
            type: 'read'
        });
    }

    write (key, data) {
        this.sendMessage({
            data,
            key,
            type: 'write'
        });
    }

    delete (key) {
        this.sendMessage({
            key,
            type: 'delete'
        });
    }
}
