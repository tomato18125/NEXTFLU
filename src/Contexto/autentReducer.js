import { tipos } from "../Tipos/tipos";

export const autentInicial = () => 
localStorage.getItem("autent")? JSON.parse(localStorage.getItem("autent"))
:
{
    autentificado: false, 
    usurario: null,

};

// export const autentInicial = {
//     autentificado: false, 
//     usurario: null,

// };




export const autentReductor = (estado, accion) => {
    switch (accion.tipos) {
        case tipos.LOGIN:
            return {
                ...estado,
                autentificado: true,
                usuario: accion.payload,
            };
        case tipos.LOGOUT:
            return {
                ...estado,
                autentificado: false,
                usuario: null,
            };
        default:
            return estado;

    }


};

