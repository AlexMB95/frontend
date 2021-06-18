import React, { Component } from 'react'
import { Link } from "react-router-dom";

class CompleteTask extends Component {
    render() {
        return (
            <div class="card">
                <div class="card-header">
                    <h3>Lista de tareas completadas</h3>
                </div>
                <div class="card-body">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Título</th>
                                <th>Descripción</th>
                                <th>Fecha de inicio</th>
                                <th>Fecha límite</th>
                                <th>Estado</th>
                                <th>Acciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td>
                                    <div class="btn-group" role="group" aria-label="">
                                        <button type="button" class="btn btn-warning">Editar tarea</button>
                                        <button type="button" class="btn btn-danger">Eliminar</button>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="card-footer text-muted">
                    Administrador de tareas |
                    Desarrollado por J. Green & A. Martínez
                </div>
            </div>


        )
    }
}
export default CompleteTask;