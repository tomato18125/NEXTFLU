import React, { useReducer, useState } from 'react'
import { tipos } from './tipos'

export const estadoInicial = {
    contador: 0,
};

export const reductor = (estado, accion) => {
    switch (accion.tipos) {
        case tipos.LOGUEADO:
            break;
        default:
            break;


    };

    return estado;



}
 