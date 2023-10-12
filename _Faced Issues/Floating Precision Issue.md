# Floating precision issue

```
0.2 * 0.4 = 0.08000000000000002
```

Solution

```
const floatPrecision = (num: number) => {
  return parseFloat(num.toPrecision(12));
}
```
