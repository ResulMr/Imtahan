function countOccurrences(arr, num) {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === num) {
            count++;
        }
    }
    return count;
}

       
let arr = [3, 4, 5, 3, 1, 3, 3];
let number = 3;
console.log(`${number} ədədi array-da ${countOccurrences(arr, number)} dəfə təkrarlanır.`);
