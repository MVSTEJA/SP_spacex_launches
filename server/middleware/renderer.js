import React from "react";
import ReactDOMServer from "react-dom/server";
import Loadable from "react-loadable";
import { Provider } from "react-redux";

// read the manifest file
import manifest from "../../build/asset-manifest.json";

// import our main App component
import App from "./../src/App";

// function to map chunk names to assets
const extractAssets = (assets, chunks) =>
  Object.keys(assets)
    .filter((asset) => chunks.indexOf(asset.replace(".js", "")) > -1)
    .map((k) => assets[k]);

const path = require("path");
const fs = require("fs");

export default (store) => (req, res, next) => {
  // get the html file created by CRA's build tool
  const filePath = path.resolve(__dirname, "..", "..", "build", "index.html");

  fs.readFile(filePath, "utf8", (err, htmlData) => {
    if (err) {
      console.error("err", err);
      return res.status(404).end();
    }

    const modules = [];

    const reduxState = JSON.stringify(store.getState());

    // render the app as a string
    const html = ReactDOMServer.renderToString(
      <Loadable.Capture report={(m) => modules.push(m)}>
        <Provider store={store}>
          <App />
        </Provider>
      </Loadable.Capture>
    );

    const extraChunks = extractAssets(manifest, modules).map(
      (c) => `<script type="text/javascript" src="/${c}"></script>`
    );

    // now inject the rendered app into our html and send it
    return res.send(
      htmlData
        .replace('<div id="root"></div>', `<div id="root">${html}</div>`)
        .replace("</body>", extraChunks.join("") + "</body>")
        .replace('"__SERVER_REDUX_STATE__"', reduxState)
    );
  });
};
