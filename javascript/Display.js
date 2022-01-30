/* controlar la calculadrora y los botones
muestra los lo resultados en el display*/

class Display {
    constructor(displayvaloranterior,displayvaloractual){
        this.displayvaloractual= displayvaloractual;
        this.displayvaloranterior= displayvaloranterior;
        this.Calculadora1= new Calculadora1 ();
        this.valorActual='';
        this.valorAnterior='';
        this.tipoOperacion= undefined;
        this.signos={
            sumar: '+',
            restar:'-',
            multiplicar:'*',
            dividir:'/',


        }



    }
    agregarNumero(numero){
        if (numero === '.' && this.valorActual.includes('.'))return
        this.valorActual=this.valorActual.toString() + numero.toString();
        this.imprimirValores();

    }
    imprimirValores(){
        this.displayvaloractual.textContent = this.valorActual;
        this.displayvaloranterior.textContent =  `${this.valorAnterior} ${this.signos[this.tipoOperacion] ||''}`;

    }

    borrar(){
        this.valorActual=this.valorActual.toString().slice(0,-1);
        this.imprimirValores();
    }

    borrar_todo(){
        this.valorActual="";
        this.valorAnterior="";
        this.tipoOperacion= undefined;
        this.imprimirValores();


    }

    clacular(){
        const valorAnterior= parseFloat(this.valorAnterior);
        const valorActual= parseFloat(this.valorActual);

        if ( isNaN (valorActual)|| isNaN(valorAnterior)) return
        this.valorActual = this.Calculadora1[ this.tipoOperacion](valorAnterior,valorActual);

}

computar(tipo){
    this.tipoOperacion !== "igual" && this.clacular();
    this.tipoOperacion= tipo ;
    this.valorAnterior= this.valorActual || this.valorAnterior;
    this.valorActual=" ";
    this.imprimirValores();
}


}
