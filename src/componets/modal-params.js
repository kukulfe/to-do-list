const formParams = {
  tagName: "form",
  style: [
    "bg-white",
    "max-w-4xl",
    "px-[30px]",
    "py-[36px]",
    "fixed",
    "top-[50%]",
    "left-[50%]",
    "translate-x-[-50%]",
    "translate-y-[-50%]",
    "w-full",
  ],
};

const fadeBlockParams = {
  tagName: "div",
  style: [
    "fixed",
    "top-[50%]",
    "left-[50%]",
    "translate-x-[-50%]",
    "translate-y-[-50%]",
    "w-full",
    "bg-cyan-950/85",
    "h-screen",
    "backdrop-blur-[2px]",
  ],
};

const wrapperHeaderParams = {
  tagName: "div",
  style: [
    "flex",
    "justify-between",
    "items-center",
    "border-b-2",
    "border-cyan-600",
    "max-w-[340px]",
    "mb-4",
    "py-1",
  ],
};

const inputParams = {
  tagName: "input",
  style: ["max-w-[300px]", "w-full", "outline-none"],
  attributes: {
    type: "text",
    placeholder: "Title",
  },
};

const labelParams = {
  tagName: "label",
  style: [],
};

const checkboxParams = {
  tagName: "input",
  style: ["real-checkbox", "w-0", "h-0", "absolute", "z-[-1]"],
  attributes: {
    type: "checkbox",
  },
};

const fakeCheckboxParams = {
  tagName: "span",
  style: ["block", "w-5", "h-5", "fake-checkbox", "cursor-pointer"],
};

const textareaParams = {
  tagName: "textarea",
  style: ["outline-none", "w-full", "max-h-[350px]", "min-h-[200px]", "mb-4"],
  attributes: {
    placeholder: "Text",
  },
};

const wrapperButtonsParams = {
  tagName: "div",
  style: ["flex", "gap-2", "justify-end"],
};

const addBtnParams = {
  tagName: "button",
  style: [
    "bg-cyan-600",
    "text-xl",
    "font-medium",
    "py-1",
    "px-4",
    "font-medium",
    "rounded-xl",
    "text-white",
    "min-w-[94px]",
    "cursor-pointer",
  ],
  text: "Add",
};

const cancelBtnParams = {
  tagName: "button",
  style: [
    "bg-red-800",
    "text-xl",
    "font-medium",
    "py-1",
    "px-4",
    "font-medium",
    "rounded-xl",
    "text-white",
    "min-w-[94px]",
    "cursor-pointer",
  ],
  text: "Cancel",
};

export {
  formParams,
  fadeBlockParams,
  wrapperHeaderParams,
  inputParams,
  labelParams,
  checkboxParams,
  fakeCheckboxParams,
  textareaParams,
  wrapperButtonsParams,
  addBtnParams,
  cancelBtnParams,
};
