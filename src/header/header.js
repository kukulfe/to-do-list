import creator from "../core/creator.js";
import { headerParams, titleParams } from "./header-params.js";

const headerCreator = () => {
  const headerElement = creator(headerParams);

  const titleElement = creator(titleParams);
  headerElement.insertAdjacentElement("afterbegin", titleElement);

  return headerElement;
};

export default headerCreator;
