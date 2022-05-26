export const manejarEnvioFormulario = (e) => {
    e.preventDefault();
    const usuarioNuevo = crearUsuario();
    disparoAgregar({
      type: tipos.AGREGAR_USUARIO,
      payload: usuarioNuevo,
    });
  
  }