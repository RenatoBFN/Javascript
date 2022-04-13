function getUser(map){             // Função que irá retornar 'USER' ou 'ADMIN'.
    let user = []
    for([key, value] of map){        // MAP pode iterar e manipular os valores da chave e valores juntos.
        if(value == 'User'){
            user.push(key);
       }
        
    }
    return user;

}

const usuarios = new Map();

usuarios.set('Renato', 'Admin');
usuarios.set('João','Admin');
usuarios.set('Davi','Admin');
usuarios.set('Henrique','User');
usuarios.set('Aline','User');
usuarios.set('Pedro','User');
usuarios.set('Robson','User');

console.log(getUser(usuarios));