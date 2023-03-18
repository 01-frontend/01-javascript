const promisify = (item, delay) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(item);
    }, delay);
  });
};

const shortDelay = () => Promise.resolve("short");
const longDelay = () => promisify("long", 3000);

const runParallel = async () => {
  console.log("running...");
  const startTime = new Date().getSeconds();

  const result = await Promise.allSettled([shortDelay(), longDelay()]);

  const endTime = new Date().getSeconds();
  console.log(`done in ${endTime - startTime} second`, result);
};

runParallel();
