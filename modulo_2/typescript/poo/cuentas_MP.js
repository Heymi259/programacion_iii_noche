var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var PedidoBase = /** @class */ (function () {
    function PedidoBase() {
        this.total = 0;
    }
    PedidoBase.prototype.modificarTotal = function (monto) {
        this.total += monto;
    };
    PedidoBase.prototype.consultarTotal = function () {
        return this.total;
    };
    return PedidoBase;
}());

var PedidoComida = /** @class */ (function (_super) {
    __extends(PedidoComida, _super);
    function PedidoComida() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PedidoComida.prototype.operar = function () {
        console.log('Operación en pedido de comida');
    };
    return PedidoComida;
}(PedidoBase));

var PedidoBebida = /** @class */ (function (_super) {
    __extends(PedidoBebida, _super);
    function PedidoBebida() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PedidoBebida.prototype.operar = function () {
        console.log('Operación en pedido de bebida');
    };
    return PedidoBebida;
}(PedidoBase));

// --- DEMO ---
var miPedidoComida = new PedidoComida();
miPedidoComida.modificarTotal(15); 
miPedidoComida.operar();
console.log('Total pedido de comida:', miPedidoComida.consultarTotal());

var miPedidoBebida = new PedidoBebida();
miPedidoBebida.modificarTotal(5); 
miPedidoBebida.operar();
console.log('Total pedido de bebida:', miPedidoBebida.consultarTotal());