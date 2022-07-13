import { Link } from "@remix-run/react";

export default function Index() {
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}>
      <h1 className="text-3xl font-bold underline">
      Hello world!
    </h1>

    <p className="text-red-900 bg-slate-700">Parrafo</p>
      
      <Link to="ejemplo">
        Ir a Ejemplo
      </Link>
    </div>
  );
}
