var Libro = /** @class */ (function () {
    function Libro(titulo, autor) {
        this.cota = '1752541803';
        this.titulo = titulo;
        this.autor = autor;
    }
    Libro.prototype.getAutor = function () {
        return this.autor;
    };
    Libro.prototype.setAutor = function (nuevoAutor) {
        this.autor = nuevoAutor;
    };
    Libro.prototype.getCota = function () {
        return this.cota;
    };
    return Libro;
}());
var libro1 = new Libro('El Principito', 'Antoine de Saint-Exupéry');
console.log('Título:', libro1.titulo);
console.log('Autor:', libro1.getAutor());
console.log('Cota:', libro1.getCota());
libro1.setAutor('A. de Saint-Exupéry');
console.log('Autor modificado:', libro1.getAutor());
