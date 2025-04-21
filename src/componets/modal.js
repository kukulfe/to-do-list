import creator from "../core/creator.js";
import handlerData from "../core/model.js";
import {
  addBtnParams,
  cancelBtnParams,
  checkboxParams,
  fadeBlockParams,
  fakeCheckboxParams,
  formParams,
  inputParams,
  labelParams,
  textareaParams,
  wrapperButtonsParams,
  wrapperHeaderParams,
} from "./modal-params.js";

const createModal = () => {
  const appContainer = document.querySelector("#app");
  const fadeBlock = creator(fadeBlockParams);

  const formModal = creator(formParams);
  const wrapperHeader = creator(wrapperHeaderParams);
  formModal.append(wrapperHeader);

  const input = creator(inputParams);
  wrapperHeader.append(input);

  const label = creator(labelParams);
  const checkbox = creator(checkboxParams);
  const fakeCheckbox = creator(fakeCheckboxParams);
  label.append(checkbox, fakeCheckbox);
  wrapperHeader.append(label);

  const texarea = creator(textareaParams);
  formModal.append(texarea);

  const wrapperButtons = creator(wrapperButtonsParams);
  formModal.append(wrapperButtons);
  const addBtn = creator(addBtnParams);
  const cancelBtn = creator(cancelBtnParams);
  wrapperButtons.append(addBtn, cancelBtn);

  appContainer.append(fadeBlock);
  appContainer.append(formModal);

  formModal.addEventListener("submit", (event) => formHandler(event));
};

const formHandler = (event) => {
  event.preventDefault();
  const dataFromForm = new FormData(event.target);
  handlerData(dataFromForm);
};

export default createModal;
