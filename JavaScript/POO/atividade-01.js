class ContaBancaria {

    constructor (agencia, numero, tipo) {

        this.agencia = agencia;
        this.numero = numero;
        this.tipo = tipo;
        this._saldo = 0.0;

    }

    get saldo() {

        return this._saldo;

    }

    set saldo(valor) {

        this._saldo = valor;

    }

    sacar(valor) {

        if (valor > this._saldo)
            throw "Saldo insuficiente.";
        
        this._saldo -= valor;
        return this._saldo;

    }

    depositar (valor) {

        if (valor <= 0)
            throw "O valor deve ser positivo.";
        
        this._saldo += valor;
        return this._saldo;

    }

}

class ContaCorrente extends ContaBancaria {

    constructor (agencia, numero, cartaoCredito) {

        super(agencia, numero, 'corrente');
        this._cartaoCredito = cartaoCredito;

    }

    get cartaoCredito() {

        return this._cartaoCredito;

    }

    set cartaoCredito(cartaoCredito) {

        this._cartaoCredito = cartaoCredito;

    }

}

class ContaPoupanca extends ContaBancaria {

    constructor (agencia, numero) {

        super(agencia, numero, 'poupança');

    }

}

class ContaUniversitaria extends ContaBancaria {

    constructor (agencia, numero) {

        super(agencia, numero, 'universitária');

    }

    sacar(valor) {

        if (valor > 500)
            throw 'Limite de saque excedido.';
        
        this._saldo -= valor;
        return this._saldo;

    }

}