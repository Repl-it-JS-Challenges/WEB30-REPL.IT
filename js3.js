// # 10  JS -III

const pets = [
  {
    name: 'Tinkerbell',
    species: 'cat',
    age: 2,
  },
  {
    name: 'Lucy',
    species: 'dog',
    age: 12,
  },
  {
    name: 'Chloe',
    species: 'cat',
    age: 18,
  },
  {
    name: 'Mojo',
    species: 'dog',
    age: 6,
  },
  {
    name: 'Olivia',
    species: 'parakeet',
    age: 4,
  },
  {
    name: 'Shadow',
    species: 'cat',
    age: 8,
  },
  {
    name: 'Oreo',
    species: 'cat',
    age: 5,
  },
  {
    name: 'Molly',
    species: 'dog',
    age: 4,
  },
  {
    name: 'Freddie Prinze Jr.',
    species: 'parakeet',
    age: 9,
  },
];

function sumPetYears(arr, kind, multiply) {
  let species = arr.filter((s) => s.species === kind);
  let ages = species.map((a) => a.age);
  let humanAges = ages.reduce((acc, currentV) => acc + currentV * multiply, 0);
  return `The combined ${kind}s' ages: ${humanAges} years old!`;
}
console.log(sumPetYears(pets, 'dog', 7));
