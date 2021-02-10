"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.run = void 0;
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const cors_1 = __importDefault(require("cors"));
const bodyParser = require('body-parser');
const cors_config_1 = require("./configs/cors.config");
const base_routes_1 = __importDefault(require("./routes/base.routes"));
const port = process.env.NODE_PORT || 4848;
function run() {
    const app = express_1.default();
    // Middlewares
    app.use(cors_1.default(cors_config_1.options));
    app.use(morgan_1.default('dev'));
    app.use(express_1.default.json());
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: false }));
    // Routes
    app.use('/', base_routes_1.default);
    // app.use('/api', APIRoutes)
    // App Listen
    return app.listen(port, function () {
        // Port is forwarded by docker to 80.
        console.log(`Listening on http://localhost:${port}`);
    });
}
exports.run = run;
if (process.env.NODE_ENV !== 'testing') {
    run();
}
