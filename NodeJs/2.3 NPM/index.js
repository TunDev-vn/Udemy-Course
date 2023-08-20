import generateName from "sillyname";
import heroNames from "superhero-name-library";

var sillyname = generateName();
console.log(`My name is ${sillyname}.`);

console.log(`My hero name is ${heroNames.random()}!`);