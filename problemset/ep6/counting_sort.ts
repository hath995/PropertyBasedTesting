

export function counting_sort(items: Array<number>, index: number): Array<number> {
    let less: number[] = [],
        equal: number[] = [],
        more: number[] = [];
        for(let element of items) {
            if(element == items[index]) {
                equal.push(element);
            }else if(element > items[index]) {
                more.push(element);
            }else{
                less.push(element);
            }
        }
    return less.concat(equal).concat(more);
}
