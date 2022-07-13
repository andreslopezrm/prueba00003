import { Star } from "@prisma/client";
import { json, LoaderFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { db } from "~/utils/db.server";


export const loader: LoaderFunction = async () => {
    const data = await db.star.findMany();
    return json(data);
}

export default function Index() {

    const data = useLoaderData<Star[]>();

    return (
      <div>
        <h2>Ejemplo</h2>
        <ul>
            {data.map((start, index) => <li key={index}>{start.name}</li>)}
        </ul>
      </div>
    );
  }
  