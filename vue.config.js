module.exports = {
  pages: {
    popup: {
      template: "public/browser-extension.html",
      entry: "./src/popup/main.js",
      title: "Popup",
    },
  },
  pluginOptions: {
    browserExtension: {
      componentOptions: {
        contentScripts: {
          entries: {
            main: ["src/overlay/main.js"],
          },
        },
      },
    },
  },
  css: {
    loaderOptions: {
      sass: {
        prependData: `@import "@/scss/_theme.scss";`,
      },
    },
  },
};
