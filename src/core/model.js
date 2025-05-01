const dataToJSON = (data) => {
  return JSON.stringify(data);
};

const parseJSON = (dataJSON) => {
  return JSON.parse(dataJSON);
};

const setDatatoStorage = (data) => {
  localStorage.setItem("notes", dataToJSON(data));
};

const getDataFromStorage = () => {
  return parseJSON(localStorage.getItem("notes"));
};

const createStructure = () => {
  const structure = {
    favorite: [],
    regular: [],
  };

  const dataFromStorage = getDataFromStorage();

  if (!dataFromStorage) {
    setDatatoStorage(structure);
    return;
  }
  return dataFromStorage;
};

const handlerData = (data) => {
  const note = {
    title: data.get("title"),
    textarea: data.get("textarea"),
    checkbox: data.get("checkbox"),
  };

  if (note.checkbox) {
    dataStructure.favorite.push(note);
  } else {
    dataStructure.regular.push(note);
  }

  setDatatoStorage(dataStructure);
};

const dataStructure = createStructure();

export default handlerData;
export { dataStructure };
