//90-A
//80-B
//70-c
// 60>=D
//F

function gradeCalc(mark){
    if (mark>=90) {
        return "You scored grade : A"
    } else if(mark>=80) {
        return "You scored grade : B"
    }else if(mark>=70){
        return "You scored grade : c"
    }else if(mark>=60){
        return "You scored grade : D"
    }else{
        return "Faild grade:F"
    }
}

let result =gradeCalc(56);
console.log(result)