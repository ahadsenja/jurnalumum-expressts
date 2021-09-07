"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var body_parser_1 = __importDefault(require("body-parser"));
var morgan_1 = __importDefault(require("morgan"));
var compression_1 = __importDefault(require("compression"));
var helmet_1 = __importDefault(require("helmet"));
var cors_1 = __importDefault(require("cors"));
var UserRoutes_1 = __importDefault(require("./routers/UserRoutes"));
var App = /** @class */ (function () {
    function App() {
        this.app = (0, express_1.default)();
        this.plugins();
        this.routes();
    }
    App.prototype.plugins = function () {
        this.app.use(body_parser_1.default.json());
        this.app.use((0, morgan_1.default)('dev'));
        this.app.use((0, compression_1.default)());
        this.app.use((0, helmet_1.default)());
        this.app.use((0, cors_1.default)());
    };
    App.prototype.routes = function () {
        this.app.route('/').get(function (req, res) {
            res.send('Hi this test restful api');
        });
        this.app.use('/users', UserRoutes_1.default);
    };
    return App;
}());
var port = 8000;
var app = new App().app;
app.listen(port, function () {
    console.log('This app is running on port ' + port);
});
