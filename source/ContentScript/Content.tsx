import { Readability } from "@mozilla/readability";
import { createSignal, onCleanup } from "solid-js";
import html from "solid-js/html";

const Content = () => {
  var article = new Readability(window.document).parse();
  const [count, setCount] = createSignal(0),
    timer = setInterval(() => setCount(count() + 1), 1000);
  onCleanup(() => clearInterval(timer));
  return html`<div>${article}</div>`;
};

export default Content;
