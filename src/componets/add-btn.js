import creator from "../core/creator.js";
import { btnImageParams, btnParans, btnTitleParams } from "./add-btn-params.js";
import createModal from "./modal.js";

const addBtnCreator = () => {
  const btnTitle = creator(btnTitleParams);
  const btnImage = creator(btnImageParams);
  const addButton = creator(btnParans);

  addButton.insertAdjacentElement("afterbegin", btnTitle);
  addButton.insertAdjacentElement("beforeend", btnImage);

  addButton.addEventListener("click", createModal);

  return addButton;
};

export default addBtnCreator;
