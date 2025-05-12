const listParams = {
  tagName: "ul",
  style: ["flex", "flex-col", "gap-4", "max-w-3xl", "m-auto", "w-[96%]"],
  attributes: {
    id: "list",
  },
};

const noteItemParams = {
  tagName: "li",
  style: [
    "border-solid",
    "border-cyan-600",
    "dark:border-gray-400",
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
  style: [
    "text-2xl",
    "text-cyan-600",
    "dark:text-cyan-400",
    "max-w-[400px]",
    "truncate",
  ],
};

const wrapperDateAndButtonsParams = {
  tagName: "div",
  style: ["flex", "justify-between", "items-center", "gap-2"],
};

const dateParams = {
  tagName: "p",
  style: ["text-sm", "text-gray-600", "dark:text-gray-500"],
};
const wrapperButtonsParams = {
  tagName: "div",
  style: [],
};

const btnStatusParams = {
  tagName: "button",
  style: [
    "bg-[url(/star-btn-black.svg)]",
    "dark:bg-[url(/star-btn-black-dark.svg)]",
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
    "dark:bg-[url(/edit-btn-dark.svg)]",
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
    "dark:bg-[url(/trash-btn-dark.svg)]",
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
  style: ["dark:text-white", "max-w-[700px]", "truncate"],
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
