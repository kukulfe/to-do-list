import creator from "../core/creator";
import { btnImageParams, btnParans, btnTitleParams } from "./add-btn-params.js";

const addBtnCreator = () => {
  // передать параметры в креатор
  const btnTitle = creator(btnTitleParams);
  const btnImage = creator(btnImageParams);
  const addButton = creator(btnParans);

  addButton.insertAdjacentElement("afterbegin", btnTitle);
  addButton.insertAdjacentElement("beforeend", btnImage);

  return addButton;
};

export default addBtnCreator;
