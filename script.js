let users = 
[
    [0, "Carla", "1545628984", "carla@gmail.com"],
    [1, "Pedro", "1545251245", "pedro@gmail.com"],
    [2, "Lucas", "1523357849", "lucas@gmail.com"],
    [3, "Ana", "15789456", "ana@gmail.com"]
];

//FLAG VARIABLES
let keepGoing = true;
let userCreation = true;
let actionBeingPerformed = true;

let actionToPerform = "";
let userID = users.length;
let userName = "";
let userPhone = "";
let userMail = "";

let confirmUserCreation = true;
let newUser = [];

let tryAgain = true;

let typeOfDataToSearch = "";
let messageAskingData = ""
let infoToSearch = ""
let existentUser = true;
let arrayIndex = 0;

let userData = ""
let usersList = ""

let idToChangeOrDelete = 0

let confirmUserDeletion = true;


while (keepGoing) {
    actionBeingPerformed = true;
    actionToPerform = prompt(`¿Qué desea hacer?\n- 👤 Crear un usuario (CREAR)\n- 🔎 Buscar un usuario (BUSCAR)\n- 📄 Listar los usuarios (LISTAR)\n- ✏️ Modificar un usuario (MODIFICAR)\n- 🗑️ Eliminar un usuario (ELIMINAR)\n- 🚪 Salir del programa (SALIR)`);

    switch (actionToPerform) {
        case "CREAR":
            while (actionBeingPerformed) {
                userName = prompt(`Ingrese el nombre`);
                userPhone = prompt(`Ingrese el teléfono`);
                userMail = prompt(`Ingrese el mail`);
                confirmUserCreation = confirm(`Los datos son:\n- Nombre: ${userName}\n- Teléfono: ${userPhone}\n- Mail: ${userMail}\n¿Desea confirmar la operación?`);
                if (confirmUserCreation) {
                    newUser = [];
                    newUser.push(userID, userName, userPhone, userMail);
                    users.push(newUser);
                    userID++;
                    actionBeingPerformed = false;
                } else {
                    tryAgain = confirm(`La operación fue cancelada.\n¿Quiere volver a ingresar los datos?`)
                    if (!tryAgain) {
                        actionBeingPerformed = false;
                    }
                }
            }
            console.log(users);
            break;

        case "BUSCAR":
            existentUser = true;
            while (actionBeingPerformed) {
                typeOfDataToSearch = prompt(`¿Qué desea buscar: id, nombre, teléfono o mail?`);
                switch (typeOfDataToSearch) {
                    case "id":
                    case "nombre":
                    case "teléfono":
                    case "mail":
                        infoToSearch = prompt(`Ingrese el ${typeOfDataToSearch} que quiere buscar:`);
                        existentUser = false;
                        for (let i = 0; i < users.length; i++) {
                            for (let j = 0; j < users[i].length; j++) {                            
                                if (users[i][j] == infoToSearch) {
                                    arrayIndex = i;
                                    existentUser = true;
                                    actionBeingPerformed = false;
                                }
                            }
                        }

                        if (existentUser) {
                            alert(users[arrayIndex].join("\n"))
                        } else {
                            tryAgain = confirm(`El usuario no existe.\n¿Quiere buscar otra vez?`)
                            if (!tryAgain) {
                                actionBeingPerformed = false;
                            }
                        }
                        break;
                    default:
                        alert(`No ingresó una opción válida.`)
                }
            }
            break;

        case "LISTAR":
            usersList = "";
            for (let i = 0; i < users.length; i++) {
                userData = `ID: ${users[i][0]} / Nombre: ${users[i][1]} / Teléfono: ${users[i][2]} / Mail: ${users[i][3]}`
                usersList += userData + "\n"
            }
            alert(usersList)
            break;

        case "MODIFICAR":
            while(actionBeingPerformed) {
                idToChangeOrDelete = Number(prompt(`Ingrese el ID del usuario que quiere modificar:`))
                if (users[idToChangeOrDelete] !== undefined) {
                    userName = prompt(`Ingrese el nombre`);
                    userPhone = prompt(`Ingrese el teléfono`);
                    userMail = prompt(`Ingrese el mail`);
                    confirmUserCreation = confirm(`Los datos son:\n- Nombre: ${userName}\n- Teléfono: ${userPhone}\n- Mail: ${userMail}\n¿Desea confirmar la operación?`);
                    if (confirmUserCreation) {
                        users[idToChangeOrDelete][1] = userName
                        users[idToChangeOrDelete][2] = userPhone
                        users[idToChangeOrDelete][3] = userMail
                        alert(`La operación se realizó exitosamente.`)
                        actionBeingPerformed = false;
                    } else {
                        tryAgain = confirm(`La operación fue cancelada.\n¿Quiere volver a ingresar los datos?`)
                        if (!tryAgain) {
                            actionBeingPerformed = false;
                        }
                    }
                } else {
                    tryAgain = confirm(`El usuario no existe.\n¿Quiere hacer otra búsqueda?`)
                    if (!tryAgain) {
                        actionBeingPerformed = false;
                    }
                }
            }
            break;

        case "ELIMINAR":
            while (actionBeingPerformed) {
                idToChangeOrDelete = Number(prompt(`Ingrese el id del usuario que quiere eliminar:`))
                if (users[idToChangeOrDelete] !== undefined) {
                    confirmUserDeletion = confirm(`El usuario que desea eliminar es: \n--Nombre: ${users[idToChangeOrDelete][1]} \n--Teléfono: ${users[idToChangeOrDelete][2]} \n--Mail: ${users[idToChangeOrDelete][2]}\n ¿Desea confirmar la operación?`)
                    if (confirmUserDeletion) {
                        users.splice(idToChangeOrDelete, 1)
                        actionBeingPerformed = false;
                    } else {
                        tryAgain = confirm(`La operación fue cancelada.\n¿Quiere volver a ingresar los datos?`)
                        if (!tryAgain) {
                            actionBeingPerformed = false;
                        }
                    }
                } else {
                    tryAgain = confirm(`El usuario no existe.\n¿Quiere buscar otra vez?`)
                    if (!tryAgain) {
                        actionBeingPerformed = false;
                    }
                }
            }
            break;

        case "SALIR":
            reallyGoing = confirm(`¿Desea confirmar la operación?`);
            if (reallyGoing) {
                alert(`Gracias por trabajar con nosotros. ¡Adiós!`)
                keepGoing = false;
            }
            break;
        case "A":
            keepGoing = false;
            break;
        default:
            alert(`No ingresó una opción válida.`)
    }
}