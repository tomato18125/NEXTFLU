import React, { useContext } from 'react'
import styles from './Login.module.css'
import { useState } from 'react'
import { LogueoContexto } from '../Contexto/Contexto'
import { tipos } from '../Tipos/tipos'
import { Link, useNavigate } from 'react-router-dom'





const Login = () =>  {
  const navegarPrincipal = useNavigate();
  const {despacho1} = useContext(LogueoContexto);

 

  const manejarlogin = (e) => {
    e.preventDefault();
   
    if (formulario.email === "" || formulario.pass === "")
      alert("Usuario o contraseña incorrectos");
    else {

   

    despacho1({
        tipos: tipos.LOGIN,
        payload: {name: formulario.email,
  
        },
        
      }
      );
    navegarPrincipal("/Principal", {replace: true,});  
  };
    };




  const [formulario, setFormulario] = useState({
    email: "",
    pass: ""
  });
 

    const manejarCambio = (e) => {

      setFormulario({
        ...formulario,
        [e.target.name]: e.target.value,

      })

 
    }



const formularioDatos = new FormData();
  formularioDatos.append("email", formulario.email);
  formularioDatos.append("pass", formulario.pass);


// const crearCuenta = (e) => {
//   e.preventDefault();

//   // Navigate to='/Registro';
// }
  




  return (
    <>
    <div className={styles.contenedor}>
  <h1 className={styles.titulo}>Iniciar sesión</h1>
    <div className={styles.login} >
     <form action="" className={styles.formulario}>
      <input className={styles.boton} type="text" placeholder='Email' name='email' value={
        formulario.email
      }
      onChange={ manejarCambio }
      />

    <input className={styles.boton} type="text" placeholder='Nombre' name='pass' value={
        formulario.pass
      }
      onChange={ manejarCambio }
      />

      <button className={styles.boton} type='submit' onClick={manejarlogin}> Cliquea aquí para entrar</button>

      <Link to='/Registro' className={styles.boton2} type='text'> o Regístrate aquí</Link>


    </form>

    </div>

    </div>


      


    {/* <div className={styles.boton}>
      <Link to ="/Principal"><h1 className={styles.boton}>Cliquea aquí para entrar</h1></Link>
    </div> */}
    </>
  )
}

export default Login