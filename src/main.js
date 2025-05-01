import addBtnCreator from "./componets/add-btn.js";
import creatorList from "./componets/notes-list.js";
import { dataStructure } from "./core/model.js";
import headerCreator from "./header/header.js";
import "./style.css";

const initial = () => {
  const appContainer = document.querySelector("#app");
  const header = headerCreator();
  appContainer.append(header);

  const addBtn = addBtnCreator();
  appContainer.append(addBtn);

  // appContainer.append(
  creatorList(dataStructure.favorite);
  creatorList(dataStructure.regular);
  // );
};

initial();
