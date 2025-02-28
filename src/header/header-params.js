const headerParams = {
  tagName: "header",
  style: [
    "max-w-5xl",
    "border-b-2",
    "border-cyan-600",
    "py-2.5",
    "px-3",
    "m-auto",
    "justify-between",
    "flex",
    "items-center",
  ],
};

const titleParams = {
  tagName: "h1",
  text: "To-Do",
  style: ["text-cyan-600", "font-medium", "text-3xl"],
};

const buttonParams = {
  tagName: "button",
  style: ["w-[40px]", "h-[40px]", "rounded-full", "bg-cyan-600", "relative"],
};

const wrapperIcon = {
  tagName: "span",
  style: [
    "block",
    "w-[30px]",
    "h-[30px]",
    "absolute",
    "top-[50%]",
    "left-[50%]",
    "translate-x-[-50%]",
    "translate-y-[-50%]",
    "bg-center",
    "bg-no-repeat",
    "bg-[url(/sun-icon.svg)]",
  ],
};

export { headerParams, titleParams, buttonParams, wrapperIcon };
