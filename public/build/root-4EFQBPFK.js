import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  React,
  Scripts,
  ScrollRestoration,
  init_react
} from "/build/_shared/chunk-AQ5TLZ7M.js";

// browser-route-module:/Users/andres/Documents/Proyectos/questions3/app/root.tsx?browser
init_react();

// app/root.tsx
init_react();

// app/styles/app.css
var app_default = "/build/_assets/app-PDWS2DZB.css";

// app/root.tsx
var meta = () => ({
  charset: "utf-8",
  title: "New Remix App",
  viewport: "width=device-width,initial-scale=1"
});
function links() {
  return [{ rel: "stylesheet", href: app_default }];
}
function App() {
  return /* @__PURE__ */ React.createElement("html", {
    lang: "en"
  }, /* @__PURE__ */ React.createElement("head", null, /* @__PURE__ */ React.createElement(Meta, null), /* @__PURE__ */ React.createElement(Links, null)), /* @__PURE__ */ React.createElement("body", null, /* @__PURE__ */ React.createElement(Outlet, null), /* @__PURE__ */ React.createElement(ScrollRestoration, null), /* @__PURE__ */ React.createElement(Scripts, null), /* @__PURE__ */ React.createElement(LiveReload, null)));
}
export {
  App as default,
  links,
  meta
};
//# sourceMappingURL=/build/root-4EFQBPFK.js.map
