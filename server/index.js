import express from 'express';
import Loadable from 'react-loadable';

import serverRenderer from './middleware/renderer';
import configureStore from '../src/configureStore';

const PORT = 3001;
const path = require("path");

// initialize the application and create the routes
const app = express();
const router = express.Router();

const actionIndex = (req, res, next) => {
    const store = configureStore();
    serverRenderer(store)(req, res, next);
};
// root (/) should always serve our server rendered page
router.use('^/$', actionIndex);

// other static resources should just be served as they are
router.use(express.static(
    path.resolve(__dirname, '..', 'build'),
    { maxAge: '30d' },
));

app.use(router);

// start the app
Loadable.preloadAll().then(() => {
    app.listen(PORT, (error) => {
        if (error) {
            return console.log('something bad happened', error);
        }

        console.log("listening on " + PORT + "...");
    });
});