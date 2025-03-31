import creator from "../core/creator.js";
import { fadeBlockParams, formParams } from "./modal-params.js";

const createModal = () => {
  // создать фейд блок и вставить на страницу
  const appContainer = document.querySelector("#app");
  const formModal = creator(formParams);
  const fadeBlock = creator(fadeBlockParams);
  appContainer.append(fadeBlock);
  appContainer.append(formModal);
};

export default createModal;
