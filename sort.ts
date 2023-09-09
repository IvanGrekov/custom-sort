type TCompareFunction = (a: any, b: any) => number;

interface Array<T> {
    customSort(callback?: TCompareFunction): T[];
}

const compareValues: TCompareFunction = (a, b) => {
    let result = 0;

    if (typeof a === 'number' && typeof b === 'number') {
        result = a - b;
    } else {
        const stringifiedA = a.toString();
        const stringifiedB = b.toString();
        result = stringifiedA.localeCompare(stringifiedB);
    }

    return result;
};

const bubbleSort = <T>(input: T[], callback = compareValues): T[] => {
    const output = [...input];
    const start = output.length;

    for (let i = start; i > 1; i--) {
        for (let j = 0; j < i - 1; j++) {
            const el = output[j];
            const nextEl = output[j + 1];
            let comparingResult = callback(el, nextEl);

            if (comparingResult > 0) {
                output[j] = nextEl;
                output[j + 1] = el;
            }
        }
    }

    return output;
};

Array.prototype.customSort = function customSort(callback?: TCompareFunction) {
    return bubbleSort(this, callback);
};


const input1 = [5, 4, 3, 2, 1];
const input2 = ['e', 'd', 'c', 'b', 'a'];
const input3 = ['c', 2, 1, 'b', 'a'];
// const output = bubbleSort(input3);
// console.log(output);

const output1 = input3.customSort();
const output2 = input3.sort();
console.log(output1);
console.log(output2);

