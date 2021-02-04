"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const chai = require("chai");
const chaiHttp = require("chai-http");
const server_1 = require("./server");
chai.use(chaiHttp);
const { expect } = chai;
const testEndPoint = `http://localhost:4848`;
describe('Integration tests', function () {
    this.beforeAll(function () {
        this.server = server_1.run();
    });
    describe('Starting up', function () {
        it('listens to our hacked conf', function () {
            expect(this.server.listening).to.be.true;
        });
    });
    describe('endpoints', function () {
        it('supports main', function () {
            return __awaiter(this, void 0, void 0, function* () {
                const res = yield chai.request(testEndPoint).get('/').send();
                expect(res).to.have.status(200);
                expect(res).to.be.text;
                expect(res.text).to.equal('Food can be served');
            });
        });
    });
    this.afterAll(function () {
        this.server.close((err) => {
            if (err) {
                console.error(err);
            }
            console.log('Closed test server.');
        });
    });
});
