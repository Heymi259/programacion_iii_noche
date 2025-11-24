class PedidoBase {
    #total;

    constructor(totalInicial = 0) {
        this.#total = totalInicial;
    }

    consultarTotal() {
        return this.#total;
    }

    _modificarTotal(cambio) {
        this.#total += cambio;
    }

    operar(tipo, monto) {
        throw new Error('operar() debe implementarse en la subclase');
    }
}

class PedidoComida extends PedidoBase {
    constructor(totalInicial = 0, descuento = 0.1) {
        super(totalInicial);
        this.descuento = descuento;
    }

    operar(tipo, monto) {
        if (tipo === 'agregar') {
            this._modificarTotal(monto);
            console.log(` Plato agregado: $${monto}`);
        } else if (tipo === 'retirar') {
            if (monto <= this.consultarTotal()) {
                this._modificarTotal(-monto);
                console.log(` Plato retirado: $${monto}`);
            } else {
                console.log(' No se puede retirar más de lo que hay en el pedido.');
            }
        } else {
            console.log('Tipo de operación no soportado en PedidoComida');
        }
    }

    aplicarDescuento() {
        const descuentoAplicado = this.consultarTotal() * this.descuento;
        this._modificarTotal(-descuentoAplicado);
        console.log(`Descuento aplicado: $${descuentoAplicado.toFixed(2)}`);
    }
}

class PedidoBebida extends PedidoBase {
    constructor(totalInicial = 0, promoHappyHour = 0.5) {
        super(totalInicial);
        this.promoHappyHour = promoHappyHour;
    }

    operar(tipo, monto) {
        if (tipo === 'agregar') {
            this._modificarTotal(monto);
            console.log(` Bebida agregada: $${monto}`);
        } else if (tipo === 'retirar') {
            this._modificarTotal(-monto);
            console.log(`Bebida retirada: $${monto}`);
        } else {
            console.log('Tipo de operación no soportado en PedidoBebida');
        }
    }

    aplicarPromo() {
        const descuento = this.consultarTotal() * this.promoHappyHour;
        this._modificarTotal(-descuento);
        console.log(`Promo Happy Hour aplicada: -$${descuento.toFixed(2)}`);
    }
}

// --- Demo ---
console.log('=== DEMO: pedidos restaurante ===');

const comida = new PedidoComida(20, 0.15);
console.log('Total inicial comida:', comida.consultarTotal());
comida.operar('agregar', 15);
comida.operar('retirar', 5);
comida.aplicarDescuento();
console.log('Total final comida:', comida.consultarTotal());

console.log('-----');

const bebida = new PedidoBebida(10, 0.3);
console.log('Total inicial bebida:', bebida.consultarTotal());
bebida.operar('agregar', 8);
bebida.aplicarPromo();
console.log('Total final bebida:', bebida.consultarTotal());

try {
    const base = new PedidoBase(5);
    base.operar('agregar', 2);
} catch (e) {
    console.log('Error esperado al invocar operar() en PedidoBase:', e.message);
}