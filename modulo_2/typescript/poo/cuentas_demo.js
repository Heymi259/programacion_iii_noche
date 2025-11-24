// Single-file JavaScript implementation
// - `#saldo` is a private field (ES2022 private class fields)
// - `_modificarsaldo` is a "protected-style" method: it's publicly callable but
//   by convention the underscore signals it's intended for subclasses only.
// - `operar()` in CuentaBase throws by default (abstract-like behavior)

class CuentaBase {
    // private saldo
    #saldo;

    constructor(saldoInicial = 0) {
        this.#saldo = saldoInicial;
    }

    // Public read-only accessor
    consultarSaldo() {
        return this.#saldo;
    }

    // "Protected" modifier: subclasses should call this to change the balance.
    // In JS we can't declare 'protected' — by convention the leading underscore
    // marks this method for subclass use only. It can access the private field.
    _modificarsaldo(cambio) {
        this.#saldo += cambio;
    }

    // Abstract-like method; subclasses must override
    operar(tipo, monto) {
        throw new Error('operar() debe implementarse en la subclase');
    }
}

class CuentaAhorro extends CuentaBase {
    constructor(saldoInicial = 0, tasaInteres = 0.01) {
        super(saldoInicial);
        this.tasaInteres = tasaInteres;
    }

    operar(tipo, monto) {
        if (tipo === 'deposit') {
            this._modificarsaldo(monto);
            console.log(`Depósito en cuenta de ahorro: ${monto}`);
        } else if (tipo === 'withdraw') {
            if (monto <= this.consultarSaldo()) {
                this._modificarsaldo(-monto);
                console.log(`Retiro en cuenta de ahorro: ${monto}`);
            } else {
                console.log('Fondos insuficientes en cuenta de ahorro. Operación cancelada.');
            }
        } else {
            console.log('Tipo de operación no soportado en CuentaAhorro');
        }
    }

    aplicarInteres() {
        const interes = this.consultarSaldo() * this.tasaInteres;
        this._modificarsaldo(interes);
        console.log(`Interés aplicado: ${interes.toFixed(2)}`);
    }
}

class CuentaCorriente extends CuentaBase {
    constructor(saldoInicial = 0, descubiertoMaximo = 500) {
        super(saldoInicial);
        this.descubiertoMaximo = descubiertoMaximo;
    }

    operar(tipo, monto) {
        if (tipo === 'deposit') {
            this._modificarsaldo(monto);
            console.log(`Depósito en cuenta corriente: ${monto}`);
        } else if (tipo === 'withdraw') {
            const nuevoSaldo = this.consultarSaldo() - monto;
            if (nuevoSaldo >= -this.descubiertoMaximo) {
                this._modificarsaldo(-monto);
                console.log(`Retiro en cuenta corriente: ${monto}`);
            } else {
                console.log('Excede el descubierto permitido. Operación cancelada.');
            }
        } else {
            console.log('Tipo de operación no soportado en CuentaCorriente');
        }
    }
}

// --- Demo usage ---
console.log('=== DEMO: cuentas (single JS file) ===');
const ahorro = new CuentaAhorro(1000, 0.02);
console.log('Saldo inicial ahorro:', ahorro.consultarSaldo());
ahorro.operar('withdraw', 200);
console.log('Saldo después retiro ahorro:', ahorro.consultarSaldo());
ahorro.operar('deposit', 300);
console.log('Saldo después depósito ahorro:', ahorro.consultarSaldo());
ahorro.aplicarInteres();
console.log('Saldo final ahorro:', ahorro.consultarSaldo());

console.log('-----');

const corriente = new CuentaCorriente(200, 500);
console.log('Saldo inicial corriente:', corriente.consultarSaldo());
corriente.operar('withdraw', 600); // permite descubierto hasta -500
console.log('Saldo después retiro corriente:', corriente.consultarSaldo());
corriente.operar('withdraw', 200); // intenta exceder descubierto
console.log('Saldo final corriente:', corriente.consultarSaldo());

// Example: trying to call base operar() will throw
try {
    const base = new CuentaBase(50);
    base.operar('deposit', 10);
} catch (e) {
    console.log('Error esperado al invocar operar() en CuentaBase:', e.message);
}
