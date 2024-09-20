// Clase Alumno
class Alumno {
    constructor(nombre, nota) {
        this.nombre = nombre;
        let _nota = nota; // Encapsulamiento de la nota

        // Método para obtener la nota
        this.getNota = function() {
            return _nota;
        };

        // Método para establecer una nueva nota
        this.setNota = function(nuevaNota) {
            _nota = nuevaNota;
        };

        // Método para verificar si el alumno está aprobado
        this.estaAprobado = function() {
            return _nota > 7;
        };
    }
}

// Clase Profesor
class Profesor {
    constructor(nombre) {
        this.nombre = nombre;
        this.alumnos = []; // Lista de alumnos
    }

    // Método para agregar un alumno a la lista
    agregarAlumno(alumno) {
        this.alumnos.push(alumno);
    }

    // Método para eliminar un alumno de la lista por nombre
    eliminarAlumno(nombreAlumno) {
        this.alumnos = this.alumnos.filter(alumno => alumno.nombre !== nombreAlumno);
    }

    // Método para listar los nombres de los alumnos
    listarAlumnos() {
        return this.alumnos.map(alumno => alumno.nombre);
    }
}

// Clase Escuela
class Escuela {
    constructor(nombre) {
        this.nombre = nombre;
        this.alumnos = [];
        this.profesores = [];
    }

    // Método para matricular un alumno en la escuela
    matricularAlumno(alumno) {
        this.alumnos.push(alumno);
    }

    // Método para contratar un profesor en la escuela
    contratarProfesor(profesor) {
        this.profesores.push(profesor);
    }

    // Método para expulsar un alumno de la escuela por nombre
    expulsarAlumno(nombreAlumno) {
        this.alumnos = this.alumnos.filter(alumno => alumno.nombre !== nombreAlumno);
    }

    // Método para despedir un profesor de la escuela por nombre
    despedirProfesor(nombreProfesor) {
        this.profesores = this.profesores.filter(profesor => profesor.nombre !== nombreProfesor);
    }

    // Método para listar los nombres de los alumnos
    listarAlumnos() {
        return this.alumnos.map(alumno => alumno.nombre);
    }

    // Método para listar los nombres de los profesores
    listarProfesores() {
        return this.profesores.map(profesor => profesor.nombre);
    }
}

// Ejemplo de uso
// const escuela = new Escuela('Escuela Primaria');
// const profesor1 = new Profesor('Sr. Pérez');
// const alumno1 = new Alumno('Juan', 8);
// const alumno2 = new Alumno('María', 6);

// Contratar un profesor y matricular alumnos en la escuela
// escuela.contratarProfesor(profesor1);
// escuela.matricularAlumno(alumno1);
// escuela.matricularAlumno(alumno2);

// Asignar alumnos al profesor
// profesor1.agregarAlumno(alumno1);
// profesor1.agregarAlumno(alumno2);

// Listar alumnos del profesor y verificar si están aprobados
// console.log(profesor1.listarAlumnos()); // ['Juan', 'María']
// console.log(alumno1.estaAprobado()); // true
// console.log(alumno2.estaAprobado()); // false

// Expulsar un alumno de la escuela y listar los alumnos restantes
// escuela.expulsarAlumno('María');
// console.log(escuela.listarAlumnos()); // ['Juan']