import "./style.css";
import RCLogo from "../src/logo.png";

document.querySelector("#app").innerHTML += `
  <div>
    <a href="https://vite.dev" target="_blank">
      <img src="${RCLogo}" class="logo" alt="RC logo" />
    </a>
    <h1>Hello Vite!</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite logo to learn more
    </p>
  </div>
`;

// setupCounter(document.querySelector("#counter"));
