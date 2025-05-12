const btnParans = {
  tagName: "button",
  style: ["flex", "items-center", "gap-4", "m-auto", "cursor-pointer", "mb-8"],
};

const btnTitleParams = {
  tagName: "span",
  text: "Add note",
  style: [
    "text-2xl",
    "text-cyan-600",
    "font-medium",
    "dark:text-cyan-400",
    "duration-200",
  ],
};

const btnImageParams = {
  tagName: "span",
  style: [
    "bg-[url(/add-btn-icon.svg)]",
    "dark:bg-[url(/add-btn-icon-dark.svg)]",
    "block",
    "w-[40px]",
    "h-[40px]",
    "bg-center",
    "bg-no-repeat",
    "bg-cover",
    "duration-200",
  ],
};
export { btnParans, btnTitleParams, btnImageParams };
