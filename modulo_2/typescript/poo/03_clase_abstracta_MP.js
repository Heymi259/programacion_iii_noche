
var Producto = /** @class */ (function () {
    function Producto(nombre, precio) {
        this.nombre = nombre;
        this.precio = precio;
    }
    Producto.prototype.mostrarInfo = function () {
        console.log("Producto:", this.nombre, "- Precio:", this.precio, "USD");
    };
    return Producto;
}());

var Bebida = /** @class */ (function (_super) {
    __extends(Bebida, _super);
    function Bebida(nombre, precio, tamaño) {
        var _this = _super.call(this, nombre, precio) || this;
        _this.tamaño = tamaño;
        return _this;
    }
    Bebida.prototype.servir = function () {
        console.log("La bebida", this.nombre, "se sirve en tamaño", this.tamaño);
    };
    return Bebida;
}(Producto));

var Plato = /** @class */ (function (_super) {
    __extends(Plato, _super);
    function Plato(nombre, precio, tipo) {
        var _this = _super.call(this, nombre, precio) || this;
        _this.tipo = tipo;
        return _this;
    }
    Plato.prototype.servir = function () {
        console.log("El plato", this.nombre, "es un", this.tipo, "y está listo para servir.");
    };
    return Plato;
}(Producto));

var bebida1 = new Bebida("Coca-Cola", 2.50, "Grande");
var plato1 = new Plato("Pizza Margarita", 8.50, "Italiana");

bebida1.mostrarInfo();
bebida1.servir();

plato1.mostrarInfo();
plato1.servir();