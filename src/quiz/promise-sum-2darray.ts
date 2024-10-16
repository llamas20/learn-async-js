const array2D_1 = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

function sumArray(arr: number[]): Promise<number> {
    return new Promise((resolve, reject) => {
        if(arr.length == 0) {
            reject("Cannot sum empty array")
        } else {
            setTimeout(() => {
                let sum = 0;
                arr.forEach((n) => sum+=n);
                resolve(sum);
            }, 0);
        }
    })
}

let promiseArr: Promise<number>[] = [];
for(let i = 0; i < array2D_1.length; i++) {
    promiseArr.push(sumArray(array2D_1[i]))
}

Promise.all(promiseArr).then((responses: number[]) => {
    let sum = 0;
    responses.forEach((n) => sum += n )
    console.log(sum)
}).catch((error) => {console.log("error with sum:  ", error)})