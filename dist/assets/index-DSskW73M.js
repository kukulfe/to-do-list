(function () {
  const r = document.createElement("link").relList;
  if (r && r.supports && r.supports("modulepreload")) return;
  for (const t of document.querySelectorAll('link[rel="modulepreload"]')) s(t);
  new MutationObserver((t) => {
    for (const n of t)
      if (n.type === "childList")
        for (const a of n.addedNodes)
          a.tagName === "LINK" && a.rel === "modulepreload" && s(a);
  }).observe(document, { childList: !0, subtree: !0 });
  function o(t) {
    const n = {};
    return (
      t.integrity && (n.integrity = t.integrity),
      t.referrerPolicy && (n.referrerPolicy = t.referrerPolicy),
      t.crossOrigin === "use-credentials"
        ? (n.credentials = "include")
        : t.crossOrigin === "anonymous"
          ? (n.credentials = "omit")
          : (n.credentials = "same-origin"),
      n
    );
  }
  function s(t) {
    if (t.ep) return;
    t.ep = !0;
    const n = o(t);
    fetch(t.href, n);
  }
})();
const c = (e) => {
    const r = document.createElement(e.tagName);
    r.classList.add(...e.style), (r.textContent = e.text);
    for (const o in e.attributes) r.setAttribute(o, e.attributes[o]);
    return r;
  },
  i = {
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
  },
  l = {
    tagName: "h1",
    text: "To-Do",
    style: ["text-cyan-600", "font-medium", "text-3xl", "dark:text-white"],
  },
  d = {
    tagName: "button",
    style: ["w-[40px]", "h-[40px]", "rounded-full", "bg-cyan-600", "relative"],
  },
  u = {
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
  },
  f = () => {
    const e = c(i),
      r = c(l),
      o = c(d),
      s = c(u);
    return (
      o.insertAdjacentElement("beforeend", s),
      e.insertAdjacentElement("beforeend", o),
      e.insertAdjacentElement("afterbegin", r),
      o.addEventListener("click", m),
      e
    );
  },
  m = () => {
    const e = document.querySelector("body");
    e && e.classList.toggle("dark");
  },
  p = () => {
    const e = document.querySelector("#app"),
      r = f();
    e.append(r);
  };
p();
