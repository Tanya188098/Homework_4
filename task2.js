let i, j;
const n = 4;
const m = 5;
const A = [];
let minRowSum, maxRowSum, tmpRow;
let minRowIndex, maxRowIndex, tmpRowSum = 0;

for (i = 0; i < n; i++) {
    A[i] = []; // создание двумерного массива
    for (j = 0; j < m; j++) {
        let randomNum = Math.round(Math.random() * 100);
        A[i].push(randomNum);
        tmpRowSum += A[i][j];
    }
    document.write('Сумма: ' + tmpRowSum + ' | ' + A[i] + '<br> ');
    if (i === 0) { 
        minRowSum = tmpRowSum;
        maxRowSum = tmpRowSum;
    }
    if (tmpRowSum < minRowSum) {
        minRowIndex = i;
        minRowSum = tmpRowSum;
    }
    if (tmpRowSum > maxRowSum) {
        maxRowIndex = i;
        maxRowSum = tmpRowSum;
    }
    tmpRowSum = 0;
}

document.write('<hr>');

tmpRow = A[minRowIndex];
A[minRowIndex] = A[maxRowIndex];
A[maxRowIndex] = tmpRow;

document.write('Видоизмененная матрица: ' + '<br>');

for (i = 0; i < A.length; i++) {
    document.write(A[i] + '<br>');
}
document.write('<hr>');