
import {winnable} from '../problemset/ep6/game_position';
import {check, gen, property, Generator} from 'testcheck';


const digits = [0,1,2,3,4,5,6,7,8,9];
const length = [0,2];
let boardGen = gen.array(gen.oneOf(digits)).notEmpty().then(
    (list: number[]) => gen.oneOf(length).then(
        (num: number) => {
            let length = list.reduce((a,b)=>a+b,0);
            let board = new Array(length+1+num);
            for(let i = 0; i < board.length; i++) {
                board[i] = 0;
            }
            let lastIndex = 0;
            for(let i = 0; i < list.length; i++) {
                board[lastIndex] = list[i];
                lastIndex = lastIndex+list[i];
            }
            return [board, num, list];
        }
    )
)

describe('game_positions', () => {
    it('should return true for winnable solutions, false otherwise', () => {
          let answers = check(property(boardGen, (pair: [number[], number, number[]]) => {
              //console.log(pair);
            if(pair[1] === 0) {
                return winnable(pair[0]);
            }else{
                return !winnable(pair[0]);
            }
          }));
          expect(answers.result).toEqual(true);
    })
})



