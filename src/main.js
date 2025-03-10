import addBtnCreator from "./componets/add-btn.js";
import headerCreator from "./header/header.js";
import "./style.css";

const initial = () => {
  const appContainer = document.querySelector("#app");
  const header = headerCreator();
  appContainer.append(header);

  const addBtn = addBtnCreator();
  appContainer.append(addBtn);
};

initial();
