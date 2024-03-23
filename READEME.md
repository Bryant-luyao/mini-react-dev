### 记录 mini-react 学习过程

##### Day01

- 实现渲染 App：

```javascript
const dom = document.createElement("div");
dom.id = "app";
document.querySelector("#root").append(dom);

const textNode = document.createTextNode("");
textNode.nodeValue = "app";
dom.append(textNode);
```

- 简单模拟实现`createElement`, `createTextNode`, `render`, `createRoot`等 API，利用`vite`使用`jsx`:

```javascript
// 简易实现react API
function createTextNode(text) {
  return {
    type: "TEXT_ELEMENT",
    props: {
      nodeValue: text,
      children: [],
    },
  };
}

function createElement(type, props, ...children) {
  return {
    type,
    props: {
      ...props,
      children: children.map((child) => {
        return typeof child === "string" ? createTextNode(child) : child;
      }),
    },
  };
}

function render(el, container) {
  const dom =
    el.type === "TEXT_ELEMENT"
      ? document.createTextNode("")
      : document.createElement(el.type);

  Object.keys(el.props).forEach((key) => {
    if (key !== "children") {
      dom[key] = el.props[key];
    }
  });
  const children = el.props.children;
  children.forEach((child) => {
    render(child, dom);
  });
  container.append(dom);
}

const ReactDom = {
  createRoot(container) {
    return {
      render(App) {
        React.render(App, container);
      },
    };
  },
};
```
总结：学习了从DOM渲染到VDOM渲染，理解了什么是react的vdom。利用递归实现vdom动态生成，了解了vitest编写单元测试。
