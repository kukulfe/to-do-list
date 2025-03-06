import creator from "../core/creator.js";
import {
  buttonParams,
  headerParams,
  titleParams,
  wrapperIcon,
} from "./header-params.js";

const headerCreator = () => {
  const headerElement = creator(headerParams);
  const titleElement = creator(titleParams);
  const buttonElement = creator(buttonParams);
  const wrapperIconElement = creator(wrapperIcon);

  buttonElement.insertAdjacentElement("beforeend", wrapperIconElement);
  headerElement.insertAdjacentElement("beforeend", buttonElement);
  headerElement.insertAdjacentElement("afterbegin", titleElement);

  buttonElement.addEventListener("click", darkMode);

  return headerElement;
};

const darkMode = () => {
  const body = document.querySelector("body");
  if (body) {
    body.classList.toggle("dark");
  }
};

export default headerCreator;
