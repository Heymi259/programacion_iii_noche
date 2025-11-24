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
var cuentaBase = /** @class */ (function () {
    function cuentaBase() {
        this.saldo = 0;
    }
    cuentaBase.prototype.modificarSaldo = function (monto) {
        this.saldo += monto;
    };
    cuentaBase.prototype.consultarSaldo = function () {
        return this.saldo;
    };
    return cuentaBase;
}());
var cuentaAhorro = /** @class */ (function (_super) {
    __extends(cuentaAhorro, _super);
    function cuentaAhorro() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    cuentaAhorro.prototype.operar = function () {
        console.log('Operación en cuenta de ahorro');
    };
    return cuentaAhorro;
}(cuentaBase));
var cuentaCorriente = /** @class */ (function (_super) {
    __extends(cuentaCorriente, _super);
    function cuentaCorriente() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    cuentaCorriente.prototype.operar = function () {
        console.log('Operación en cuenta corriente');
    };
    return cuentaCorriente;
}(cuentaBase));
var miCuentaAhorro = new cuentaAhorro();
miCuentaAhorro.modificarSaldo(500);
miCuentaAhorro.operar();
console.log('Saldo cuenta de ahorro:', miCuentaAhorro.consultarSaldo());
var miCuentaCorriente = new cuentaCorriente();
miCuentaCorriente.modificarSaldo(500);
miCuentaCorriente.operar();
console.log('Saldo cuenta de ahorro:', miCuentaCorriente.consultarSaldo());
