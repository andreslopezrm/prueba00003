import {
  React,
  __commonJS,
  __toESM,
  init_react,
  useLoaderData
} from "/build/_shared/chunk-AQ5TLZ7M.js";

// empty-module:~/utils/db.server
var require_db = __commonJS({
  "empty-module:~/utils/db.server"(exports, module) {
    init_react();
    module.exports = {};
  }
});

// browser-route-module:/Users/andres/Documents/Proyectos/questions3/app/routes/ejemplo.tsx?browser
init_react();

// app/routes/ejemplo.tsx
init_react();
var import_db = __toESM(require_db());
function Index() {
  const data = useLoaderData();
  return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("h2", null, "Ejemplo"), /* @__PURE__ */ React.createElement("ul", null, data.map((start, index) => /* @__PURE__ */ React.createElement("li", {
    key: index
  }, start.name))));
}
export {
  Index as default
};
//# sourceMappingURL=/build/routes/ejemplo-C43UTE5E.js.map
