console.log('helloworld from content script');
const websites = [
  "*.wikipedia.org/wiki/*",
];

for (const w of websites) {
  console.log(w)
}

export { };
