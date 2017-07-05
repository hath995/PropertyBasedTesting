

export function winnable(game: Array<number>): boolean {
    let largestIndex = 0;
    for(let i = 0; i < game.length; i++) {
        if(i > largestIndex) {
            return false;
        }
        largestIndex = Math.max(largestIndex, i + game[i]);
    }
    return true;
}
