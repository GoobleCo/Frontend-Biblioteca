import Link from "next/link";

const API = "http://api-biblioteca.test/api";

export default async function LibroDetalle({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  let res;
  try {
    res = await fetch(`${API}/libros/${id}`, { cache: "no-store" });
  } catch {
    return <p>No se pudo conectar con la API.</p>;
  }

  if (!res.ok) {
    return (
      <div>
        <p>El libro no existe.</p>
        <Link href="/libros">Volver</Link>
      </div>
    );
  }

  const libro = await res.json();

  return (
    <div>
      <h1>{libro.titulo}</h1>
      <p>Autor: {libro.autor}</p>
      <p>Año: {libro.anio_publicacion ?? "Sin dato"}</p>
      <p>Disponible: {libro.disponible ? "Si" : "No"}</p>
      <Link href="/libros">Volver</Link>
    </div>
  );
}
