//* Розгалуження: if, if...else, else...if
//TODO: 1 ===================================
//Даний рядок, що складається із символів, наприклад, 'abcde'.
// Перевірте, що першим символом цього рядка є буква 'a'.
// Якщо це так - виведіть 'так', інакше виведіть 'ні'.

// let message;
// const str = "abcde";
// if (str.startsWith("a")) {
// console.log("Yes");
// } else {
//     console.log("No");
// }
// console.log(str.startsWith("a"));
// str.startsWith("a") ? message = "Yes" : message = "No";
// console.log(message);

//TODO: 2 ===================================
// Якщо ваше ім’я містить більше 4 букв і прізвище більше 5, то виведіть на екран число, яке дорівнює сумі букв імені і прізвища.
// Якщо умова не виконується - вивести “неможливо виконати умову”.
// Наприклад: “Віктор Сташко” Віктор - 6 літер, Сташко - 6 літер. Виводимо 12.
// Використовувати вбудований метод length.

// const userName = 'Bob';
// const userSurname = 'Marley';
// if (userName.length > 4 && userSurname.length > 5) {
//   console.log(userName.length + userSurname.length);
// } else {console.log('неможливо виконати умову');}

//TODO: 3 ===================================
// Написати скрипт, який перевіряє чи введене число через prompt потрапляє в діапазон від 55 до 99 включно.
// Якщо так, вивести в консоль "Число потрапляє в діапазон".
// Якщо ні, вивести в консоль "Число не потрапляє в діапазон".

// const userInput = prompt('Enter number');
// const number = Number.parseInt(userInput);
// if (!isNaN(number)) {
//   if (number >= 55 && number <= 99) {
//     alert('Число потрапляє в діапазон');
//   } else {
//     alert('Число не потрапляє в діапазон');
//   }
// }

//TODO: 4 ===================================
// Є 3 вікові групи : діти (0-16), дорослі(17-60), пенсіонери (61-100).
// До якої групи відноситься Максим, якщо йому 55 років.Назву групи вивести на екран.

// const age = 55;
// if (age > 0 && age <= 16) {
//   console.log('kids');
// } else if (age > 17 && age <= 60) {
//   console.log('Adults');
// } else if (age > 61 && age <= 100) {
//   console.log('Retired');
// } else {
//   console.log('Long-lived');
// }

//* Тернарний оператор
//TODO: 5 ===================================
// Перевірити, чи є введене користувачем число парним чи непарним, і вивести відповідне повідомлення.
// Використай promt і виведи повідомлення в alert. (використати тернарний оператор)

// const userInput = prompt('Enter number');
// const number = Number(userInput);
// number % 2 === 0 ? alert('even') : alert('odd');

//TODO: 6 ===================================
// Перепишіть if..else на тернарний оператор, за допомогою декількох операторів '?'.

// const login = 'Співробітник';
// let message = '';

// message =
//   login === 'Співробітник' ? 'Привіт' : login == 'Директор' ? 'Вітаю' : login == '' ? 'Немає логіну' : '';
// console.log(message);

// if (login === 'Співробітник') {
//   message = 'Привіт';
// } else if (login == 'Директор') {
//   message = 'Вітаю';
// } else if (login == '') {
//   message = 'Немає логіну';
// } else {
//   message = '';
// }

//* Цикл while and do while
// TODO: 7 ===================================
// Напишіть цикл, який пропонує ввести
// число більше 100 через prompt.
// Якщо відвідувач ввів інше число - попросити
// ввести ще раз і так далі.
// Цикл має питати число, поки відвідувач не
// введе число більше 100, або натисне кнопку
// скасування в prompt

// let userInput = Number.parseFloat(prompt('Enter number over 100'));

// while (userInput < 100) {
//     userInput = prompt('Enter number over 100');
// }

//TODO: 8 ===================================
// При завантаженні сторінки користувачеві пропонується
// в prompt ввести число. Введення додається до значення
// змінної total.
// Операція введення числа триває до того часу,
// поки користувач не натисне кнопку Cancel в prompt.
// Після того, як користувач припинив введення натиснувши на
// кнопку Cancel, показати alert з рядком "Загальна сума введених чисел дорівнює [число]."
// Робити перевірку,що користувач ввів саме число,
// а не довільний набір символів, не потрібно.

// let total = 0;
// let userInput;

// do {
//   userInput = prompt('Enter number');
//   if (userInput === null) break;
//   userInput = parseFloat(userInput);
//   if (!isNaN(userInput)) {
//     total += userInput;
//   }
// } while (true);

// alert(`Загальна сума введених чисел дорівнює ${total}.`);

//* Цикл for директива break і continue
//TODO: 9 ===================================
//Напишіть цикл, який виводить у консоль
// числа від max до min за спаданням
// Додайте усі парні числа від min до max

// const min = 0;
// const max = 10;
// let total = 0;
// for (let i = max; i > min; i -= 1) {
//   if (i % 2 === 0) {
//     total += i;
//   }
// }
// console.log(`Сума усіх парних: ${total}`);

// метод від зворотнього:
// const min = 0;
// const max = 10;
// let total = 0;
// for (let i = max; i > min; i -= 1) {
//   if (i % 2 !== 0) {
//     continue;
//     }
//     total += i;
// }
// console.log(`Сума усіх парних: ${total}`);

//TODO: 10 ===================================
// Знайдіть число 49  у проміжку чисел від 1 до 100 та вийдіть з циклу.
// const min = 1;
// const max = 100;
// const num = 49;

// for (let i = min; min < max; i += 1) {
//     if (i === num)
//         {console.log(i);
//         break;}
// }

//TODO: 11 ===================================
//  Виведіть методом console.log() зірочки від 1 до 7 штук у вигляді трикутника таким чино
// *
// **
// ***
// ****
// *******

// let inputSign = "*";
// const min = 1;
// const max = 7;
// let message = "";

// for (let i = min; i <= max; i++) {
//     message += inputSign;
//     console.log(message);
// }

//TODO: 12 ===================================
// Порахуйте суму чисел від 12 до 27
// let total = 0;
// for (let i = 12; i <= 27; i += 1) {
//     total += i;
// }
// console.log(total);

//TODO: 13 ===================================
//Якщо число ділитися на 3 повертати
//fizz якщо ділитися на 5 повертати buzz
//Якщо ділитися на 3 і на 5 повернути fizzbuzz

// const num = 2;
// if (num % 3 === 0 && num % 5 === 0) {
//     console.log('fizzbuzz');
// } else if (num % 5 === 0) {
//     console.log("buzz");
// } else if (num % 3 === 0) {
//   console.log('fizz');
// } else {console.log("wrong number");}

//* Конструкція switch
//TODO: 14 ===================================
// Запитай користувача у модальному вікні, який з напоїв він бажає придбати - "Кава", "Чай" чи "Сік",
// та залежно від виду напою оголоси суму досплати.Використовувати switch.

// const userChoice = prompt('What drink would you like?').toLowerCase();

// switch (userChoice) {
//   case 'coffee':
//     alert('price 50 UAH');
//     break;
//   case 'tea':
//     alert('price 30 UAH');
//     break;
//   case 'juice':
//     alert('price 40 UAH');
//     break;
//   default:
//     alert('such drink is unavailable');
// }

// TODO Задача від Іллі 1 (розрахунок прибутку з депозиту):

// function calculateProfit(amount, percent, period) {
//   let total = amount;
//   for (let i = 1; i <= period; i += 1) {
//     total += (total * percent) / 100;
//     }
//      return `Net profit: ${total - amount}`;
// }
// console.log(calculateProfit(1000, 10, 3));

// TODO Задача від Іллі 2 (розрахунок кількості порцій випивки):
// function getDrinks(numberOfGuests) {
//     if (numberOfGuests === 0) {
//     return '0';
//     } else {
//         let numberOfPortions = 0;
//       for (let i = 0; i <= numberOfGuests; i += 1) {
//       numberOfPortions += i;
//     }
//     return `Number of portions: ${numberOfPortions}`;
//   }
// }
// console.log(getDrinks(5));

// TODO Задача від Іллі 3 (розрахунок кількості порцій випивки з певним кроком):
// function getDrinksWithSteps(numberOfGuests, step) {
//       let numberOfPortions = 0;
//     for (let i = 1; i <= numberOfGuests; i += step) {
//       numberOfPortions += i;
//     }
//     return `Number of portions: ${numberOfPortions}`;
//   }

// console.log(getDrinksWithSteps(5, 2));

// TODO: Підрахунок суми замовлення (for ) ==============================================
// function calculateTotalPrice(order) {
//    let sum = 0;
//   for (let i = 0; i < order.length; i += 1) {
//       sum += order[i];
//     }
//     return sum;
// }

// console.log(calculateTotalPrice([412, 371, 94, 63, 176]));
// TODO: Підрахунок суми замовлення (for ... of) ==============================================

// function calculateTotalPrice(order) {
//   let sum = 0;
//   for (let price of order) {
//     sum += price;
//   }
//   return sum;
// }
// console.log(calculateTotalPrice([412, 371, 94, 63, 176]));

//TODO: Виокремлення парних чисел з проміжку чисел ==============================================
// function getEvenNumbers(start, end) {
//   let evenNumbers = [];

//   for (let i = start; i <= end; i++) {
//     if (i % 2 === 0) {
//       evenNumbers.push(i);
//     }
//   }

//   return evenNumbers;
// }

// console.log(getEvenNumbers(3, 11));

//TODO: Перевірка наявності аргументу (в будья-кому регістрі) в масиві ===============================================
// function checkStorage(storage, item) {
//     const fruit = item.toLowerCase();
//   if (storage.includes(fruit)) {
//     return `${fruit} is available to order!`;
//   } else {
//     return 'Sorry! We are out of stock!';
//   }
// }
// console.log(checkStorage(['apple', 'plum', 'pear'], 'peAr'));

//TODO: Вибір однакових елементів масивів ==============================================
// function getCommonElements(array1, array2) {
//   let newArray = [];
//   for (let i = 0; i < array1.length; i += 1) {
//     if (array2.includes(array1[i])) {
//       newArray.push(array1[i]);
//     }
//   }
//   return newArray;
// }
// console.log(getCommonElements([3, 2, 1], [2, 1, 17, 19]));
// console.log(getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27]));

// TODO: Найменше число з масиву=======================
// const numbers = [12, 25, 57, 5, 96, 47, 3, 11, 52];
// let smallestNumber = numbers[0];
// for (const number of numbers) {
//     if (number < smallestNumber) {
//     smallestNumber = number;
//   }
// }
// console.log(smallestNumber);

// TODO: Найбільше число з масиву=====================
// const numbers = [12, 25, 57, 5, 96, 47, 3, 11, 52];
// let largestNumber = numbers[0];
// for (const number of numbers) {
//     if (number > largestNumber) {
//         largestNumber = number;
//     }
// }
// console.log(largestNumber);

// TODO Task-1. SLUG================
// function slugify(title) {
//   const normalizedTitle = title.toLowerCase();
//   const titleArray = normalizedTitle.split(' ');
//   const slug = titleArray.join('-');
//     return slug;

//     const slug = title.toLowerCase().split(' ').join('-');
//     return slug;
// }

// console.log(slugify('Arrays for begginers')); // "arrays-for-begginers"
// console.log(slugify('English for developer')); // "english-for-developer"
// console.log(slugify('Ten secrets of JavaScript')); // "ten-secrets-of-javascript"
// console.log(slugify('How to become a JUNIOR developer in TWO WEEKS')); // "how-to-become-a-junior-developer-in-two-weeks"

// TODO Task-2. Kомпозиція масивів=========================
// function makeArray(firstArray, secondArray, maxLength) {
//   let newArray = firstArray.concat(secondArray);

//   if (newArray.length > maxLength) {
//     return newArray.slice(0, maxLength);
//     }
//     return newArray
// }
// console.log(makeArray(['Mango', 'Poly'], ['Ajax', 'Chelsea'], 3)); // ["Mango", "Poly", "Ajax"]
// console.log(makeArray(['Mango', 'Poly', 'Houston'], ['Ajax', 'Chelsea'], 4)); // ["Mango", "Poly", "Houston", "Ajax"]
// console.log(makeArray(['Mango'], ['Ajax', 'Chelsea', 'Poly', 'Houston'], 3)); // ["Mango", "Ajax", "Chelsea"]
// console.log(makeArray(['Earth', 'Jupiter'], ['Neptune', 'Uranus'], 2)); // ["Earth", "Jupiter"]
// console.log(makeArray(['Earth', 'Jupiter'], ['Neptune', 'Uranus'], 4)); // ["Earth", "Jupiter", "Neptune", "Uranus"]
// console.log(makeArray(['Earth', 'Jupiter'], ['Neptune', 'Uranus', 'Venus'], 0)); // []

// TODO Task-3. Фільтрація масиву чисел===================
// function filterArray(numbers, value) {
//     let newArray = [];

//     for (const number of numbers) {
//         if (number > value) {
//             newArray.push(number);
//         }
//     }
//     return newArray;
// }
// console.log(filterArray([1, 2, 3, 4, 5], 3)); // [4, 5]
// console.log(filterArray([1, 2, 3, 4, 5], 4)); // [5]
// console.log(filterArray([1, 2, 3, 4, 5], 5)); // []
// console.log(filterArray([12, 24, 8, 41, 76], 38)); // [41, 76]
// console.log(filterArray([12, 24, 8, 41, 76], 20)); // [24, 41, 76]

// TODO Rock, Paper, Scissors=========================
// const rps = (p1, p2) => {
//   if (
//     (p1 === 'rock' && p2 === 'scissors') ||
//     (p1 === 'scissors' && p2 === 'paper') ||
//     (p1 === 'paper' && p2 === 'rock')
//   ) {
//     return 'Player 1 won!';
//   } else if (
//     (p1 === 'scissors' && p2 === 'rock') ||
//     (p1 === 'paper' && p2 === 'scissors') ||
//     (p1 === 'rock' && p2 === 'paper')
//   ) {
//     return 'Player 2 won!';
//   } else {
//     return 'Draw!';
//   }
// };

// console.log(rps('paper', 'scissors'));

// TODO Odd or Even Sum of Array======================
// function oddOrEven(array) {
//   let total = 0;
//   for (const element of array) {
//     total += element
//     }
//     if (total % 2 === 0) {
//         return 'even'
//     } else {return 'odd'}
// }
// console.log(oddOrEven([0, 1, 5]));
// console.log(oddOrEven([]));
// console.log(oddOrEven([1023, 1, 3]));
// console.log(oddOrEven([-1023, -1, 3]));

// TODO Square Every Digit of a Number ================

// function squareDigits(num) {
//   const string = String(num);
//   const array = string.split('');

//   let arrayOfNumbers = [];

//   for (let i = 0; i < array.length; i += 1) {
//     arrayOfNumbers.push(array[i] ** 2);
//   }
//   const result = Number(arrayOfNumbers.join(''));

//   return result;
// }

// console.log(squareDigits(3212));
// console.log(squareDigits(2112));
// console.log(squareDigits(0));
// console.log(squareDigits(453720));

// TODO Positive numbers sum====================================
// function positiveSum(arr) {
//   let total = 0
//   for (let i = 0; i < arr.length; i += 1) {
//         if (arr[i] > 0) {
//       total += arr[i];
//     }
//   }
//   return total;
// }

// console.log(positiveSum([1, 2, 3, 4, 5])); // 15;
// console.log(positiveSum([1, -2, 3, 4, 5])); //13;
// console.log(positiveSum([-1, 2, 3, 4, -5])); //9

// TODO Total amount of points=========================
// function points(games) {
//   let totalPoints = 0;
//   let gameResult;
//   let x;
//   let y;

//   for (let i = 0; i < games.length; i += 1) {
//     gameResult = games[i];
//     x = gameResult[0];
//     y = gameResult[2];

//     if (x > y) {
//         totalPoints += 3;
//       } else if (x < y) {
//         totalPoints += 0;
//       } else {totalPoints +=1}
//   }
//     return totalPoints;
//   }

// console.log(points(['1:0', '2:0', '3:0', '4:0', '2:1', '3:1', '4:1', '3:2', '4:2', '4:3'])); //30
// console.log(points(['1:0', '2:0', '3:0', '4:4', '2:2', '3:3', '1:4', '2:3', '2:4', '3:4'])); //12

// TODO Count of positives / sum of negatives===============
// function countPositivesSumNegatives(input) {
//   if (input === null || input.length === 0) {
//     return [];
//   }

//   let x = 0;
//   let y = 0;
//   let totalArray = [x, y];
//   for (const element of input) {
//     if (element > 0) {
//       x += 1;
//     } else if (element < 0) {
//       y += element;
//     }
//   }
//   return totalArray = [x, y];
// }

// console.log(
//   countPositivesSumNegatives([
//     1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15,
//   ])
// );
