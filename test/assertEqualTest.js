const assertEqual = require('../assertEqual');

console.log(`******assertEqualTest****** \n`);
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1,1);
assertEqual(1,1.63645676756);
assertEqual('true',"true");
assertEqual('truish',"true");
assertEqual(1,true);
assertEqual(undefined,null);
console.log(`\n`);