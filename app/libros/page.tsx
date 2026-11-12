import Link from "next/link";

const API = "http://api-biblioteca.test/api";

type Libro = {
  id: number;
  titulo: string;
  autor: string;
  anio_publicacion: number | null;
  disponible: boolean;
};

export default async function LibrosPage() {
  let libros: Libro[] = [];

  try {
    const res = await fetch(`${API}/libros`, { cache: "no-store" });
    if (!res.ok) throw new Error("error");
    libros = await res.json();
  } catch {
    return <p>No se pudieron cargar los libros. Intentá nuevamente más tarde.</p>;
  }

  return (
    <div>
      <h1>Libros</h1>
      <ul>
        {libros.map((libro) => (
          <li key={libro.id}>
            <Link href={`/libros/${libro.id}`}>{libro.titulo}</Link> - {libro.autor}
            {!libro.disponible && " (No disponible)"}
          </li>
        ))}
      </ul>
    </div>
  );
}
