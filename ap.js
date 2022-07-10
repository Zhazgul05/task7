// 1.Скрипт запрашивает ввести букву русского алфавита. Скрипт должен вывести сообщение какая эта буква - гласная или согласная - 10 баллов

// const rusAlphafit = ["а", "е", "э", "и", "о", "ы", "у", "ю", "я"];

// const alphabit = [
//   "б",
//   "в",
//   "г",
//   "д",
//   "н",
//   "п",
//   "р",
//   "с",
//   "т",
//   "к",
//   "л",
//   "ф",
//   "х",
//   "ч",
//   "ш",
// ];

// const user = prompt("Введите русскую букву");

// for (let i = 0; i < rusAlphafit.length; i++) {
//   if (rusAlphafit[i] == user.toLowerCase()) {
//     alert("гласная буква");
//   }
// }

// for (let i = 0; i < alphabit.length; i++) {
//   if (alphabit[i] == user.toLowerCase()) {
//     alert("согласная буква");
//   }
// }

// 2.“Калькулятор” - пользователь вводит с клавиатуры число, символ арифметического действия (+, -, *, /) и еще одно число, Скрипт должен вывести результат  - 10

// let number = prompt("Enter a number?");
// let ariphmeticSymbol = prompt("Enter ariphmetical symbol?");
// let number1 = prompt("Enter a next number?");

// if (ariphmeticSymbol == "+") {
//   console.log(number + number1);
// } else if (ariphmeticSymbol == "-") {
//   console.log(number - number1);
// } else if (ariphmeticSymbol == "*") {
//   console.log(number * number1);
// } else if (ariphmeticSymbol == "/") {
//   console.log(number / number1);
// } else if (ariphmeticSymbol == "%") {
//   console.log(number % number1);
// }

// 3.Вывести в консоль все возможные сочетания из двух цифр - первая цифра может быть любой от 3 до 8, вторая любой от 0 до 7. Пример: 36, 44, 80 и т.д4i/           vbgvjhjkdddddddddcnhssxDZt

// let num1 = [3, 4, 5, 6, 7, 8];
// let num2 = [0, 1, 2, 3, 4, 5, 6, 7];

// for (let i = 0; i < num1.length; i++) {
//   for (let i = 0; i < num2.length; i++) {
//     console.log(`${num1[i]}${num2[j]}`);
//   }
// }
