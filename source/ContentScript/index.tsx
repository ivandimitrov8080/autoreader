import { render } from 'solid-js/web';
import Content from './Content';

console.log('helloworld from content script');
const websites = [
  "*.wikipedia.org/wiki/*",
];

for (const w of websites) {
  console.log(w)
}

window.addEventListener('load', function() {
  render(Content, document.body)
})

export { };
