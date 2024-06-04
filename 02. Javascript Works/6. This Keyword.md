# This Keyword

This is object that `the function is a property of`

```
  function sing() {
    return this; // refer to Window object
  }

  const person = {
    name: 'James',
    getThis: function () {
      return this; // refer to person object
    }
  }
```
