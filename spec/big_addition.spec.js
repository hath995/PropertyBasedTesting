"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var child_process = require("child_process");
var big_addition_1 = require("../problemset/ep6/big_addition");
var testcheck_1 = require("testcheck");
var digits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var bigNumberGen = testcheck_1.gen.array(testcheck_1.gen.oneOf(digits)).notEmpty().suchThat(function (nums) { return nums[nums.length - 1] !== 0; });
describe('big increment', function () {
    it('should increment a large integer', function () {
        var test_result = testcheck_1.check(testcheck_1.property(bigNumberGen, function (num) {
            //console.log("num", num);
            var revcopy = num.slice().reverse();
            var numstring = revcopy.join("");
            var oracle = child_process.execSync("python -c \"print " + numstring + " + 1\"", { encoding: "utf8" }).trim();
            //console.log("ORACLE", oracle);
            var result = big_addition_1.bigIncrement(num);
            result.reverse();
            var result_string = result.join("");
            //console.log("result_string", result_string);
            return result_string === oracle;
        }));
        console.log(JSON.stringify(test_result, null, 2));
        expect(test_result.result).toEqual(true);
    });
});
