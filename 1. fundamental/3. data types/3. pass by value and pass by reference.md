# Pass by value

`Primitives are passed by value`, meaning `their values are copied` and then `placed somewhere else in the memory`

```
  const name1 = 'John';
  const name2 = name; // copy the name to a new place in memory
```

# Pass by reference

`Non Primitive are passed by reference`, meaning their properties are not stored separately in memory

```
  const obj1 = {
    name: 'John',
    age: 28
  };

  const obj2 = obj1; // set a new reference to the object location in memory
  obj2.name = 'Mary';

  console.log(obj1); // Will be { "name": "Mary", "age": 28 }
```
