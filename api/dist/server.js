"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.run = void 0;
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const cors_1 = __importDefault(require("cors"));
const base_routes_1 = __importDefault(require("./routes/base.routes"));
const port = process.env.NODE_PORT || 4848;
function run() {
    const app = express_1.default();
    // ref: https://www.youtube.com/watch?v=4clEduk6OQM&t=2650s&ab_channel=Fazt
    // Middlewares
    app.use(cors_1.default());
    app.use(morgan_1.default('dev'));
    app.use(express_1.default.json());
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
