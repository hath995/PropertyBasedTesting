"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var counting_sort_1 = require("../problemset/ep6/counting_sort");
var testcheck_1 = require("testcheck");
var genIndex = testcheck_1.gen.intWithin(0, 100);
var genListAndIndex = genIndex.then(function (ind) { return testcheck_1.gen.array(testcheck_1.gen.int, { minSize: ind }).notEmpty().then(function (list) { return [list, ind]; }); });
describe('MySpec', function () {
    it('should parition the array into three sections', function () {
        var answers = testcheck_1.check(testcheck_1.property(genListAndIndex, function (pair) {
            //console.log("HMM", pair[1], pair[0][pair[1]]);
            //if(!pair[0][pair[1]]) {
            //console.log(pair[0])
            //}
            var result = counting_sort_1.counting_sort(pair[0], pair[1] - 1);
            var middle = pair[0][pair[1] - 1];
            var firstIndexOf = result.indexOf(middle);
            var lastIndexOf = result.lastIndexOf(middle);
            for (var i = 0; i < firstIndexOf; i++) {
                //expect(result[i]).toBeLessThan(middle);
                if (result[i] > middle) {
                    return false;
                }
            }
            //expect(middle).toEqual(jasmine.any(Number));
            //expect(result.length).toEqual(pair[0].length);
            for (var i = firstIndexOf; i <= lastIndexOf; i++) {
                //expect(result[i]).toEqual(middle);
                if (result[i] !== middle) {
                    return false;
                }
            }
            for (var i = lastIndexOf + 1; i < pair[0].length; i++) {
                //expect(result[i]).toBeGreaterThan(middle);
                if (result[i] <= middle) {
                    return false;
                }
            }
        }));
        console.log(answers);
        expect(answers.result).toEqual(true);
    });
});
