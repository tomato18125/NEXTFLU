import React from 'react'
import useFormulario from '../../Customhooks/useFormulario'


function Formulario() {

    const [formulario, manejarCambio] = useFormulario();

    const crearUsuario = () => {

      const id = Date.now();
    
      const usuarioNuevo = {
      id: id,
      name: formulario.name,
      email: formulario.email,
      direccion: formulario.direccion,
      telefono: formulario.telefono,
    
    };
    // manejarCambio(usuarioNuevo);

    
    return usuarioNuevo;
    
    };

    const manejarEnvioFormulario = (e) => {
      e.preventDefault();
      const usuarioNuevo = crearUsuario();
      
      return usuarioNuevo;

    };

  return (
    <>
    
    <form action="">
        <input type="text" name='name' value={formulario.name} onChange={manejarCambio} placeholder="Nombre"/>
        <input type="text" name='email' value={formulario.email} onChange={manejarCambio} placeholder="Correo"/>
        <input type="text" name='direccion' value={formulario.direccion} onChange={manejarCambio} placeholder="Domicilio"/>
        <input type="text" name='telefono' value={formulario.telefono} onChange={manejarCambio} placeholder="Número de teléfono"/>
        <input type="submit" value="Crear cuenta" onClick={manejarEnvioFormulario} />
    </form>
    
    
    </>
  )
}

export default Formulario;