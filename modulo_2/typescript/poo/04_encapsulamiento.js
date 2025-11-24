var usuario = /** @class */ (function () {
    function usuario(username) {
        this.password = '12345';
        this.username = username;
    }
    ;
    usuario.prototype.autenticar = function (password) {
        return password == this.password;
    };
    return usuario;
}());
var user = new usuario('de la cruz');
var autenticacion = user.autenticar('12345');
if (autenticacion) {
    console.log('Usuario exitosamne autentia¿cado');
}
else {
    console.log('Error');
}
