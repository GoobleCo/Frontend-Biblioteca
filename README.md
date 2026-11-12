# Frontend Biblioteca

Frontend en Next.js que consume la API de Biblioteca hecha en Laravel.

## Como correrlo

```bash
npm install
npm run dev
```

Despues entrar a http://localhost:3000/libros

La API tiene que estar corriendo en http://api-biblioteca.test (Laragon). Si usas `php artisan serve` cambiar la URL en los archivos de `app/libros` por http://127.0.0.1:8000.

## Paginas

- `/libros` lista todos los libros (titulo y autor). Si la API no responde muestra un mensaje de error.
- `/libros/[id]` muestra el detalle de un libro. Si no existe muestra "El libro no existe".

## Desafio

Hice la opcion C: los libros con `disponible: false` muestran "(No disponible)" al lado del titulo.
