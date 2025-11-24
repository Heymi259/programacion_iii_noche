class Libro {
    public titulo: string;
    private autor: string;
    protected cota: string ='1752541803';
    constructor(titulo: string, autor: string) {
        this.titulo = titulo;
        this.autor = autor;
    }

    getAutor(): string {
        return this.autor;
    }

    setAutor(nuevoAutor: string): void {
        this.autor = nuevoAutor;
    }

    getCota(): string {
        return this.cota;
    }  
}
const libro1 = new Libro('El Principito', 'Antoine de Saint-Exupéry');
console.log('Título:', libro1.titulo);
console.log('Autor:', libro1.getAutor());
console.log('Cota:', libro1.getCota());
libro1.setAutor('A. de Saint-Exupéry');
console.log('Autor modificado:', libro1.getAutor());