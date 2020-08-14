//Задача 1
document.write('<h3>Задача 1</h3>');
let i, tmp, cloneArr;
let arr = [];
let len = arr.length;
len = prompt('Enter a length of array');
for (let i = 0; i < len; i++) {
    arr.push(prompt('Enter a number'));
    copyArr = arr.slice(); //копия начального массива
}
if (len % 2 === 0) {
    for (i = 0; i < len; i += 2) {
        tmp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = tmp;
    }
} else {
    for (i = 0; i < len - 1; i += 2) {
        tmp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = tmp;
    }
}
document.write('Длина массива: ', len + '</br>');
document.write('Заданный пользователем массив: ', copyArr + '</br>');
document.write('Результат массива: ', arr + '</br>');