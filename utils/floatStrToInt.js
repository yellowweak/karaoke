"use strict";

/**
 * Convert float-typed string w/ decision of 3 to int
 *
 * ex:
 * 99.001 => 99001
 * 100.000 => 100000
 */
const floatStrToInt = (floatStr) => {
  const strs = floatStr.split(".");
  return parseInt(strs[0]) * 1000 + parseInt(strs[1]);
};

module.exports = floatStrToInt;
