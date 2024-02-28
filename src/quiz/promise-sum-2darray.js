function sumRow(arr, rowIndex) {
    return new Promise((resolve, reject) => {
        if(arr.length > rowIndex) {
            setTimeout(() => {
                let sum = 0;
                for(let i = 0; i < arr[rowIndex].length; i++) {
                    sum += arr[rowIndex][i];
                }
                resolve(sum);
            }, 0);
        } else {
            reject( `Row Index ${rowIndex} must be between 0 and ${arr.length}`);
        }
    })
};
const array2D = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
rowSumPromises = [];

for(let x = 0; x < array2D.length; x++) {
    rowSumPromises.push(sumRow(array2D, x));
}

Promise.all(rowSumPromises)
    .then((rowSums) => {
        let sum = 0;
        rowSums.forEach(rowSum => {
            sum += rowSum;
        });
        console.log(`Sum = ${sum}`);
    })
    .catch((error) => console.log(error));

