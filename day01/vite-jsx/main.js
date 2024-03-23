import ReactDom from "./core/ReactDom.js";
import App from './App.jsx'
// render(App, document.querySelector('#root'))


ReactDom.createRoot(document.querySelector("#root")).render(App);