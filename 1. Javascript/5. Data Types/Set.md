# Set

A Set is a `special type collection – “set of values” (without keys)`, where each value may occur only once

Its main methods are:

- `new Set([iterable])` – creates the set, and if an iterable object is provided (usually an array), copies values from it into the set
- `set.add(value)` – adds a value, returns the set itself
- `set.delete(value)` – removes the value, returns true if value existed at the moment of the call, otherwise false
- `set.has(value)` – returns true if the value exists in the set, otherwise false
- `set.clear()` – removes everything from the set
- `set.size` – is the elements count

The Set `doesn't allow` to `store the same value`, this means the `calls of set.add(value) with the same value don’t do anything`

```
  let set = new Set();

  let john = { name: "John" };
  let pete = { name: "Pete" };
  let mary = { name: "Mary" };

  // visits, some users come multiple times
  set.add(john);
  set.add(pete);
  set.add(mary);
  set.add(john);
  set.add(mary);

  // set keeps only unique values
  alert( set.size ); // 3
```

The fun tip is we can use Set to `remove duplicated value in an array`

```
  const arr = [2, 6, 3, 2, 5];
  const newSet = new Set(arr);

  console.log(Array.from(newSet)); // [2, 6, 3, 5]
```

## # Iteration over Set

We can loop over a set either with `for..of` or using `forEach`:

```
  let set = new Set(["oranges", "apples", "bananas"]);

  for (let value of set) alert(value);

  set.forEach((value, valueAgain, set) => {
    alert(value);
  });
```

The same methods Map has for iterators are also supported:

- `set.keys()` – returns an iterable object for values
- `set.values()` – same as set.keys(), for compatibility with Map
- `set.entries()` – returns an iterable object for entries [value, value], exists for compatibility with Map
