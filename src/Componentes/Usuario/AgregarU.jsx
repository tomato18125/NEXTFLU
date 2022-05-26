import React, {useReducer, useState} from 'react'
import { Link } from 'react-router-dom';
import { LogueoContexto } from '../../Contexto/Contexto';
import { tipos } from '../../Tipos/tipos';
// import useFormulario from '../../Customhooks/useFormulario'
// import Formulario from './Formulario';
import styles from './Formulario.module.css'




export const EstadoInicialusuarioReducer = {
  usuarios: [],

};


export const reductor = (estado, action) => {
  switch (action.type) {
    case tipos.AGREGAR_USUARIO:
      return {
        ...estado,
        usuarios: [...estado.usuarios, action.payload],
      };
    case tipos.BORRAR_USUARIO:
       return {
        ...estado,
        usuarios: estado.usuarios.filter((usuario) => usuario.id !== action.payload),
      };
      
    default:
      return ;
  
  }
};

const AgregarU = () => {

  // const [formulario, setFormulario] = useFormulario();
  const [estado, despachar] = useReducer(reductor, EstadoInicialusuarioReducer); 

  const [formulario, setFormulario] = useState({
    id: "",
    name: "",
    email: "",
    direccion: "",
    telefono: "",
    });

  const manejarCambio = (e) => {
    setFormulario({
        ...formulario,
        [e.target.name]: e.target.value,
        });
    return [formulario, manejarCambio];
    };



  const crearUsuario = () => {

    const id = Date.now();
  
    const usuarioNuevo = {
        id: id,
        name: formulario.name,
        email: formulario.email,
        direccion: formulario.direccion,
        telefono: formulario.telefono,

        };
    
    return usuarioNuevo;
      
    };

    const borrarUsuario = (id) => {
      despachar({
        type: tipos.BORRAR_USUARIO,
        payload: id,
      });
    };



  const manejarEnvioFormulario = (e) => {
    e.preventDefault();
    const usuarioNuevo = crearUsuario();

    if (usuarioNuevo.email==="" || usuarioNuevo.name==="") {
      alert("Debes completar todos los campos para crear una cuenta")
     }
     else {
      despachar({
        type: tipos.AGREGAR_USUARIO,
        payload: usuarioNuevo,
        });

     }


    
        
        
        

    };



return (
<>

  <LogueoContexto.Provider
          value={{
            estado,
            despachar,
          }}
        ></LogueoContexto.Provider>


<div className={styles.contenedor}>
  <h1 className={styles.titulo}>Crear cuenta</h1>

  <form action="">
        <input type="text" name='name' value={formulario.name} onChange={manejarCambio} placeholder="Nombre"/>
        <input type="email" name='email' value={formulario.email} onChange={manejarCambio} placeholder="Correo"/>
        <input type="text" name='direccion' value={formulario.direccion} onChange={manejarCambio} placeholder="Domicilio"/>
        <input type="number" name='telefono' value={formulario.telefono} onChange={manejarCambio} placeholder="Número de teléfono"/>
        <input className={styles.crear} type="submit" value="Crear cuenta" onClick={manejarEnvioFormulario} />
    </form>
    <Link to='/Principal' className={styles.volverInicio}>Volver a iniciar sesión</Link>
<hr />
    <div className={styles.usuariosVigentesContenedor}>
        <h3>Usuarios vigentes</h3>
        <ul className={styles.usuariosVigentes}>
          {estado.usuarios.map((usuario, i) => (
            <li key={i}>
              {usuario.name} <br/>
              <button className={styles.boton3_borrar} onClick={() => borrarUsuario(usuario.id)}>Eliminar</button>
            </li>
          ))} 
        </ul>
    </div>
</div>

</>
  
)
};

export default AgregarU;