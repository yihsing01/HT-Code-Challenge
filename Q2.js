function display2darr(arr) {
    console.log("arr:")
    for (let i = 0; i < arr.length; i++) {
        console.log('[', arr[i].join(', '),']');
      }
  }

function arrange(arr){
    display2darr(arr);

    let row = arr.length;
    let col = arr[0].length;
    let ans = [];
    let iIdx = 0;
    let jIdx = 0;
    let count = 0;
    let cont = true;
    let dir = 'R';

    while(cont == true){
        if(dir == 'R'){
            for(let i=0; i<row; i++){
                if(arr[iIdx][jIdx] != '-'){
                    ans = ans.concat(arr[iIdx][jIdx]);
                    arr[iIdx][jIdx] = '-';
                    count++;
                    if(jIdx < row-1 && arr[iIdx][jIdx+1]!='-'){
                        jIdx++;
                    }
                }
            }
            iIdx++;
            dir = 'D';
        }
        else if(dir=='D'){
            for(let i=0; i<col; i++){
                if(arr[iIdx][jIdx] != '-'){
                    ans = ans.concat(arr[iIdx][jIdx]);
                    arr[iIdx][jIdx] = '-';
                    count++;
                    if(iIdx < col-1 && arr[iIdx+1][jIdx]!='-'){
                        iIdx++;
                    }
                }
            }
            jIdx--;
            dir = 'L';
        }
        else if(dir=='L'){
            for(let i=0; i<row; i++){
                if(arr[iIdx][jIdx] != '-'){
                    ans = ans.concat(arr[iIdx][jIdx]);
                    arr[iIdx][jIdx] = '-';
                    count++;
                    if(jIdx > 0 && arr[iIdx][jIdx-1]!='-'){
                        jIdx--;
                    }
                }
            }
            iIdx--;
            dir = 'U';
        }
        else{
            for(let i=0; i<row; i++){
                if(arr[iIdx][jIdx] != '-'){
                    ans = ans.concat(arr[iIdx][jIdx]);
                    arr[iIdx][jIdx] = '-';
                    count++;
                    if(iIdx > 0 && arr[iIdx-1][jIdx]!='-'){
                        iIdx--;
                    }
                }
            }
            jIdx++;
            dir = 'R';
        }

        if(count == row * col){
            cont = false;
            console.log("\nans:\n[" + ans + "]\n");
            return;
        }
    }
}

let arr;

arr = [[1,2,3], 
        [4,5,6],
        [7,8,9]];
arrange(arr);

arr = [[1,2,3],
        [8,9,4],
	    [7,6,5]]
arrange(arr);

arr = [[1,2,3,1],
        [4,5,6,4],
        [7,8,9,7],
        [7,8,9,7]];  
arrange(arr);