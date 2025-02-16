const creator = (params) => {
  const element = document.createElement(params.tagName);
  element.classList.add(...params.style);
  element.textContent = params.text;
  for (const key in params.attributes) {
    element.setAttribute(key, params.attributes[key]);
  }
  return element;
};

export default creator;
