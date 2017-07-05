"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var game_position_1 = require("../problemset/ep6/game_position");
var testcheck_1 = require("testcheck");
var digits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var length = [0, 2];
var boardGen = testcheck_1.gen.array(testcheck_1.gen.oneOf(digits)).notEmpty().then(function (list) { return testcheck_1.gen.oneOf(length).then(function (num) {
    var length = list.reduce(function (a, b) { return a + b; }, 0);
    var board = new Array(length + 1 + num);
    for (var i = 0; i < board.length; i++) {
        board[i] = 0;
    }
    var lastIndex = 0;
    for (var i = 0; i < list.length; i++) {
        board[lastIndex] = list[i];
        lastIndex = lastIndex + list[i];
    }
    return [board, num, list];
}); });
describe('game_positions', function () {
    it('should return true for winnable solutions, false otherwise', function () {
        var answers = testcheck_1.check(testcheck_1.property(boardGen, function (pair) {
            //console.log(pair);
            if (pair[1] === 0) {
                return game_position_1.winnable(pair[0]);
            }
            else {
                return !game_position_1.winnable(pair[0]);
            }
        }));
        expect(answers.result).toEqual(true);
    });
});
