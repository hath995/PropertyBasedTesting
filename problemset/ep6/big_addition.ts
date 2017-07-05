

//export function bigIncrement(left: number[]): number[] {
    //let carry: number = 1;
    //let result: number[] = [];
    //for(let i = 0; i < left.length; i++) {
        //let sum = left[i] + carry;
        //if(sum >= 10) {
            //carry = 1;
            //result.push(sum % 10)
        //}else{
            //result.push(sum);
            //carry = 0;
        //}
    //}
    //if(carry !== 0) {
        //result.push(carry);
    //}
    //return result;
//}


export function bigIncrement(left: number[]): number[] {
    let carry: number = 1;
    for(let i = 0; carry !== 0; i++) {
        if(left[i] === undefined) {
            left[i] = 0;
        }
        let sum = left[i] + carry;
        if(sum >= 10) {
            carry = 1;
            left[i] = sum % 10;
        }else{
            left[i] = sum;
            carry = 0;
        }
    }
    return left;
}
