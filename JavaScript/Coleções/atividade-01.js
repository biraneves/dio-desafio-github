function getAdmins(map) {

    let admins = [];

    for ([key, value] of map) {

        if (value === 'Admin') {

            admins.push(key);

        }

    }

    return admins;

}

const usuarios = new Map();

usuarios.set('Pâmela', 'Admin');
usuarios.set('Bira', 'Admin');
usuarios.set('Xena', 'User');
usuarios.set('Aria', 'User');
usuarios.set('Nika', 'Demon');

console.log(getAdmins(usuarios));