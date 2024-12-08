// For SECTION

// for1

// let k = 5;
// let n = 3;

// for (let i = 0; i < n; i++ ) {
//     console.log(k);
// }

// for2

// let a = 2;
// let b = 8;

// for (let i = a; i <= b; i++) {
//     console.log(i);
// }

// for3

// let a = 4;
// let b = 8;
// let count = 0;
// for (let i = b - 1; i > a; i--) {
//     count++;
//     console.log(i);
// }
// console.log(count);

// for4

// let price = 5;

// for (let i = 1; i <= 10; i++) {
//     if (i === 10) {
//         console.log(`${i} kg = ${i * price} ming sum`);
//     }
// }

// for5

// let price = 8;

// for (let i = 0.1; i <= 1; i += 0.1) {
//         console.log(`${i.toFixed(1)} kg = ${(i * price).toFixed(3)} ming so'm`);
// }

// for6

// let price = 10;

// for (let i = 0.2; i <= 2; i += 0.2) {
//         console.log(`${i.toFixed(1)} kg = ${(i * price).toFixed(3)} ming so'm`);
// }

// for7

// let a = 1;
// let b = 5;
// let sum = 0;

// for (let i = a; i <= b; i++) {
//     sum += i;
// }
// console.log(`yisg'indi: ${sum}`);

// for8

// let a = 2;
// let b = 6;
// let sum = 1;

// for (let i = 2; i <= 6; i++) {
//     sum *= i;
// }
// console.log(`kupaytma: ${sum}`);

// for9

// let a = 1;
// let b = 4;
// let sum = 0;

// for (let i = 1; i <= 4; i++) {
//     sum += i * i;
// }
// console.log(`result: ${sum}`);

// for10

// let n = 5;
// let S = 0;

// for (let i = 1; i <= n; i++) {
//     S += 1 / i;
// }
// console.log(`S = ${S.toFixed(2)}`);

// for11

// let n = 3;
// let S = 0;

// for (let i = n; i <= 2 * n; i++) {
//     S += i * i;
// }
// console.log(`S = ${S}`);

// for12

// let n = 2;
// let p = 1.1;

// for (let i = 1.1; i <= n; i++) {
//     p *= i;
// }
// console.log(`Ko'paytma: ${p}`);

// WHILE SECTION

//while1

// let A = +prompt("A sonini kiriting :");
// let B = +prompt("B sonini kiriting :");

// let remainingLength = A;

// while (remainingLength >= B) {
//     remainingLength -= B;
// }
// console.log("A kesmaning bo‘sh qismi: " + remainingLength);

// while2

// let A = 12;
// let B = 2;

// count = 0

// while (A >= B) {
//     A -= B;
//     count++;
// }
// console.log(count);

// while3

// let N = 10;
// let K = 3;

// let quotient = 0;
// let remainder = N;

// while (remainder >= K) {
//     remainder -= K;
//     quotient++;
// }
// console.log("Butun qism: " + quotient);
// console.log("Qoldiq: " + remainder);

// while4

// let n = 27;
// let isPowerOfThree = true;

// while (n > 1) {
//     if (n % 3 !== 0) {
//         isPowerOfThree = false;
//         break;
//     }
//     n /= 3;
// }

// if (isPowerOfThree && n === 1) {
//     console.log("3 ning darajasi");
// } else {
//     console.log("3 ning darajasi emas");
// }

// while5

// let n = 8;
// let k = 0;

// while (n > 1) {
//     if (n % 2 !== 0) {
//         console.log("n soni 2 ning darajasi emas.");
//         k = -1;
//         break;
//     }
//     n /= 2;
//     k++;
// }

// if (k !== -1) {
//     console.log("n soni 2 ning darajasi. k =", k);
// }

// while17

// let N = 10;
// let M = 3;

// let quotient = 0;
// let remainder = N;

// while (remainder >= M) {
//     remainder -= M;
//     quotient++;
// }
// console.log("Butun qism: " + quotient);
// console.log("Qoldiq: " + remainder);

// while18

// let n = 123;
// let reverse = 0;

// while (n > 0) {
//     let digit = n % 10; // Oxirgi raqamni ajratish
//     reverse = reverse * 10 + digit;
//     n = parseInt(n / 10);
// }

// console.log("Raqamlar teskari tartibda:", reverse);

// while19

// let n = 123;
// let sum = 0;
// let count = 0;

// while (n > 0) {
//     let digit = n % 10;
//     sum += digit;
//     count++;
//     n = parseInt(n / 10);
// }
// console.log("Raqamlar yig'indisi:", sum);

// while20 

// let n = 123;
// let hasTwo = false;

// while (n > 0) {
//     let digit = n % 10; 
//     if (digit === 2) {
//         hasTwo = true;
//         break;
//     }
//     n = parseInt(n / 10);
// }

// if (hasTwo) {
//     console.log("Berilgan sonning raqamlari orasida 2 bor.");
// } else {
//     console.log("Berilgan sonning raqamlari orasida 2 yo'q.");
// }

// while21 

// let n = 234;
// let hasTwo = false;

// while (n > 0) {
//     let digit = n % 10; 
//     if (digit % 2 != 0) {
//         hasTwo = true;
//         break;
//     }
//     n = parseInt(n / 10);
// }

// if (hasTwo) {
//     console.log("Berilgan sonning raqami orasida  toq bor.");
// } else {
//     console.log("Berilgan sonning raqami orasida toq yoq.");
// }

// while22

// let n = 17;
// let isPrime = true;

// if (n <= 1) {
//     isPrime = false;
// } else {
//     let i = 2;
//     while (i <= Math.sqrt(n)) { 
//         if (n % i === 0) {
//             isPrime = false;
//             break;
//         }
//         i++;
//     }
// }

// if (isPrime) {
//     console.log(n + " soni tub.");
// } else {
//     console.log(n + " soni tub emas.");
// }




// TYPE CONVERSION 

// const age = "18";
// console.log(Number(age));


// PUSH QILISH

// let languages = ['Js', 'Java'];
// languages.push('css');
// console.log(languages);


// let languages = ['Js', 'Java', 'React'];
// console.log(languages.length);


// let result;
// result = parseInt('20.04');
// console.log(result);


