import "./style.css";

const buttonParams = {
  tagName: "button",
  style: "button",
  text: "red",
  attributes: {
    id: "button",
    "data-test": "abrakadabra",
  },
};

const creator = (params) => {
  const element = document.createElement(params.tagName);
  element.classList.add(params.style);
  element.textContent = params.text;
  for (const key in params.attributes) {
    element.setAttribute(key, params.attributes[key]);
  }
  return element;
};

const button = creator(buttonParams);
document.body.append(button);
