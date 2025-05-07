// Libros en formato JSON
let biblioteca = {
    "libros": [
        { "titulo": "Cien años de soledad", "autor": "Gabriel García Márquez", "genero": "Realismo mágico", "disponible": true },
        { "titulo": "1984", "autor": "George Orwell", "genero": "Distopía", "disponible": true },
        { "titulo": "Super natural", "autor": "Joe Dispenza", "genero": "Crecimiento personal", "disponible": true }
    ]
};

// Lectura de datos (JSON)
function leerDatos(callback) {
    setTimeout(() => {
        callback(biblioteca);
    }, 1000);
}

// Escritura de datos (JSON)
function escribirDatos(nuevosDatos, callback) {
    setTimeout(() => {
        biblioteca = nuevosDatos;
        callback();
    }, 1000);
}

// Mostrar libros en consola
function mostrarLibros() {
    leerDatos((datos) => {
        console.log("Inventario de libros:");
        datos.libros.forEach((libro, index) => {
            console.log(`${index + 1}. ${libro.titulo} - ${libro.autor} (${libro.disponible ? 'Disponible' : 'Prestado'})`);
        });
    });
}

// Agregar libros
function agregarLibro(titulo, autor, genero, disponible) {
    const nuevoLibro = { titulo, autor, genero, disponible };
    leerDatos((datos) => {
        datos.libros.push(nuevoLibro);
        escribirDatos(datos, () => {
            console.log(`Libro "${titulo}" agregado con éxito.`);
        });
    });
}

// Disponibilidad de libros
function actualizarDisponibilidad(titulo, nuevoEstado) {
    leerDatos((datos) => {
        const libro = datos.libros.find(libro => libro.titulo === titulo);
        if (libro) {
            libro.disponible = nuevoEstado;
            escribirDatos(datos, () => {
                console.log(`La disponibilidad del libro "${titulo}" ha sido actualizada a "${nuevoEstado ? 'Disponible' : 'Prestado'}".`);
            });
        } else {
            console.log(`El libro "${titulo}" no se encuentra en el inventario.`);
        }
    });
}

mostrarLibros();
setTimeout(() => agregarLibro("Deja de ser tú", "El placebo eres tú", "Los chamanes de México", true), 2000);
setTimeout(() => actualizarDisponibilidad("1984", false), 4000);
