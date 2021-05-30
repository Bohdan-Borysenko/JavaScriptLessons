/*--TACK#1--Если переменная test равна true, то выведите на экран слово 'верно', иначе выведите слово 'неверно'.--*/

const task_two = prompt("Add for Number")
let test = true;
let i = false;

if (task_two >= i){
    console.log(alert("true"))
} else {
    console.log(test <= task_two + alert("false"));
}


/*--TACK#2--
Найдите количество секунд в сутках--*/

let min = 60;
let sec = 60;
let hour = 24;
const result = min * sec * hour; 
console.log(result);


/*--TACK#3--
В переменной month лежит какое-то число из интервала от 1 до 12. 
Определите в какую пору года попадает этот месяц (зима, лето, весна, осень).--*/

var month = 6;
if (month == 12 || month <= 2) {
var result = 'Зима';
}
if (month >= 3 && month <= 5) {
result = 'Весна';
}
if (month >= 6 && month <= 8) {
result = 'Лето';
}
if (month >= 9 && month <= 11) {
result = 'Осень';
}
alert(result);
var month = 10;
if (month == 12 || month <= 2) {
var result = 'Зима';
}
if (month >= 3 && month <= 5) {
result = 'Весна';
}
if (month >= 6 && month <= 8) {
result = 'Лето';
}
if (month >= 9 && month <= 11) {
result = 'Осень';
}
alert(result);
var month = 3;
if (month == 12 || month <= 2) {
var result = 'Зима';
}
if (month >= 3 && month <= 5) {
result = 'Весна';
}
if (month >= 6 && month <= 8) {
result = 'Лето';
}
if (month >= 9 && month <= 11) {
result = 'Осень';
}
alert(result);


/*-TACK#4-
Пусть дана переменная r с радиусом круга. По соответствующей формуле найдите площадь круга и запишите ее в переменную s. 
Выведите содержимое этой переменной на экран.--*/

var L=6.28, S;
const R=L/(2*3.14);
S=R*R*3.14
console.log("R = "+R+", S = "+S)


/*-TASK#5 -
Пусть в переменной num хранится число. Определите, четное число или нет. 
Число будет четным, если последний символ равен 0, 2, 4, 6 или 8, и нечетным в противном случае.
(Здесь нужен математический оператор % - остаток от деления)--*/


// TASK#6--Работа с переменными
// Объявите две переменные: admin и name.
// Запишите строку "Джон" в переменную name.
// Скопируйте значение из переменной name в admin.
// Выведите на экран значение admin, используя функцию alert (должна показать «Джон»).

let name = "Джон";
let admin = name;
alert(admin);

// Работа с переменными
//  Создайте переменную num и присвойте ей значение 3. 
//  Выведите значение этой переменной на экран с помощью метода alert

let num = 3;
alert(num);

// Создайте переменные a=10 и b=2. Выведите на экран их сумму, 
// разность, произведение и частное (результат деления).

let a = 10;
let b = 2;
console.log( a + b);
console.log( a - b);
console.log( a / b);

// Создайте переменные c=15 и d=2. Просуммируйте их, 
// а результат присвойте переменной result. Выведите на экран значение переменной result.

let c =15;
let d = 2; 
let result = c + d;
alert(result);

// Создайте переменные a=10, b=2 и c=5. Выведите на экран их сумму.

let a = 10;
let b = 2;
let c = 5;
alert(a+b+c)

// Создайте переменные a=17 и b=10. Отнимите от a переменную b и результат присвойте переменной c. 
// Затем создайте переменную d, присвойте ей значение 7. Сложите переменные c и d, а результат запишите в переменную result. 
// Выведите на экран значение переменной result.

let a = 17;
let b = 10;
let c = b - a;
let d = 7;
let result = c + d;
alert(result);

// Напишите скрипт, который считает количество секунд в часе, в сутках, в месяце.

let min = 60;
let sec = 60;
let hour = 24;
const result = min * sec * hour;
const resHo = min* sec;
const resMas = result * 31; 
console.log(resHo);
console.log(result);
console.log(resMas);