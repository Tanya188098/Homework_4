let i, j;
const n = 10; 
const m = 10; //A[0].length
let A = [];
let sumCols = 0;

for (i = 0; i < n; i++) {
    A[i] = [];
    for (j = 0; j < m; j++) {
        let randomNum = Math.round(Math.random() * 41 - 20);
        A[i].push(randomNum);
    }
}

for (i = 0; i < A.length; i++) {
    document.write(A[i] + '<br>');
}

//let copyA = A.slice();

//сумма столбцов
for (i = 0; i < n; i++) {
    for (j = 0; j < m; j++) {
        sumCols += A[j][i];
    }
    document.write('Сумма: ' + sumCols + '<br> ');
    sumCols = 0;
}

////удаление столбца
//for(i = 0; i < n; i++){
//    for(j = 0; j < m; j++){
//        if(sumCols < 10){
//           A[i].splice(A[j], 1);
//        }
//    }
//}


