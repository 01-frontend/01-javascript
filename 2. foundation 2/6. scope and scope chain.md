# Scope

Scope in JavaScript `refers to the accessibility or visibility of variables`. That is, which parts of a program have access to the variable or where the variable is visible

In Javascript, there are 3 types of scopes

## 1. Global Scope

## 2. Local/Function Scope

## 3. Block Scope

# Scope chain

Scope chains establish the scope for a given function. Each function defined has its own nested scope, and any function defined within another function has a local scope which is linked to the outer function — this link is called the chain

```
const levelRoot = 'level root';

function func1() {
  const level1 = 'level 1';

  return function func2() {
    const level2 = 'level 2';

    return function func3() {
      const level3 = 'level 3';

      console.log(levelRoot);
      console.log(level1); // able to access the grandparent scope
      console.log(level2); // able to access the parent scope
      console.log(level3);
    }
  }
}

func1()()();

```
