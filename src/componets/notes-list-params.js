const listParams = {
  tagName: "ul",
  style: ["flex", "flex-col", "gap-4"],
  attributes: {
    id: "list",
  },
};

const noteItemParams = {
  tagName: "li",
  style: [
    "border-solid",
    "border-cyan-600",
    "rounded-xl",
    "border-2",
    "py-2",
    "px-4",
  ],
};

const noteTopParams = {
  tagName: "div",
  style: ["flex", "justify-between", "w-full"],
};

const titleParams = {
  tagName: "h6",
  style: [],
};

const wrapperDateAndButtonsParams = {
  tagName: "div",
  style: ["flex", "justify-between", "items-center", "gap-2"],
};

const dateParams = {
  tagName: "p",
  style: ["text-sm", "text-gray-600"],
};
const wrapperButtonsParams = {
  tagName: "div",
  style: [],
};

const btnStatusParams = {
  tagName: "button",
  style: [
    "bg-[url(/star-btn-black.svg)]",
    "bg-center",
    "bg-no-repeat",
    "bg-cover",
    "duration-200",
    "w-6",
    "h-6",
  ],
};

const btnEditParams = {
  tagName: "button",
  style: [
    "bg-[url(/edit-btn.svg)]",
    "bg-center",
    "bg-no-repeat",
    "bg-cover",
    "duration-200",
    "w-6",
    "h-6",
  ],
};

const btnDeleteParams = {
  tagName: "button",
  style: [
    "bg-[url(/trash-btn.svg)]",
    "bg-center",
    "bg-no-repeat",
    "bg-cover",
    "duration-200",
    "w-6",
    "h-6",
  ],
};

const textParams = {
  tagName: "p",
  style: [],
};
export {
  listParams,
  noteItemParams,
  noteTopParams,
  titleParams,
  wrapperDateAndButtonsParams,
  dateParams,
  wrapperButtonsParams,
  btnStatusParams,
  btnEditParams,
  btnDeleteParams,
  textParams,
};
