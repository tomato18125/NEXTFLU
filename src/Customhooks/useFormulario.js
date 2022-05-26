import React, {useState} from 'react'

const useFormulario = () => {

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

      };

      return [formulario, manejarCambio];
    }

    export default useFormulario

