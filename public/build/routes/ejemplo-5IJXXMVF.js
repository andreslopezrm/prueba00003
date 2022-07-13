import {
  React,
  init_react,
  useLoaderData
} from "/build/_shared/chunk-AQ5TLZ7M.js";

// browser-route-module:/Users/andres/Documents/Proyectos/questions3/app/routes/ejemplo.tsx?browser
init_react();

// app/routes/ejemplo.tsx
init_react();
function Index() {
  const data = useLoaderData();
  return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("h2", null, "Ejemplo"), /* @__PURE__ */ React.createElement("ul", null, data.map((start, index) => /* @__PURE__ */ React.createElement("li", {
    key: index
  }, start.name))));
}
export {
  Index as default
};
//# sourceMappingURL=/build/routes/ejemplo-5IJXXMVF.js.map
