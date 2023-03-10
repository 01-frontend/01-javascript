# Arrays

```
  const strings = ['a', 'b', 'c', 'd'];

  // push - O(1)
  strings.push(e); // ['a', 'b', 'c', 'd', 'e']

  // pop - O(1)
  strings.pop(); // ['a', 'b', 'c', 'd']

  // unshift - O(n)
  string.unshift('x') // ['x', 'a', 'b', 'c', 'd']

  // splice - O(n/2) => worst case: O(n)
  strings.splice(2, 0, 'alien'); // ['x', 'a', 'alien', 'b', 'c', 'd']
```
