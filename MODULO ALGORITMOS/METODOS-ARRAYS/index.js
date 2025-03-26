// 1. Todas las personas completaron sus tareas?
// 2. Alguna persona no completo su tareas?
// 3. cuantas tareas en total se completaron entre todos?
// 4. Hay alguna tarea especifica incluida en las tareas de alguien.

const personas  = [
    {
        nombre: 'Ana',
        tareas: ['limpiar', 'cocinar', 'lavar'],
        completadas: ['limpiar', 'lavar']
    },
    {
        nombre: 'Luis',
        tareas: ['limpiar', 'cocinar'],
        completadas: ['limpiar', 'cocinar']
    },
    {
        nombre: 'Carlos',
        tareas: ['limpiar', 'cocinar'],
        completadas: ['limpiar']
    },
]

// 1. Todas las personas completaron sus tareas?

const todosCumplieron = personas.every(persona => persona.tareas.every(tarea => persona.completadas.includes(tarea)))

console.log('Todos cumplieron sus tareas?', todosCumplieron);

// 2. Alguna persona NO completo su tareas?

const algunoCumplio = personas.some(persona => persona.tareas.some(tarea => !persona.completadas.includes(tarea)))

console.log('¿Alguna persona NO cumplió con sus tareas?:', algunoCumplio);

// 3. cuantas tareas en total se completaron entre todos?

const totalTareasCompletadas = personas.reduce((total, persona) => {

    return total + persona.completadas.length;

}, 0)

console.log('Total de tareas completadas:', totalTareasCompletadas);

// 4. Hay alguna tarea especifica incluida en las tareas de alguien.

const alguienTeniaQueLavar = personas.some(persona => persona.tareas.includes('lavar'))

console.log('Alguien tenia que lavar?', alguienTeniaQueLavar);