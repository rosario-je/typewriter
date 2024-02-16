const sentence = "hello there from lighthouse labs";

let initialDelay = 0;
for (const char of sentence) {
  setTimeout(() => {
    process.stdout.write(char);
  }, initialDelay);
  initialDelay += 50;
}
setTimeout(() => {
  process.stdout.write('\n')
}, initialDelay);