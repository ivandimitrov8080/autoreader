import { Readability } from "@mozilla/readability";

console.log('helloworld from content script');
const websites = [
  "*.wikipedia.org/wiki/*",
];

for (const w of websites) {
  console.log(w)
}

window.addEventListener('load', function() {
  var article = new Readability(window.document).parse();
  document.body.innerHTML = article?.content ?? ''
})

export { };
