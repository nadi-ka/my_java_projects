/*jshint esversion: 6 */

/**
 * You must return a date that comes in a predetermined number of seconds after 01.06.2020 00:00:002020
 * @param {number} seconds
 * @returns {Date}
 *
 * @example
 *      31536000 -> 01.06.2021
 *      0 -> 01.06.2020
 *      86400 -> 02.06.2020
 */
function secondsToDate(seconds) {
    var dateInitialStr = "2020-06-01 00:00:00";
    var initialDate = new Date(Date.parse(dateInitialStr));
    var secInMin = 60;
    var milisecInSec = 1000;
    var utcPlusThree = initialDate.getTimezoneOffset() * secInMin * milisecInSec;
    var resultDate = initialDate - utcPlusThree + (seconds * milisecInSec);

    return new Date(resultDate);
}

/**
 * You must create a function that returns a base 2 (binary) representation of a base 10 (decimal) string number
 * ! Numbers will always be below 1024 (not including 1024)
 * ! You are not able to use parseInt
 * @param {number} decimal
 * @return {string}
 *
 * @example
 *      5 -> "101"
 *      10 -> "1010"
 */
function toBase2Converter(decimal) {
    if (decimal < 1024) {
        return Number(decimal).toString(2);
    }
    return null;
}

/**
 * You must create a function that takes two strings as arguments and returns the number of times the first string
 * is found in the text.
 * @param {string} substring
 * @param {string} text
 * @return {number}
 *
 * @example
 *      'a', 'test it' -> 0
 *      't', 'test it' -> 2
 *      'T', 'test it' -> 2
 */
function substringOccurrencesCounter(substring, text) {
    var emptyString = "";
    if (substring != null && substring !== emptyString && text != null) {
        return text.toLowerCase().split(substring.toLowerCase()).length - 1;
    }
    return 0;
}

/**
 * You must create a function that takes a string and returns a string in which each character is repeated once.
 *
 * @param {string} string
 * @return {string}
 *
 * @example
 *      "Hello" -> "HHeelloo"
 *      "Hello world" -> "HHeello  wworrldd" // o, l is repeated more then once. Space was also repeated
 */
function repeatingLitters(string) {
    var strLength = string.length;
    var newstring = "";
    for (var i = 0; i < strLength; i++) {
        var count = string.split(string[i]).length - 1;
        if (count > 1) {
            newstring += string.substring(i, i + 1);
        }
        else {
            newstring += string.substring(i, i + 1) + string.substring(i, i + 1);
        }
    }
    return newstring;
}

/**
 * You must write a function redundant that takes in a string str and returns a function that returns str.
 * ! Your function should return a function, not a string.
 *
 * @param {string} str
 * @return {function}
 *
 * @example
 *      const f1 = redundant("apple")
 *      f1() ➞ "apple"
 *
 *      const f2 = redundant("pear")
 *      f2() ➞ "pear"
 *
 *      const f3 = redundant("")
 *      f3() ➞ ""
 */
function redundant(str) {
    return function f() {
        return str;
    };
}

/**
 * https://en.wikipedia.org/wiki/Tower_of_Hanoi
 *
 * @param {number} disks
 * @return {number}
 */
 function towerHanoi(disks) {
    var count = 0;

    function innerFunction(disks) {
        var srcP = "A";
        var desP = "C";
        var bufferP = "B";
        
        if (disks >= 1) {
            innerFunction(disks - 1, srcP, bufferP, desP);        
            innerFunction(disks - 1, bufferP, desP, srcP);
            count++;
        }
        return;
    }

    innerFunction(disks);
    return count;
}

/**
 * You must create a function that multiplies two matricies (n x n each).
 *
 * @param {array} matrix1
 * @param {array} matrix2
 * @return {array}
 *
 */
function matrixMultiplication(matrix1, matrix2) {
    var result = [];
    for (var i = 0; i < matrix1.length; i++) {
        result[i] = [];
        for (var j = 0; j < matrix2[0].length; j++) {
            var sum = 0;
            for (var k = 0; k < matrix1[0].length; k++) {
                sum += matrix1[i][k] * matrix2[k][j];
            }
            result[i][j] = sum;
        }
    }
    return result;
}

var m1 = [[1,2],[3,4]];
var m2 = [[5,6],[7,8]];
console.log(matrixMultiplication(m1, m2));

/**
 * Create a gather function that accepts a string argument and returns another function.
 * The function calls should support continued chaining until order is called.
 * order should accept a number as an argument and return another function.
 * The function calls should support continued chaining until get is called.
 * get should return all of the arguments provided to the gather functions as a string in the order specified in the order functions.
 *
 * @param {string} str
 * @return {string}
 *
 * @example
 *      gather("a")("b")("c").order(0)(1)(2).get() ➞ "abc"
 *      gather("a")("b")("c").order(2)(1)(0).get() ➞ "cba"
 *      gather("e")("l")("o")("l")("!")("h").order(5)(0)(1)(3)(2)(4).get()  ➞ "hello"
 */
function gather(str) {
    // var resultStr = str;
    return function(str2) {
        return str += " " + str2;
        // if (str2) {
        // //   resultStr += " " + str2;
        //     str += " " + str2;
        // }
        // //   return gather;
      };
}

var fun = gather("a")("b")("c");
console.log(gather());

function order(num) {
    var numStr = "" + num;
    return function(num2) {
        if (num2) {
          numStr+= " " + num2;
        }
         return numStr;
      };
}


// var fun2 = order(2)(1)(0);
console.log(order(2)(1)(0));

// function hero(name) {
//     this.name = name;
//     var greet = function() {
//     console.log(this.name);
//     };
//     return this.hero;
// }

// console.log(hero("ass")("ggh").greet());

function gather(str) {
    return  function(str2){
        return this;
    };
}

var fun = gather("a")("b")("c");
console.log(fun());

function gather(str) {
    console.log("From gather!!!   " + str);

    function order(num) {
        console.log("From order!!!" + num);

        function get() {
            console.log("From get!!!" + str);
        }

        order.get = get;
        return order;

    }
    gather.order = order;
    return gather;
}

console.log(gather('a')('b')('c').order(2)(1)(0).get());




module.exports = {secondsToDate, toBase2Converter, substringOccurrencesCounter, repeatingLitters, 
    redundant, towerHanoi, matrixMultiplication
};