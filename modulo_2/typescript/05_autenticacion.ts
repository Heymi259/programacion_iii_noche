interface UsuarioLogin {
    id: number,
    username:string
    password: string

}
const usuarioParaLogin: UsuarioLogin = {
    id: 1,
    username: 'Heymi',
    password:'1234',
}
function login(usuario: UsuarioLogin): void{
    if (usuario.password == '1234' && usuario.username =='heymi'){
        console.log('usuario $ {usuario.username} exitosamente autenticado');
        console.log('usuario' , usuario.username, 'exitosamente autenticado');
        console.log('usuario' + usuario.username + 'exitosamente autenticado');
    }
}