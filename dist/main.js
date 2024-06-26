"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const cors_1 = __importDefault(require("cors"));
const utils_1 = require("./utils");
dotenv_1.default.config();
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, cors_1.default)({ origin: '*' }));
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
    console.log(`Application environment: ${(0, utils_1.getEnvironment)()}`);
    console.log(`The server is running on port ${PORT}`);
    console.log();
});
