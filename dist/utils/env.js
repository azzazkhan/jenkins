"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getEnvironment = void 0;
const getEnvironment = () => (process.env.APP_ENV || 'production');
exports.getEnvironment = getEnvironment;
