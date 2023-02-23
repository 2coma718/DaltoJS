
//? Blue isn't very important
//* Green is important and the result of the code
//TODO: orange is very important
//! Essential
/*Codigo comentado para ahorrar tiempo*/

//TODO La etiqueta de enlace va al final del body o en el head con "defer" para no detener lacarga de la pagina
//TODO y una ejecucion ordenada (que no pasa con async)
//TODO typeof te va a devolver que tipo de variable es la que le asignaste typeof (var) == 'lo que devuelve'
//TODO los bloques de codigo no necesitan ; if, switcg, while etc  pero los valores si 
//! "use strict" quiere decir que se va a programar con js moderno, que facilita muchas cosas 
//* Var guarda un dato global, let solo en su bloque como  en un (if while o 
//* For) y const no puede ser cambiada y su alcance es en su bloque. Cuando se 
//? Trata de hacer operaciones matematicas con datos que no son numeros te
//? Aparece Nan (not a number) y cuando se declara vacia la variable (#)
//? Aparece Null 
//? Camel case significa que la 1er letra de la 1er palabra de una declaracion se escribe en
//? Mayuscula
//? El scope es el alcance de una variable para llegar a ser utilizada
//? En cada parte del codigo 
//? el valor inifinity hace que ningun numero sea mayor que el y con -infinity al revez 
//* Un bloque de codigo esta delimitado por llaves {}



//? Con prompt te sale como un cuadro de alerta en que podes darle un valor
//? A una variable

/*let nombre = prompt("decime tu nombre");
document.write("hola usuario " + nombre);*/

// var numeroposible = prompt("sera posible?")
// if(numeroposible % 8 == 2) {alert("its correct")}
// else {alert("its incorrect")}

//? DIFERENTES FORMAS DE DECLARAR VARIABLES

// var edad, peso, altura;
// edad = 20;
// peso = 60;
// altura = 160;

// document.write(edad, peso, altura);

// var edad = 21, peso = 61, altura = 160;

// document.write(edad, peso, altura);
 
let y = 3, x = 4;              

document.write(x**=y);          
document.write(x-=y);           

let a = 3, b = 4;        

document.write(b ** a);
document.write(b - a);
document.write(b--);



//* Los operadores de asignacion ponen el simbolo con el que se va a hacer la operacion antes
//* Del igual y cambian el valor de la variable que esta a la izquierda mientras que los
//? Aritmeticos no cambian el valor de la variable y el signo de la cuenta va en medio de las 
//* Variables. El incremento y el decremento se tienen que definir antes de mostrarlo, si se 
//* Trata de hacer la cuenta en la misma declaracion para mostrarlo, primero lo muestra y 
//* Después hace la cuenta

document.write(b % a);
document.write(-b);
//? El resto es con % (ahi da resto 0 por que antes habia decrecido). Los operadores unarios
//? Cambian el signo del numero



//? Eso es concatenar strings. Para concatar con concat (es un metodo de cadena) la primer
//? Variable tiene que tener un dato string y en documentwrite se puede declarar variables

let saludo = "Hola, pedro";
let question = "¿todo bien?";

let todo = saludo + question
document.write(todo);

let Forzarastring = "+ b + a";
document.write(Forzarastring);

// let c = "5";
// let concat = c.concat(a);
// document.write(concat);

//* Concatenando con los backticks (``´´) te ahorras muchos errores y ademas despues se usa para 
//* Escribir Codigo html 

// let pregunta = "por el perro"

// let historia = `yo le pregunte ${pregunta} a ruben`;
// document.write(historia);

//? Para usar comillas dobles en la horacion se tiene que empezar con simples y viceversa.
//? (Se llama escape de comillas)

document.write('Entonces por eso se llama "Halloween"')



//* Los operadores de comparacion, compara 2 expresiones y devuelven un dato boolean.

let ñ = "10", m = 10;
let primera = (ñ == m); //? TRUE
let segunda = (b != a); //? (Operador de Inegualdad)
let tercera = (b === x); //? FALSE
let cuarta = (b !== x); //? (Operador de inegualda identico)
b <= x; b < x;
b => x; b> x; 

//* Los operadores logicos te dan un resultado booleano si se cumple una condición y sus 
//* Operandos son logicos. .Como solo acepta verdadeo y falso.
let valor1 = true
let valor2 = true
let resultado1 = valor1 && valor2;
let resultado2 = valor1 || valor2; //? Necesita que una afirmacion sea true para devolver true
let resultado3 = !valor1;  //? Lo que hace es pasar lo que es true a false y vicebersa.

//* Los operadores se pueden escribir en cadena en una operación siendo que primero se pasan 
//? Datos a bolean con los comparadores y ahi ya se pueden usar los logicos

let numero1= 25, numero2 = 50, numero3 = 75, numero4 = 100; 
let op = (!(numero1 < numero2))||(numero3 == numero4 && numero4 ===numero3)
document.write(op)



//TODO: Si un condicional es verdadero se ejecuta su bloque de codigo

// let prueba = prompt('elegir letras entre la "A" y la "C" ')
// if ( prueba == "a" ) {
//     alert('Elegiste "a" ')
// }

//TODO: else if se usa cuando la primer condición no se cumple, si se usa ; se corta la
//TODO: Cadena de else if. No se usa if devuelta pq con los else if si la pimera se cumple
//TODO: Los else if y else se saltean y se ahorra recursos, de la otra forma no

// else if (prueba == "A"){
//     alert('Elegiste "A"')
// }
// else if (prueba == "b"){
//    alert('Elegiste "b" ')
// }
// else if (prueba == "B"){
//     alert('Elegiste "B" ')
// }
// else if(prueba == "c") {
//     alert('Elegiste "c" ')
// }
// else if (prueba == "C"){
//     alert('Elegiste "C" ')
//  }

// else {
//     alert('No elegiste una letra entre la "A" y la "C" ')
// };




   /* 1>2 (2>3, 1=3, 2=3);
      2>1 (1>3, 2=3, 1=3);
      3>1 (1>2, 2=1);
      1>3 (3>2, 1=2);
      2>3>1;
      1=2=3;  */


// let helado1 = prompt("Precio de helado 1")
// let helado2 = prompt("Precio de helado 2")
// let helado3 = prompt("Precio de helado 3")

// let caro = null;
// let medio = null;
// let barato = null;
// let doscaros = null;
// let dosbaratos = null;
// let iguales = null;
// let iguales2 = null;
// let iguales3 = null;


// if(helado1 > helado2){
//    if(helado2 > helado3){caro = helado1, medio = helado2, barato = helado3}
//    else if(helado1 == helado3){caro = helado3, doscaros = helado1,barato = helado2}
//    else {caro = helado1, barato = helado3, dosbaratos = helado2}
// }

// else if(helado2 > helado1){
//     if(helado1 > helado3){caro = helado2, medio = helado1, barato = helado3}
//     else if(helado2 == helado3){caro = helado3, doscaros = helado2, barato = helado1}
//     else {caro = helado2, barato= helado3, dosbaratos = helado1}
// }

// else if(helado3 > helado1){
//     if (helado1 > helado2){caro = helado3, medio = helado1, barato = helado2}
//     else {barato = helado1, dosbaratos = helado2, caro = helado3}
// }
// else if(helado1 > helado3){
//      if(helado3 > helado2){caro = helado1, medio = helado3, barato = helado2}
//      else {caro = helado2, doscaros = helado1, barato = helado3}
// }

// else if(helado2 > helado3 && helado3 > helado1){caro = helado2, medio = helado3, barato= helado1}
// else  {iguales = helado1, iguales2 = helado2, iguales3 = helados = 3}
// ;

// alert("el mas caro es : "+ caro)
// alert("doscaros : " + doscaros)
// alert("medio : " + medio)
// alert("dosbaratos : " + dosbaratos)
// alert("barato : " + barato)
// alert("todos iguales : " + iguales)
// alert("ya ta") 



//!                                      ARRAYS

//TODO  un array es una variable que puede guardar un monton de datos, se re comiendan que estos datos que 
//TODO guarde esten relacionados, se define asi: let VARIABLE = [DATO0, DATO1, ...]
//TODO para encontrar un dato especifico se escribe VARIABLE[NUMERO DE DATO empieza de 0]

let array = ["hola", 8, 9, true]
alert(array[0, 3, 54]) //**si pones varios, toma el ultimo */

//! Arrays asociativos 

//TODO En estos arrays se le puede poner un nombre a cada dato. Declaración: let VARIABLE {
//TODO  NOMBRE:"DATO",
//TODO  NOMBRE2: "DATO2"
//TODO  }



//!                                 BUCLES

//TODO Los bucles ejecutan un bloque de codigo, mientras una condicion designada sea verdadera

//** while
//**       Es la definicion de arriba. Declaración: while (CONDICIÓN) {BLOQUE DE CODIGO A EJECUTAR}

//** do while
//**         Primero ejecuta y después se fija en la condición. Declaración: do {}    
//**                                                                         while (CONDICIÓN)

//** break 
//**       con la sentencia break se termina el bucle actual, usando etiquetas se puede parar bucles  
//**       afuera

//** for
//**    con for se determina hasta cuando se va a ejecutar el bloque como? en la condicion se escribe 
//**    todo: for (VARIABLE; CONDICION*; INCREMENTO-DECREMENTO ) {CODIGO A EJECUTAR}
//**                                  *La condición siempre va a estar relacionada con la variable
//**                                   La variable se puede declarar afuera y usarla llamanandola

//** continue 
//**          con la sentencia continue se salta lo que sigue del codigo, por lo tanto va al 
//**          siguiente ciclo

//** for in| for of 
//**                toman un array normal previamente declarado y los datos del array se convierten  
//**                en datos de la variable del for, el dato del for va cambiando al siguiente dato 
//**                del array cada nuevo ciclo
//**                for in toma la posición del dato y for of su valor 

let frase = ["nicho", "tito", "gordo", "cabezon"] /** los datos sin comillas, daba nicho not-defined */

for  (let vaso in frase){
   document.write("<br>" + vaso)
}

document.write("<br>")

for  (let vaso of frase){
   document.write("<br>" + vaso)
}

//** Para mostrar los datos con for- in se hace asi: */

for  (let vaso in frase){
   document.write("<br>" + frase[vaso])
}

//? for in = es para recorrer objetos, saber sus posiciones y operarlos
//? for of = recorre todo, hasta las propiedades de los prototipos del que trabaja


//TODO Labels
//* con las label podes elegir con que usar break o continue, afectando tambien a los bucles padres

let end2 = ["no", "sense"]
frase = ["nicho", "tito", "gordo",end2, "cabezon"]

document.write("<br>")
dad: for (let end of frase) {

   document.write("<br>" + end)
   
   if (end == "gordo") {
      for (let fin in end2) {
         document.write("<br>" + end2[fin])
         if (fin == 1) {
            break dad
         }
      }
   }
   
 }
 //? Asi con label se corta un bucle "padre", cuando le aplicamos una funcion a un array que tiene
 //? adentro otro array, al hijo no se le aplica bien las funciones 

/** esto se hace mas facil con for in por las posiciones */



//!                                  FUNCIONES

//TODO Return
//TODO        Con return podemos devolver un dato de una función y termina de ejecutar la funciÓn
//TODO        Declaración: return DATO|VARIABLE

function suma() {
   sama = 1 + 5
   return sama
}

let res = suma(3,2)
document.write(sama)

//** si se omite el tipo de variable a declarar en una función, va a tener alcance global, que ni 
//**siquiera var tiene */





//**!              PROBLEMA DE COFLA
//todo que un algoritmo deje pasar a las personas +18 y la primera entrar a las 2 am no paga
//todo desde un bloque de codigo se puede modificar una variable de afuera 





// var persona = {
//    edad : prompt("¿Que edad tenes?"),
//    hora : prompt("¿Que hora es?")
// }

// function decidir(persona) {
   
//    if (persona[edad] > 18) {
//        si = "puede pasar"
//        if (persona[hora] == 2 ) {
//          gratis = "esta persona pasa gratis"
//        }
//        else {let paga = "esta persona paga"}
//    }

//    else {alert("no puede pasar")}
//    const qpaga = gratis; 
//    if (qpaga = gratis){
//       alert("pasa gratis")
//    }
//    else {alert("pasa")}
   
   
// }

// decidir(persona)


// function pasaono (edad, hora )

//**!     PROBLEMA DE ASISTENCIAS
//! Desde un bucle se puede modificar variables externas, porque si te pondes a pensar es bloque cuando
//! lo estas definiendo pero cuando se ejecuta es simple codigo al nivel del resto que se repite una cantidad
//! de veces determinadas o no
//** en un array se define posiciones, más sin embargo se puede preguntar por el valor de una posicion
//** que no fue definida, por que un array tiene ¿infinitas posiciones?
//** se puede declarar un array e ir definiendo el valor de las posiciones a conveniencia 

//todo para crear los datos, voy aplicar un ciclo, en el que se definan los valores. Para saber 
//todo cuantas veces se ejecuta el ciclo de establecer valor de nombre y falta, hay que saber cuantos
//todo alumnos hay  
let cantidad = prompt("cuantos alumnos hay?")
let alumnos = []

//todo Se va crear un array con 2 posiciones definidas (nombre y asistencia) dentro del array alumnos aunque aca no hago todo eso
for (i = 0; i < cantidad; i++ ) {
 //**esto quiere decir que en la posicion i (Nº de ciclo) se va a crear los valores de nombre
alumnos[i] = [prompt("nombre del alumno "+ (i+1)), 0]//1er lugar el valor y `,0` es la posición del dato
} //todo el valor de i es el de antes de la suma o resta

//todo una vez creado la lista de alumnos hay que tomar el presente (p) y ausente (a)

//todo no se hace todo en un for por que hay que modular las partes del codigo para entenderlo mejor
//todo y encontrar más rapido los errores 

//todo ademas no intento escribir el valor y preguntar si esta presente todo junto al mismo tiempon si 
//todo no que separo o modulo por que se hacen mejor las cosas asi

function tomarlista(numeroDeCiclo){
   let poa = prompt(`esta presente ${alumnos[numeroDeCiclo][0]}?`)  
//! para seleccionar la posición de un array que esta dentro de otro, se pone el array padre
//! despues pegado con corchetes la primera posiciony pegado con otros corchetes la segunda posición
   if (poa == "p" || poa == "P" ){alumnos[numeroDeCiclo][1] += 1}
}

for (i = 10; i > 0; i--) {
   for (nalumno in alumnos ) /**la posicion actual del ciclo se puede accerder con la variable recien creada nalumno */
{
   tomarlista(nalumno)
}
}

//*  Ahora hay que hacer una condición para saber si desaprueban los alumnos por las faltas, 
//* como esta condición se pone a todos, voy a hacer que con un for in recorra la lista el if

//? si faltaron el 20% del mes (6 dias) desaprueban
for (paso in  alumnos) {
   if (alumnos[paso][1] < 3 ) {alumnos[paso][2] = `quedado libre por ${ 10- (alumnos[paso][1])} falta/s`}
   else {alumnos [paso][2] = `pasado con ${alumnos[paso][1]} asistencias`}
}
//todo arriba hice todo junto pero lo apropiado es modular
for(nota in alumnos){ 
   alert(`El alumno ${alumnos[nota][0]} a ${alumnos[nota][2]}`) //!Busca como se haria con for of
}

//! calculadora 

//todo si con el codigo a ejecutar cambias los valores de la condicion de while, esta al ser su propio
//todo codigo, no toma los cambios, hay que usar un break 


/**let n1 = prompt("1er numero");
let n1n = Number(n1);
s: while(!(          n1 === "0" ||(    !(n1n == 0)  && Infinity > n1n )    )  ){

   n1 = prompt("1er numero")

   n1n = Number(n1)
   if(n1 === "0" ||(   !(n1n == 0) && Infinity > n1n )      ) {
      break s
   }
}

let qhacer = prompt(`el 1er numero se va a +, -, x o %  por otro`)
 
c: while(!(qhacer === "+"|| qhacer === "-" || qhacer === "x"|| qhacer ==="X" || qhacer === "*" || qhacer === "%" || qhacer === "/")){
   let qhacer = prompt(`el 1er numero se va a +, -, x o %  por otro`)
   if((qhacer === "+"|| qhacer === "-" || qhacer === "x"|| qhacer ==="X" || qhacer === "*" || qhacer === "%" || qhacer === "/")) {
      break c
   }
}

let n2 = prompt(`2do numero`)

let n2n = Number(n2);
s2: while(!(          n2 === "0" ||(    !(n2n == 0)  && Infinity > n2n )    )  ){

   n2 = prompt("2do numero")

   n2n = Number(n2)
   if(n2 === "0" ||(   !(n2n == 0) && Infinity > n2n )      ) {
      break s2
   }
}

if (qhacer == "+") {let result = n1n + n2n
   alert(result)}
else if (qhacer == "*" || qhacer == "x" || qhacer =="X") {let result = n1n * n2n
   alert(result)}
else if (qhacer == "-") {let result = n1n - n2n
   alert(result)}
else {let result = n1n / n2n
alert(result)} */ 



//! programación orientada 

//todo creación de objetos

//todo cuando se trabaja con objetos se aconseja usar const envez de let
//* La clase es como una plantilla que creamos para hacer un objeto

//* El constructor es una función que construye las propiedades del objeto

//* Los atributos son las particularidades del objeto creado

//* Metodo son las cosas que puede hacer el objeto osea acciones que se le aplican, como una funcion

//* Cuando se termina todo la clase es instanciada (es como llamarla)

class auto {
   constructor(marcaValor, modeloValor, patenteValor ){ //*estos son los parametros
      this.marcaNombre = marcaValor;             
      this.modeloNombre = modeloValor;
      this.patenteNombre = patenteValor;//* this equivale a escribir auto.patentenombre. Pero no se es escribe auto por que la declaracion ya esta dentro de auto, entonces se usa this
      //**con todo esto se dice que los atributos (this.tanto) tienen el valor de los parametros
      this.info = `auto marca ${this.marcaNombre}, modelo ${this.modeloNombre} y patente ${this.patenteNombre}`
   }
   verinfo () {
      document.write(this.info +'<br>')  
   }
}

/** con el siguiente codigo se ve como usar un objeto pre-echo y tambien como usar un metodo */
const c4 = new auto("bmw", "2020", "21drj") //* se suele usar const en vez de let
const c3 = new auto("bm", "202", "21dra")
const c2 = new auto("b", "20", "21drb")
// document.write(c4.info)
// document.write(c3.info)
// document.write(c2.info)

//* Los metodos no puden ser en funcion flecha ni llevan this
c2.verinfo()
c3.verinfo()
c4.verinfo()


//todo                             Caracteristicas de POO

//? Abstracción 
// Es tratar de hace lo menos complejo un objeto por ejemplo en el modelo auto anteriormente echo, se
// podia saltear la marca ya que con el modelo ya sabes de que marca es, esto tambien se aplica a los 
// metodos (no se va a crear verinfomasgrande y verinfochico si no que uno solo)

//? Modulación
// Es separar un problema grande en distintas partes para resolverlo mejor 

//? Encapsular 
// Es encapsular los datos para que no se tenga acceso desde otros lugares (me imagino que en bloques de codigo)

//? Polimorfismo
// es cuando 2 objetos de una misma clase hacen distintas cosas aplicandole obviamente el mismo metodo
// esto puede pasar facilmente usando if's en los argumentos de la clase

//todo  HERENCIA

//? Es cuando una clase hereda las propiedades y metodos de otra 

//? Para H y cambiar el constructor

class camioneta extends auto {
   constructor(modeloValor, patenteValor, cuatroX4){
      super(modeloValor, patenteValor);//* Con esto se heredan las propiedades
      this.cuatroX4 = cuatroX4;
   }
}
//! NO SE PUEDE TENER UN OBJETO CON EL MISMO NOMBRE DE LA CLASE 

//todo metodo estatico 
//? los metodos estaticos pueden ser llamados sin ´instanciar la clase´ osea sin crear un objeto 

class descapotable extends auto {
   constructor(marcaValor, modeloValor, patenteValor, nuevo){ //! si queres agregar mas propeidades se escribe el constructor y adentro la nueva propiedad. La nueva propiedad se pone como siempre pero las que se heredan se escribre super(NOMBRESDELASPROPIEDADES)
      super(marcaValor, modeloValor, patenteValor);
      this.new = nuevo 
   }   

   static runrun(nuevo){
      alert(`run run run${nuevo}`);
   }
}

//*De esta forma se puede llamar una clase (y metodo) sin crear un objeto. Cuando llamamos a un
//* metodo estatico asi, clase.metodo(), primero se ejecuta el metodo y desapués pasan a ejecutarse las 
//*propiedades al parecer* tambien se puden ingresar datos y va afuncionar 

descapotable.runrun("1","2", 3, 4);//! Esto devuelve run run run1

//todo getter and setter 

//?si se quiere modificar el valor de una propiedad no se usa un metodo cualquiera si no que set
//? funciona asi: 

class animales {
   constructor(especie, raza){
      this.especie = especie;
      this.raza = undefined;
   }

   set setraza(newvalue){this.raza = newvalue}
   get getraza(){return this.raza}
}

const perro = new animales("perro");

perro.setraza = true; //todo el valor del set se pone como si fuera una propiedad pero enrealidad es un metodo
document.write(`<br> ${perro.raza}`)
document.write(perro.getraza)//todo de esta forma se obtiene un valor 

//? se usa get y set por que los datos estan encapsulados por el const 


//!                                       PROBLEMAS DE COFLA
//todo crear un sistema en que cada celular tenga peso, color, ram, resolución de pantalla y camara

class celular {
   constructor(Xkg, Xcolor, Xgb, CXpx, DXpx){
      this.peso = Xkg;
      this.color = Xcolor;
      this.ram = Xgb;
      this.cameraR = CXpx; 
      this.Dresolution = DXpx;
      this.encendido = false; 
   }

   // prender(){
   //    if (this.encendido == false)
   //    {
   //       alert("Powererd by android")
   //       this.encendido = true;
   //    }
   //    else {alert("¿desea apagar el celular?")}
   // }

   // apagar(){
   //    if(this.encendido == true){
   //       alert("apagando")
   //       this.encendido = false; //! si no se cambiara esta variable, no se podria hacer el de reiniciar tan facil, lo mejor es usar una variable en estos casos
   //    }
   //    else {this.prender()}
   // }
   //!Aplicando abstraccion se puede resumir eso en:
   presspowerbutton (){
      if (this.encendido == false) {alert("Powered by android"); this.encendido = true}
      else {alert("turning off..."); this.encendido == false}
   }



   reiniciar(){
      if (this.encendido == true){
         this.apagar()
         this.prender()
      }
      else (this.prender)
   }


   tomarfoto() {
      if (this.encendido == true ){alert(`se tomo foro en resolucion ${CXpx}`)}
   }


   grabar(){
      if(this.encendido == true){alert(`se grabo en ${CXpx}`)}
   }
}



class celularAltagama extends celular {
   constructor(Xkg, Xcolor, Xgb, CXpx, DXpx, CEXpx){ //todo no es muy bueno nombrar a las propiedades por sus medidas
   super (Xkg, Xcolor, Xgb, CXpx, DXpx);
   this.RCextra = CEXpx
   }
   
   grabarencamaralenta(){
      if(this.encendido == true){
         alert("Se esta grabando en camara lenta")
      }
   }

   reconocimientofacial(){
      if(this.encendido == true){
         alert("Se esta reconociendo")
      }
   }

   mostrarinfo(){
      document.write(`<br>Peso: ${this.peso} <br>`)
      document.write(`Color:${this.color} <br>`)
      document.write(`Ram:${this.ram} <br>`)
      document.write(`Resolución de camara: ${this.cameraR} <br>`)
      document.write(`Resolución de display: ${this.Dresolution} <br>`)
   }
}

//! tarea: mostrar info de los celulares
const motoe40 = new celularAltagama("100g", "pink", "4GB", "48px", "FullHD+", "16px");
const gtneo2 = new celularAltagama("110g", "green", "6GB", "32px", "FullHD", "16px");

motoe40.mostrarinfo();
gtneo2.mostrarinfo();


//! Tarea echa, ahora el problema de las apps es hace lo mismo, lo de ayudar a elegir es mostrar 
//! las propiedades del objeto, sin embargo no da para hacer lo mismo y menos cuando no aprendes nada
//! extra, ya que en el primer ejercicio se abstrajo 

//todo                   Metodos de cadenas

let xcadena = new String ("cadena cualquiera principal"); 
let ycadena = ("cadena cualquiera, cualquiera");





let concat = xcadena.concat("+ X texto agregado con concat");
document.write(`<br> ${concat}`);//* "cadena cualquiera+ X texto agregado con concat"


let starwith = xcadena.startsWith(ycadena); //? verifica si un string empieza con otro (el otro es el input)
document.write(starwith);//* "true"
//todo es lo mismo para el metodo ensWith()

let encontrar = xcadena.includes(ycadena);//? verifica en el string esta el string de input del metodo
document.write(encontrar);//* "true"


let indexof = xcadena.indexOf("cualquiera");//? hace lo mismo que el metodo anterior pero te devuelve
                                            //?  la posicion de la letra, como en un array se empieza
                                            //? a contar desde el 0, creo que se puede manipular cada
                                            //? letra por separado por que son datos de un arrat cada1
                                            //todo si no encuentra el string, devuelve -1
document.write(indexof);//* 7 

let lastIndexOf = ycadena.lastIndexOf("cualquera");//? lo mismo que indexof, pero busca de adelante 
                                                   //? para atras, de no haber devuelve -1
document.write(lastIndexOf);


let padInString = xcadena.padStart(30, "r");//? el primer dato establece de cuanto va a ser el string
                                          //? y el segundo con que se va a rellenar, en este caso
                                          //? al principio se rellena (padStart) o al final (padEnd)

document.write(padInString);



let repeat = xcadena.repeat(2);//? repite el string segun el input 

document.write(`<br> ${repeat}`)//*" cadena cualquiera principalcadena cualquiera principal"

function f (a){document.write(`<br> ${a}`)}



let separarPor = xcadena.split(" ");//? separa el string cada vez que encuentra el input que elejimos
// let separarPor = xcadena.split(""); //todo esto devuelve cada letra separada
// let separarPor = xcadena.split("cualquiera") ;//todo asi elimina el string de input y separa las palabras que estan antes y depués, esto devulveria "cadena , principal"  
f(separarPor); //* "cadena,cualquiera,principal" aparece separado por , por que es un array y se separan asi los datos


let substring = xcadena.substring(0,4);//? Te crea un string desde las posiciones que elegis, la ultima
                                       //? posición no se incluye, hace de parate no'  más

f(substring);//* "cade"



let toLowerUppercase = xcadena.toUpperCase();
f(toLowerUppercase); //* devuelve en mayuscula, con lowercase devuelve todo en minuscula


let n = [890, 109];
let toString = n.toString();///? Pasa a String
document.write(`<br> ${toString[5]}`);//* "5" la coma pasa a string y la cuenta pero los espacios no 
                                      //* (por lo meno es asi en firefox)



let trim = xcadena.trim();//? saca los espacios en blanco al principio y final
                          //* trimStart() saca al principio y trimEnd al final 

//todo                  Metodos de Cadenas (transformadores)


let xarray = ["Este es", " un array", " cualquiera"];
let yarray = ["Otro array", " Cualquiera"];


let pop = xarray.pop();   
document.write(`<br> ${xarray}`)//* "este es un array"
document.write(`<br> ${pop}`)//* "cualquiera"
                            //? pop elimina el ultimo dato del array al que se le aplica
                            //? y devuelve ese ultimo dato al metodo que lo llamo
                            //? el metodo shift hace lo mismo pero elimina el del principio

      
let push = xarray.push(" cualquiera");
document.write(`<br> ${xarray}`);
document.write(`<br> ${push}`);
                       //? push agrea una dato al array y devuelve la cantidad de datos 
                       //? (no de vuelve el indice del array, osea su posición)

            
//todo xarray.reverse(); no necesita argumentos, no devuelve nada y pone el orden al revez
                  //todo del array: " cualquiera" " un array" "Este es"


let unshift = yarray.unshift("Este es")//* "Este es" "Otro array" "cualquiera"
                                       //? agrega una array al principio y devuelve
                                       //? el length osea como push pero al principio



let sort = yarray.sort()//* " Calquiera" "Este es" "Otro array"
                        //? ordena alfabeticamente a los string y a los number por valor
                        //? el orden de mayusculas a minusculas tiene mas importancia 
                        //? que el alfabetico, algo que empieza con un string vacion tiene
                        //? más prioridad que las mayusculas
document.write(`<br> ${yarray}`)


let split = xarray.split() 
                           
                           //* el primer argumento es la posicion del array a la que se va
                           //* a aplicar los cambios, el segundo dice cuantos elementos se
                           //* van a eliminar contando del que se empieza, y después se 
                           //* agregan nuevos valores al array 
                           //* escribiendo -1 te lo pone al final y en argumento 2 si pones
                           //* 0 no borra (ns que pasa si pones -1)