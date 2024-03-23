//  V1 js创建APP节点
// const dom = document.createElement("div");
// dom.id = "app";
// document.querySelector("#root").append(dom);

// const textNode = document.createTextNode("");
// textNode.nodeValue = "app";
// dom.append(textNode);

// v2 react --> vdom -->js object
// const textEl = {
//   type: "TEXT_ELEMENT",
//   props: {
//     nodeValue: "app",
//     children: [],
//   },
// };
// const el = {
//   type: "div",
//   props: {
//     id: "id",
//     children: [textEl],
//   },
// };

// const textEl = createTextNode('app');
// const App = createElement('div', {id: 'id'}, '666-', 'mini-react')

// const dom = document.createElement(App.type);
// dom.id = App.props.id;
// document.querySelector("#root").append(dom);

// const textNode = document.createTextNode("");
// textNode.nodeValue = textEl.props.nodeValue;
// dom.append(textNode);

import ReactDom from "./core/ReactDom.js";
import App from './App.js'
// render(App, document.querySelector('#root'))


ReactDom.createRoot(document.querySelector("#root")).render(App);
