class usuario{
    private password: string ='12345'
    public username: string;
    constructor(username: string){
        this.username=username
    };
    autenticar(password:string): boolean{
        return password==this.password
    }
}
const user = new usuario('de la cruz');
const autenticacion = user.autenticar('12345');
if (autenticacion){
    console.log('Usuario exitosamne autentia¿cado')
}else { 
    console.log('Error')
}