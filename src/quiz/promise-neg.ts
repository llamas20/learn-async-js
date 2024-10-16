const array2D_3 = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, -9]
];

function findNeg(arr: number[]): Promise<number[]> {
    return new Promise((response, reject) => {
        const negArr = arr.filter((n) => n < 0)
        if(negArr.length == 0) {
            reject("No negatives in this row")
        } else {
            response(arr)
        }
    })
}

let promiseArr2: Promise<number[]>[] = [];
for(let i = 0; i < array2D_3.length; i++) {
    promiseArr2.push(findNeg(array2D_3[i]));
}

Promise.any(promiseArr2).then((response: number[]) => {
    console.log("negative row:  ", response)
}).catch((error) => {console.log("No negatives found")})