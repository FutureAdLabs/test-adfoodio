"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = express_1.Router();
const food_controller_1 = require("../controllers/food.controller");
const user_controller_1 = require("../controllers/user.controller");
router.route('/newUser')
    .post(user_controller_1.newUser);
router.route('/getUsers')
    .get(user_controller_1.getUsers);
router.route('/')
    .get(food_controller_1.getFoods)
    .post(food_controller_1.createFood);
router.route('/:foodId')
    .get(food_controller_1.getFood)
    .post(food_controller_1.deleteFood)
    .put(food_controller_1.updateFood);
exports.default = router;
