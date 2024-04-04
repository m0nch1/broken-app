import "./style.css";
import { setupCounter } from "./counter.js";

document.querySelector("#app").innerHTML = `
  <div>
    <h1>👻</h1>
    <div class="card">
      <button id="counter" type="button">count is 0</button>
    </div>
  </div>
`;

setupCounter(0);
