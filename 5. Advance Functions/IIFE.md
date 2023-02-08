# Immediately Invoked Function Expression (IIFE)

An IIFE (Immediately Invoked Function Expression) is a JavaScript function that `runs immediately after it is defined`

```
(async () => {
  const stream = await getFileStream("https://domain.name/path/file.ext");
  console.log(stream);
})();
```
