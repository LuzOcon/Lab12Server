import { getServerURL } from "./task1.js";

export function delUser(number){
    return fetch(getServerURL() + "/users/" + number, {
        method: 'DELETE',
    })
    .then(respuesta => respuesta.json())
    .then(datos => console.log(datos))

}

