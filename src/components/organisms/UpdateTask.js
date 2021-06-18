
import React, { Component } from 'react'
import { Link } from "react-router-dom";

class UpdateTask extends Component {
    constructor(props){
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            <div className="card">
                <div className="card-header">
                    <h3>Actualizar tarea</h3>
                </div>
                <div className="card-body">
                    <form>
                        <div className="form-group">
                            <label htmlFor="">Título</label>
                            <input type="text" name="title" id="title" className="form-control" placeholder="Título de la tarea" aria-describedby="helpId" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="">Descripción</label>
                            <input type="text" name="descript" id="descript" className="form-control" placeholder="Descripción" aria-describedby="helpId" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="">Inicio de tarea</label>
                            <input type="date" name="st_date"  id="st_date" className="form-control" placeholder="dd/mm/aaaa" aria-describedby="helpId" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="">Fin de tarea</label>
                            <input type="date" name="end_date"  id="end_date" className="form-control" placeholder="dd/mm/aaaa" aria-describedby="helpId" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="">Estado</label>
                            <input type="text" name="estado" id="estado" className="form-control" placeholder="Complete/Incomplete" aria-describedby="helpId" />
                        </div>
                        <br></br>
                        <div className="btn-group" role="group" aria-label="">
                            <button type="submit" className="btn btn-success">Registrar tarea</button>
                            <Link to="/all-task" className="btn btn-primary">Cancelar</Link>
                        </div>
                    </form>
                </div>
                <div className="card-footer text-muted">
                    Administrador de tareas |
                    Desarrollado por J. Green & A. Martínez
                </div>
            </div>
        )
    }
}
export default UpdateTask;