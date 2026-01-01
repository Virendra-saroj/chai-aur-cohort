let arr=[14,56,14,14,24,24,25,14,1,9]

function sumfac(number){
     let sum = 0;
    for (let i = 0; i < number.length; i++) {
        sum+=number[i];
        
        
    }
    return sum;
}

let result=sumfac(arr);

console.log(result);