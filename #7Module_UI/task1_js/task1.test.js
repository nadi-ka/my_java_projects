/*jshint esversion: 6 */

/** secondsToDate() test;
 * @param {number} seconds
 * @returns {Date}
 */

const {secondsToDate, toBase2Converter, substringOccurrencesCounter, repeatingLitters, 
    redundant, towerHanoi, matrixMultiplication, gather} = require('./task1');

test("when add milliseconds to 01.06.20201 -> then returns new date", () => {
  expect(secondsToDate(31536000)).toEqual(new Date (Date.parse("2021-06-01")));
  expect(secondsToDate(0)).toEqual(new Date (Date.parse("2020-06-01")));
  expect(secondsToDate(86400)).toEqual(new Date (Date.parse("2020-06-02")));
});

/** toBase2Converter() test;
 * @param {number} decimal
 * @return {string}
 */

test("when give base 10 (decimal) number -> then returns a base 2 (binary) representation", () => {
    expect(toBase2Converter(5)).toBe("101");
    expect(toBase2Converter(10)).toBe("1010");
    expect(toBase2Converter(1024)).toBe(null);
  });

/** substringOccurrencesCounter() test;
 * @param {string} substring
 * @param {string} text
 * @return {number}
 */

test("when give substring and text -> then returns the number of times the substring is found in the text", () => {
    expect(substringOccurrencesCounter('a', 'test it')).toBe(0);
    expect(substringOccurrencesCounter('t', 'test it')).toBe(3);
    expect(substringOccurrencesCounter('T', 'test it')).toBe(3);
  });

/** repeatingLitters() test;
 *  @param {string} string
 *  @return {string}
 */

test("when give a string -> then returns a string in which each character is repeated once", () => {
    expect(repeatingLitters("Hello")).toBe("HHeelloo");
    expect(repeatingLitters("Hello world")).toBe("HHeello  wworrldd");
  });

/** redundant() test;
 *  @param {string} str
 *  @return {function}
 */

test("when give a string -> then returns a function that returns str", () => {
    expect(redundant("apple")()).toBe("apple");
    expect(redundant("pear")()).toBe("pear");
    expect(redundant("")()).toBe("");
  });

/** towerHanoi() test;
 * @param {number} disks
 * @return {number}
 */

test("when give a number of disks -> then returns a number of steps to complete the puzzle (2^n - 1)", () => {
    expect(towerHanoi(3)).toBe(7);
    expect(towerHanoi(5)).toBe(31);
    expect(towerHanoi(6)).toBe(63);
  });

/** matrixMultiplication() test;
 * @param {array} matrix1
 * @param {array} matrix2
 * @return {array}
 */

test("when give two matricies (n x n each) -> then returns the result of multiplication", () => {
    var m1 = [[1,2],[3,4]];
    var m2 = [[5,6],[7,8]];
    var matrExpected1 = [[19,22],[43,50]];
    expect(matrixMultiplication(m1, m2)).toEqual(matrExpected1);
  });

  /** gather() test;
 * @param {string} str
 * @return {string}
 */

test("when give str and num -> then returns all of the arguments provided to the gather functions as a string in the order specified in the order functions", 
  () => {
    expect(gather("e")("l")("o")("l")("!")("h").order(5)(0)(1)(3)(2)(4).get()).toBe("hello!");
});