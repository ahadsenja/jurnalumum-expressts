"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const morgan_1 = __importDefault(require("morgan"));
const compression_1 = __importDefault(require("compression"));
const helmet_1 = __importDefault(require("helmet"));
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = require("dotenv");
const user_routes_1 = __importDefault(require("./routers/user/user.routes"));
const auth_routes_1 = __importDefault(require("./routers/auth/auth.routes"));
const jurnal_routes_1 = __importDefault(require("./routers/jurnal/jurnal.routes"));
const transaction_routes_1 = __importDefault(require("./routers/transaction/transaction.routes"));
class App {
    constructor() {
        this.app = (0, express_1.default)();
        this.plugins();
        this.routes();
        (0, dotenv_1.config)();
    }
    plugins() {
        this.app.use(body_parser_1.default.json());
        this.app.use((0, morgan_1.default)('dev'));
        this.app.use((0, compression_1.default)());
        this.app.use((0, helmet_1.default)());
        this.app.use((0, cors_1.default)());
    }
    routes() {
        this.app.route('/').get((req, res) => {
            res.send('Hi this test restful api');
        });
        this.app.use('/api/v1/users', user_routes_1.default);
        this.app.use('/api/v1/auth', auth_routes_1.default);
        this.app.use('/api/v1/jurnals', jurnal_routes_1.default);
        this.app.use('/api/v1/transactions', transaction_routes_1.default);
    }
}
const port = 8000;
const app = new App().app;
app.listen(port, () => {
    console.log('This app is running on port ' + port);
});
