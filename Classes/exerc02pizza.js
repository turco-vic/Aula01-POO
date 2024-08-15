class Pizza {
    constructor (base, molho, cobertura, queijo) {
        this.base = base
        this.molho = molho 
        this.cobertura  = cobertura 
        this.queijo = queijo
    }
    sePedido(){
        console.log(`Olá, seu pedido é uma pizza com massa ${this.base}, ${this.molho}, ${this.cobertura}, e ${this.queijo}. Bom apetite!`);
    }
}
const user = new Pizza("pan", "molho de tomate", "frango catupiry", "queijo mussarela")

user.sePedido()