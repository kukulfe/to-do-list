import creator from "../core/creator.js";
import { headerParams } from "./header-params.js";

const headerCreator = () => {
  const headerElement = creator(headerParams);
  return headerElement;
};

export default headerCreator;
