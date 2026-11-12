import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1>Biblioteca</h1>
      <Link href="/libros">Ver libros</Link>
    </div>
  );
}
