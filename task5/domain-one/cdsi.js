class CrossDomainStorageInteraction {
    constructor (parentWindow, iframe, onMessage) {
        this.iframeWindow = iframe.contentWindow;
        this.callbacks = new Map();

        parentWindow.addEventListener('message', event => onMessage(this, event.data));
    }

    addCallback(callbackKey, callback) {
        this.callbacks.set(callbackKey, callback);
    }

    getCallback(callbackKey) {
        return this.callbacks.get(callbackKey);
    }

    deleteCallback(callbackKey) {
        this.callbacks.delete(callbackKey);
    }

    sendMessage (data) {
        this.iframeWindow.postMessage(data, '*');
    }

    read (key, callback) {
        let data = {
            key,
            type: 'read'
        };

        if (callback) {
            const callbackKey = Date.now();
            this.addCallback(callbackKey, callback);

            data = {
                callbackKey,
                ...data
            };
        }

        this.sendMessage(data);
    }

    write (key, value, callback) {
        let data = {
            data: value,
            key,
            type: 'write'
        };

        if (callback) {
            const callbackKey = Date.now();
            this.addCallback(callbackKey, callback);
            
            data = {
                callbackKey,
                ...data
            };
        }

        this.sendMessage(data);
    }

    delete (key, callback) {
        let data = {
            key,
            type: 'delete'
        };

        if (callback) {
            const callbackKey = Date.now();
            this.addCallback(callbackKey, callback);

            data = {
                callbackKey,
                ...data
            };
        }

        this.sendMessage(data);
    }
}
