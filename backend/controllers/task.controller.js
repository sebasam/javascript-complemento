const Task = require('../models/Task');

const crearTarea = async(request, response) => {
    try {
        const task = new Task({
            titulo: request.body.titulo,
            usuario: request.user.id
        });

        await task.save(task);
        response.json(task)
    } catch(error) {

        return response.status(500).json({ error: `Error al crear tarea ${ error.message }` });
    }
};

const traerTareas = async(request, response) => {
    try {
        const tasks = await Task.find({
            usuario: request.user.id
        });

        response.json(tasks);
    } catch(error) {

        return response.status(500).json({ error: `Error al traer tareas ${ error.message }` });
    }
};

const actualizarTarea = async(request, response) => {
    try {
        const task = await Task.findByIdAndUpdate(
            request.params.id,
            request.body,
            { new: true }
        );

        response.json(task);
    } catch(error) {

        return response.status(500).json({ error: `Error al actualizar tarea ${ error.message }` });
    }
};

const eliminarTarea = async(request, response) => {
    try {
        const task = await Task.findByIdAndDelete(request.params.id);

        response.json('El elemento ha sido eliminado');
    } catch(error) {

        return response.status(500).json({ error: `Error al eliminar tarea ${ error.message }` });
    }
};

module.exports = {
    crearTarea,
    traerTareas,
    actualizarTarea,
    eliminarTarea
}