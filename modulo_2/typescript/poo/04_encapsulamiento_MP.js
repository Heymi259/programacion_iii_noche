
var Cliente = /** @class */ (function () {
    function Cliente(nombreUsuario) {
        this.password = 'mesa123';
        this.nombreUsuario = nombreUsuario; 
    }

    Cliente.prototype.autenticar = function (password) {
        return password === this.password;
    };

    return Cliente;
}());


var cliente1 = new Cliente('Juan Pérez');


var autenticacion = cliente1.autenticar('mesa123');

if (autenticacion) {
    console.log('Cliente autenticado exitosamente. Bienvenido al sistema de pedidos.');
} else {
    console.log('Error de autenticación. Contraseña incorrecta.');
}