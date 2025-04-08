import creator from "../core/creator.js";
import {
  checkboxParams,
  fadeBlockParams,
  fakeCheckboxParams,
  formParams,
  inputParams,
  labelParams,
  textareaParams,
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
  appContainer.append(fadeBlock);
  appContainer.append(formModal);
};

export default createModal;
