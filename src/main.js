const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const { getEnvironment } = require('./utils');

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors({ origin: '*' }));
app.use((req, res, next) => {
    const method = req.method.toUpperCase();
    const query = Object.entries(req.query)
        .map(([key, value]) => `${key}=${value}`)
        .join('&');
    const path = query ? `${req.path}?${query}` : req.path;

    console.log(`Request received: ${method} ${path}`);
    next();
});

app.get('/', (_, res) => {
    res.send('Hello world!').end();
});

const PORT = Number(process.env.APP_PORT || 3000);
app.listen(PORT, '0.0.0.0', () => {
    console.log(`Application environment: ${getEnvironment()}`);
    console.log(`The server is running on port ${PORT}`);
    console.log();
});
