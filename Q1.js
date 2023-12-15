function swap(arr, num1, num2){
    temp = arr[num1];
    arr[num1] = arr[num2];
    arr[num2] = temp;
    return arr;
}

function findNextMaxId(arr, i) {
    let temp= [];
    for (let j=arr.length-1; j>i-1; j--) {
        if (arr[j] > arr[i-1]) {
            temp = temp.concat(arr[j]);
        }
    }
    let nextMax = Math.min(...temp);
    return arr.indexOf(nextMax);
}

function reverseArrayInRange(arr, i, j) {
    return arr.slice(0, i).concat(arr.slice(i, j + 1).reverse());
}

function nextNumber(num) {
    arr = Array.from(String(num), Number);
    arrLen = String(num).length;

    //check if the num is only 1 digit 
    if(arrLen <= 1){
        return -1;
    }

    //check if all digits are the same
    let same = true;
    for(let i=0; i<arrLen; i++){
        if(arr[0] != arr[i]){  
            same = false;
            break
        }
    }
    if (same == true){
        return -1;
    }

    for(i=arrLen-1; i>=0; i--){
        //triggered if the numbers can't be rearranged to form a bigger number
        if(i==0){
            return -1;
        }

        if(arr[i] > arr[i-1]){
            nextMaxId = findNextMaxId(arr, i);
            arr = swap(arr, i-1, nextMaxId);
            arr = reverseArrayInRange(arr, i, arrLen-1);
            return parseInt(arr.join(''));
        }
        
    }
}

console.log(12, nextNumber(12));   // returns 21
console.log(513, nextNumber(513));   // returns 531
console.log(2017, nextNumber(2017));   // returns 2071
console.log(9, nextNumber(9));       // returns -1
console.log(111, nextNumber(111));     // returns -1
console.log(531, nextNumber(531));         // returns -1
