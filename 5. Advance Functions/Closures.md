# Closures

A closure is a function that `remembers its outer variables` and `can access them`

```
  function a() {
    const grandpa = 'grandpa';

    return function b() {
      const father = 'father';

      return function c() {
        const son = 'son';

        return `${grandpa} > ${father} > ${son}`
      }
    }
  }

  a()()(); // grandpa > father > son
```
