# High Order Functions

A function which `takes another function as an argument` or `returns a function` is known as a higher order function

```
const takePerson = (personIndex) => {
  const names = ['John', 'Ben', 'Adam'];
  return names[personIndex];
}

const printName1 = (personIndex, takePersonFn) => {
  console.log(takePersonFn(personIndex));
}

const printName2 = (personIndex) => {
  return takePersonFn(personIndex)
}
```
