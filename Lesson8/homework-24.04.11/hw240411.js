/* to string */
console.log('17 to string is ' + +'17');
console.log('-17.17 to string is ' + +'-17.17');
console.log('false to string is ' + +'false');
console.log('null to string is ' + +'null');
console.log('undefined to string is ' + +'undefined');
console.log('0 to string is ' + +'0');

/* to number */
console.log("'17' to number is " + Number("17"));
console.log('true to number is ' + Number("true"));
console.log('false to number is ' + Number("false"));
console.log('null to number is ' + Number("null"));
console.log('undefined to number is ' + Number("undefined"));
console.log("'   20   ' to number is " + Number("   20   "));
console.log("'      ' to number is " + Number("      "));
console.log("'   30d   ' to number is " + Number("   30d   "));

/* to boolean */
console.log('null to boolean is ' + Boolean("null"));
console.log('undefined to boolean is ' + Boolean("undefined"));
console.log('0 to boolean is ' + Boolean("0"));
console.log('-0 to boolean is ' + Boolean("-0"));
console.log('NaN to boolean is ' + Boolean("NaN"));
console.log("'' to boolean is " + Boolean(""));
console.log("' ' to boolean is " + Boolean(" "));
console.log('17 to boolean is ' + Boolean("17"));
console.log("'Hello' to boolean is " + Boolean("Hello"));