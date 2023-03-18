const promisify = (item, delay) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(item);
    }, delay);
  });
};

const longDelay = () => promisify("long", 2000);

const runParallel = async () => {
  const result = await Promise.race([
    longDelay(),
    Promise.reject("There is any error"),
    Promise.resolve("short"),
  ]);

  console.log(`Result: `, result); // Uncaught (in promise) There is any error
};

runParallel();
