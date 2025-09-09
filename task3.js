import { getServerURL } from "./task1.js";

export function addUser(first_name, last_name, email){
    
   return fetch(getServerURL() + "/users")
    .then(respuesta => respuesta.json())
    .then(users => {
        const newId = (users.length + 1).toString();
        const newUser = {
            id: newId,
            first_name: first_name,
            last_name: last_name,
            email: email
        };

    return fetch(getServerURL() + "/users", {
        method: 'POST',
        headers: {'Content-Type': 'application/json',},
        body: JSON.stringify(newUser)
    })
})
.then(respuesta => respuesta.json())
.then(datos => console.log("new user: ",datos))
}

