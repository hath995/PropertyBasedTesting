
import {counting_sort} from '../problemset/ep6/counting_sort';
import {check, gen, property, Generator} from 'testcheck';

const genIndex: Generator<number> = gen.intWithin(0, 100);
const genListAndIndex: Generator<[number[], number]> = 
    genIndex.then(
        (ind: number) => gen.array(gen.int, {minSize: ind}).notEmpty().then(
            (list: number[]):[number[], number] => [list, ind]
        )
    );

describe('MySpec', () => {
  it('should parition the array into three sections', () => {
      let answers = check(property(genListAndIndex, (pair: [number[], number]) => {
        //console.log("HMM", pair[1], pair[0][pair[1]]);
        //if(!pair[0][pair[1]]) {
            //console.log(pair[0])
        //}
        let result = counting_sort(pair[0], pair[1]-1);
        let middle = pair[0][pair[1]-1];
        let firstIndexOf = result.indexOf(middle);
        let lastIndexOf = result.lastIndexOf(middle);
        for(let i = 0; i < firstIndexOf; i++) {
            //expect(result[i]).toBeLessThan(middle);
            if(result[i] > middle) {
                return false;
            }
        }
        //expect(middle).toEqual(jasmine.any(Number));
        //expect(result.length).toEqual(pair[0].length);
        for(let i = firstIndexOf; i <= lastIndexOf; i++) {
            //expect(result[i]).toEqual(middle);
            if(result[i] !== middle) {
                return false;
            }
        }
        for(let i = lastIndexOf + 1; i < pair[0].length; i++) {
            //expect(result[i]).toBeGreaterThan(middle);
            if(result[i] <= middle) {
                return false;
            }
        }
      }));
      console.log(answers);
      expect(answers.result).toEqual(true);
  });
 
});
