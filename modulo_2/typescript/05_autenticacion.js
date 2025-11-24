var usuarioParaLogin = {
    id: 1,
    username: 'Heymi',
    password: '1234',
};
function login(usuario) {
    if (usuario.password == '1234' && usuario.username == 'heymi') {
        console.log('usuario $ {usuario.username} exitosamente autenticado');
        console.log('usuario', usuario.username, 'exitosamente autenticado');
        console.log('usuario' + usuario.username + 'exitosamente autenticado');
    }
}
