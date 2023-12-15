// swap 2 elements in array
function swap(arr, num1, num2){
    temp = arr[num1];
    arr[num1] = arr[num2];
    arr[num2] = temp;
    return arr;
}

// find the smallest larger digit to the right
function findNextMaxId(arr, i) {
    let temp= [];
    // identify all the elements to the right that are larger than the digit
    for (let j=arr.length-1; j>i-1; j--) {
        if (arr[j] > arr[i-1]) {
            temp = temp.concat(arr[j]);
        }
    }
    
    let nextMax = Math.min(...temp);   // identify the smallest digit among those digits
    return arr.indexOf(nextMax);
}

// reverse the elements of an array in a specific range
function reverseArrayInRange(arr, i, j) {
    return arr.slice(0, i).concat(arr.slice(i, j + 1).reverse());
}

function nextNumber(num) {
    arr = Array.from(String(num), Number);
    arrLen = String(num).length;

    // return -1 if the num is only 1 digit 
    if(arrLen <= 1){
        return -1;
    }

    // return -1 all digits are the same
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
        // return -1 if the digits can't be rearranged to form a bigger number
        if(i==0){
            return -1;
        }
        
        //  identify the first instance where a digit is smaller than the digit on its right
        if(arr[i] > arr[i-1]){
            nextMaxId = findNextMaxId(arr, i);              // find the smallest larger digit to the right
            arr = swap(arr, i-1, nextMaxId);                // swap the two digits
            arr = reverseArrayInRange(arr, i, arrLen-1);    // sort the remaining digits ascendingly
            return parseInt(arr.join(''));                  // convert to int and return answer
        }
        
    }
}

console.log(12, nextNumber(12));        // returns 21
console.log(513, nextNumber(513));      // returns 531
console.log(2017, nextNumber(2017));    // returns 2071
console.log(9, nextNumber(9));          // returns -1
console.log(111, nextNumber(111));      // returns -1
console.log(531, nextNumber(531));      // returns -1
