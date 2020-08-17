let i, j;
const n = 10;
const m = 10;
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

document.write('<br>');

//сумма столбцов
for (i = 0; i < n; i++) {
    for (j = 0; j < m; j++) {
        sumCols += A[j][i];
    }
    document.write('Сумма: ' + sumCols + '<br> ');
    sumCols = 0;
}

//удаление столбцов
for (i = n - 1; i >= 0; i--) {
    sumCols = 0;
    for (j = 0; j < m; j++) {
        sumCols += A[j][i];
    }
    if (sumCols < 0) {
        for (j = 0; j < m; j++) {
            A[j].splice(i, 1);
        }
    }
}

document.write('<br><br>После очистки:<br>');

for (i = 0; i < A.length; i++) {
    document.write(A[i] + '<br>');
}



