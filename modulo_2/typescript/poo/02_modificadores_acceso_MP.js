
var Plato = /** @class */ (function () {
    function Plato(nombre, precio) {
        this.codigo = 'PLT-001'; 
        this.nombre = nombre;
        this.precio = precio;
    }


    Plato.prototype.getPrecio = function () {
        return this.precio;
    };

    Plato.prototype.setPrecio = function (nuevoPrecio) {
        this.precio = nuevoPrecio;
    };

    Plato.prototype.getCodigo = function () {
        return this.codigo;
    };

    return Plato;
}());


var plato1 = new Plato('Pizza Margarita', 8.50);

console.log('Nombre del plato:', plato1.nombre);
console.log('Precio:', plato1.getPrecio());
console.log('Código:', plato1.getCodigo());


plato1.setPrecio(9.00);
console.log('Precio actualizado:', plato1.getPrecio());