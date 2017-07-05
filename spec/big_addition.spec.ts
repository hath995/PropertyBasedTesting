import * as child_process from 'child_process';
import {bigIncrement} from '../problemset/ep6/big_addition';
import {check, gen, property, Generator} from 'testcheck';

const digits = [0,1,2,3,4,5,6,7,8,9];
let bigNumberGen = gen.array(gen.oneOf(digits)).notEmpty().suchThat(nums => nums[nums.length-1] !== 0);

describe('big increment', () => {
    it('should increment a large integer', () => {
        let test_result = check(property(bigNumberGen, (num: number[]) => {
            //console.log("num", num);
            let revcopy: number[] = num.slice().reverse()
            let numstring = revcopy.join("");
            let oracle = child_process.execSync(`python -c "print ${numstring} + 1"`, {encoding: "utf8"}).trim();
            //console.log("ORACLE", oracle);
            let result = bigIncrement(num);
            result.reverse()
            let result_string = result.join("");
            //console.log("result_string", result_string);

            return result_string === oracle;
        }))

        console.log(JSON.stringify(test_result, null, 2));
        expect(test_result.result).toEqual(true);
    })
})
