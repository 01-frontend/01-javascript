# Prototype

In JavaScript, every object has `a built-in hidden property` called `[[Prototype]]`, that can be `either null or references another object`. The prototype can be accessed via `__proto__` property

In realty, prototype is not much popular because of `its bad performance` and there is `an alternative called class`

```
  const array =  [];

  /**
   * array.__proto__: able to access the Array prototype
   * concat: ƒ concat()
   * filter: ƒ filter()
   * map: ƒ map()
   */
```

```
  const array = [];
  // array.__proto__ = Array.prototype

  const inception = () => {}
  // inception.__proto__ = Function.prototype
```

```
  const array = [];
  array.__proto__.__proto__; // this call prototype chain
```

Another way to set the prototype beside the `__proto__` is `Object.create`

```
  let human = {
    mortal: true
  }

  let socrates = Object.create(human);
  socrates.mortal; // true
```
