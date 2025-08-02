import { createSignal, onCleanup } from "solid-js";
import html from "solid-js/html";

const Options = () => {
  const [count, setCount] = createSignal(0),
    timer = setInterval(() => setCount(count() + 1), 1000);
  onCleanup(() => clearInterval(timer));
  return html`<div>${count}</div>`;
};

export default Options;
