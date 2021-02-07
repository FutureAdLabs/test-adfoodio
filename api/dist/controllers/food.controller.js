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
exports.updateFood = exports.deleteFood = exports.getFood = exports.createFood = exports.getFoods = void 0;
const database_1 = require("../database");
//connect is the configuration to access to the DB 
//this controllers are invoqued in base.routes.ts
//Async function to take all foods from DB
function getFoods(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const conn = yield database_1.connect();
            const foods = yield conn.query('SELECT * FROM foods');
            //[0] because the info is in this position
            return res.json(foods[0]);
        }
        catch (e) {
            console.log(e);
        }
    });
}
exports.getFoods = getFoods;
//Async funtion to create food in the DB
function createFood(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const newFood = req.body;
        // console.log(newFood)
        const conn = yield database_1.connect();
        conn.query(`INSERT INTO foods SET ?`, [newFood]);
        return res.json({ message: "Food created" });
    });
}
exports.createFood = createFood;
//Async function to take one food from DB
function getFood(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const id = req.params.foodId;
        const conn = yield database_1.connect();
        const food = yield conn.query('SELECT * FROM foods WHERE id = ? ', [id]);
        return res.json(food[0]);
    });
}
exports.getFood = getFood;
//Delete
function deleteFood(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const id = req.params.foodId;
        const conn = yield database_1.connect();
        yield conn.query('DELETE FROM foods WHERE id = ?', [id]);
        return res.json({
            message: "Food deleted"
        });
    });
}
exports.deleteFood = deleteFood;
//Edit
function updateFood(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const id = req.params.foodId;
        const updateFood = req.body;
        const conn = yield database_1.connect();
        yield conn.query('UPDATE foods set ? WHERE id = ? ', [updateFood, id]);
        res.json({
            message: "Food updated"
        });
    });
}
exports.updateFood = updateFood;
