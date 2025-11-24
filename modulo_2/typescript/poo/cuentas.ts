abstract class cuentaBase {
    private saldo: number=0;
    abstract operar(): void;

    modificarSaldo(monto: number): void {
        this.saldo += monto;
    }

    consultarSaldo(): number {
        return this.saldo;
    }
}

class cuentaAhorro extends cuentaBase {
    operar(): void {
        console.log('Operación en cuenta de ahorro');
    }
}

class cuentaCorriente extends cuentaBase {
    operar(): void {
        console.log('Operación en cuenta corriente');
    }   
}
const miCuentaAhorro = new cuentaAhorro();
miCuentaAhorro.modificarSaldo(500);
miCuentaAhorro.operar();
console.log('Saldo cuenta de ahorro:', miCuentaAhorro.consultarSaldo());

const miCuentaCorriente = new cuentaCorriente();
miCuentaCorriente.modificarSaldo(500);
miCuentaCorriente.operar();
console.log('Saldo cuenta de ahorro:', miCuentaCorriente.consultarSaldo());