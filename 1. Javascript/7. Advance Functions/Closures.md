# Closures

A closure is a function that `has access to its outer function scope` even after the outer function has returned

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
