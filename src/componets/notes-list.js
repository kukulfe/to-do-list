import creator from "../core/creator.js";
import {
  btnDeleteParams,
  btnEditParams,
  btnStatusParams,
  dateParams,
  listParams,
  noteItemParams,
  noteTopParams,
  textParams,
  titleParams,
  wrapperDateAndButtonsParams,
  wrapperButtonsParams,
} from "./notes-list-params.js";

const creatorList = (arrayNotes) => {
  let list = document.querySelector("#list");

  if (!list) {
    list = creator(listParams);
    const appContainer = document.querySelector("#app");
    appContainer.append(list);
  }

  arrayNotes.forEach((element) => {
    const listItem = creator(noteItemParams);
    const noteTop = creator(noteTopParams);
    listItem.append(noteTop);

    titleParams.text = element.title;
    const title = creator(titleParams);
    noteTop.append(title);

    const wrapperDateAndButtons = creator(wrapperDateAndButtonsParams);

    const date = creator(dateParams);
    date.innerText = "Created 08.06.25 at 18:46";
    const wrapperButtons = creator(wrapperButtonsParams);
    const btnStatus = creator(btnStatusParams);
    const btnEdit = creator(btnEditParams);
    const btnDelete = creator(btnDeleteParams);
    noteTop.append(wrapperDateAndButtons);
    wrapperDateAndButtons.append(date);
    wrapperDateAndButtons.append(wrapperButtons);
    wrapperButtons.append(btnStatus);
    wrapperButtons.append(btnEdit);
    wrapperButtons.append(btnDelete);
    listItem.append(noteTop);

    textParams.text = element.textarea;
    const text = creator(textParams);
    listItem.append(text);
    list.append(listItem);
  });
};

export default creatorList;
