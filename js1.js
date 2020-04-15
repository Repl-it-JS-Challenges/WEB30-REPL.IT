// #8 JS -I

const unimaginativeArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// Write a "for" loop that console.log()'s the "zeroeth"
// value in the unimaginitiveArray, and thereafter every
// third value of the unimaginativeArray, i.e. 0, 3, 6,
// and 9: the zeroth, third, sixth, and ninth values.
// What is "zeroeth"? Has the word "first" become
// ambiguous now that I am a computer scientist? (Hint: yes).

for (i = 0; i < unimaginativeArray.length; i += 3) {
  console.log(unimaginativeArray[i]);
}

const nameArray = ['Jacquelynn', 'Csaba', 'Ellen', 'Moises', 'Cole', 'Jeff', "Dre'Sean"];
// Write a console.log() that displays the last value in
// nameArray. Use the `.length` property of array's
// to access the last value. What's going on with that
// slash in Dre'Sean's name?

console.log(nameArray[nameArray.length - 1]);

const adjectiveArray = ['awesome', 'fantastic', 'amazing', 'wonderful', 'fabulous', 'incredible', 'marvelous'];
// Using both nameArray and adjectiveArray, make a
// "for" loop that console.log()'s a sentence for each
// corresponding value in the arrays. Use the string "is"
// to combine the name with the adjective. For example:
// "Jacquelynn is awesome"
// "Csaba is fantastic" et cetera...

for (let i = 0; i < adjectiveArray.length; i++) {
  console.log(`${nameArray[i]} is ${adjectiveArray[i]}`);
}

// Write a "for" loop that console.log()'s every third
// number in unimaginativeArray but initialize the
// iterator so it doesn't console.log() the zero.

for (let i = 3; i < unimaginativeArray.length; i += 3) {
  console.log(unimaginativeArray[i]);
}
