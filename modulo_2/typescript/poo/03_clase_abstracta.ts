    abstract class animal {
    abstract hacerSonido(): void;
    mover(): void {
        console.log('El animal se está moviendo');
    }  

}

class Perro extends animal {
    hacerSonido(): void {
        console.log('El perro ladra: Guau Guau');
    }
}
const doggy = new Perro();
doggy.hacerSonido();
doggy.mover();