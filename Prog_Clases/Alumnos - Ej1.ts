// Clase Alumno que representa a un estudiante
class Alumno {
    private nombre: string;
    private nota: number;

    constructor(nombre: string, nota: number) {
        this.nombre = nombre;
        this.nota = nota;
    }

    // Método para obtener el nombre del alumno
    public getNombre(): string {
        return this.nombre;
    }

    // Método para obtener la nota del alumno
    public getNota(): number {
        return this.nota;
    }

    // Método para verificar si el alumno está aprobado
    public estaAprobado(): boolean {
        return this.nota > 7;
    }
}

// Clase Profesor que representa a un profesor
class Profesor {
    private nombre: string;
    private alumnos: Alumno[];

    constructor(nombre: string) {
        this.nombre = nombre;
        this.alumnos = [];
    }

    // Método para agregar un alumno al listado del profesor
    public agregarAlumno(alumno: Alumno): void {
        this.alumnos.push(alumno);
    }

    // Método para obtener el listado de alumnos del profesor
    public getAlumnos(): Alumno[] {
        return this.alumnos;
    }

    // Método para obtener el nombre del profesor
    public getNombre(): string {
        return this.nombre;
    }
}

// Clase Escuela que representa a la institución educativa
class Escuela {
    private alumnos: Alumno[];
    private profesores: Profesor[];

    constructor() {
        this.alumnos = [];
        this.profesores = [];
    }

    // Método para matricular un alumno en la escuela
    public matricularAlumno(alumno: Alumno): void {
        this.alumnos.push(alumno);
    }

    // Método para contratar un profesor en la escuela
    public contratarProfesor(profesor: Profesor): void {
        this.profesores.push(profesor);
    }

    // Método para expulsar un alumno de la escuela
    public expulsarAlumno(nombre: string): void {
        this.alumnos = this.alumnos.filter(alumno => alumno.getNombre() !== nombre);
    }

    // Método para despedir un profesor de la escuela
    public despedirProfesor(nombre: string): void {
        this.profesores = this.profesores.filter(profesor => profesor.getNombre() !== nombre);
    }

    // Método para obtener el listado de alumnos de la escuela
    public getAlumnos(): Alumno[] {
        return this.alumnos;
    }

    // Método para obtener el listado de profesores de la escuela
    public getProfesores(): Profesor[] {
        return this.profesores;
    }
}

// Ejemplo de uso del sistema educativo
const escuela = new Escuela();
const profesor1 = new Profesor("Profesor A");
const alumno1 = new Alumno("Alumno 1", 8);
const alumno2 = new Alumno("Alumno 2", 6);

// Matricular alumnos en la escuela
escuela.matricularAlumno(alumno1);
escuela.matricularAlumno(alumno2);

// Contratar profesor en la escuela
escuela.contratarProfesor(profesor1);

// Asignar alumnos al profesor
profesor1.agregarAlumno(alumno1);
profesor1.agregarAlumno(alumno2);

// Mostrar si los alumnos están aprobados
profesor1.getAlumnos().forEach(alumno => {
    console.log(`${alumno.getNombre()} está aprobado: ${alumno.estaAprobado()}`);
});
