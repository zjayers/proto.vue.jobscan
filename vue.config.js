module.exports = {
    pages: {
        popup: {
            template: 'public/browser-extension.html',
            entry: './src/popup/main.js',
            title: 'Popup',
        },
    },
    pluginOptions: {
        browserExtension: {
            componentOptions: {
                contentScripts: {
                    entries: {
                        'document-start': ['src/scripts/document-start.js'],
                        'document-end': ['src/scripts/document-end.js'],
                        main: ['src/overlay/main.js'],
                    },
                },
            },
        },
    },
};
