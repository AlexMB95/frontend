import React, { Component } from 'react'
import { Link } from "react-router-dom";



class SignUp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user_name:"",
            email:"",
            pass:"",
            date_birth:"",
            address:""
        }
    }


    render() {
        
        return (
            <div className="card">
                <div className="card-header">
                    <h3>Registrar usuario</h3>
                </div>
                <div className="card-body">
                    <form>
                        <div className="form-group">
                            <label htmlFor="">Nombre de usuario</label>
                            <input type="text" name="user_name" id="nombre" className="form-control" placeholder="Nombre de usuario" aria-describedby="helpId" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="">Correo de usuario</label>
                            <input type="email" name="email"  id="correo" className="form-control" placeholder="example@domain.com" aria-describedby="helpId" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="">Contraseña</label>
                            <input type="password" name="pass"  id="contraseña" className="form-control" placeholder="*****" aria-describedby="helpId" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="">Fecha de nacimiento</label>
                            <input type="date" name="date_birth"  id="birth" className="form-control" placeholder="dd/mm/aaaa" aria-describedby="helpId" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="">Dirección</label>
                            <input type="text" name="address"  id="domicilio" className="form-control" placeholder="c example #xy col example " aria-describedby="helpId" />
                        </div>
                        <br></br>
                        <div className="btn-group" role="group" aria-label="">
                            <button type="submit" className="btn btn-success">Registrar usuario</button>
                            <Link to="/" className="btn btn-primary">Cancelar</Link>
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
export default SignUp;