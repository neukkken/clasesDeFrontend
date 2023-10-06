//OBJETOS

const persona1 = {

    nombre : "Santiago",
    apellido : "Lasso",
    edad : 19,
    celular : 777,
    gustos : ['Musica', 'libros', 'texto'],
    casado : true,
    residencia : {
        barrio : "Centro",
        pais : "Colombia",
        ciudad: "Popayán",
        direccion: "Mucho texto Cr2"
    },

    caminar : function (){
        console.log("Caminar pa")
    },

    sentarse : function (){
        silla.estado="Usada por "+persona1.nombre
    },

    levantarse : function (){
        silla.estado="Sin Usar"
    }


}



// console.log(persona1.caminar())

const personalComputer = {
    motherboard : "Motherboard Intel® Z790 LGA 1700 ATX",
    procesador : "Intel i9 9700k",
    memoriaram : "Hyperx 16GBx2",
    almacenamiento : "Unidad Solida Kingston M.2 Nv2 Nvme Pcie 500gb",
    tarjetagrafica : "GeForce RTXTM 3060 Ti",
    fuente : "Atx12v Poder Eps12v 500w",
    estado : "Apagado",

    

}


// console.log(personalComputer.estado)
// console.log(personalComputer.encender())
// console.log(personalComputer.estado)
// console.log(personalComputer.apagar())
// console.log(personalComputer.estado)

const bolso = {
    color: "negro",
    bolsillos: 10,
    material: "tela",
    contenido: {
        bolsillos : ["Cargador",
        "Cartuchera",
        "Laptop",
        "Termo",
        null, 
        null, 
        null, 
        null,
        null, 
        null
    ]
    },

    llenarBolsillos : function (objeto, bolsillo){
        this.contenido.bolsillos[bolsillo] = objeto
    }

}

// console.log(bolso.contenido)

// console.log(bolso.llenarBolsillos("lapicero", 9))


const silla = {
    colores: ["Azul", "Morado", "Negro", "Rojo"],
    soportelumar: false,
    estado: "Sin usar",
    medidas: {
        alto: "120 cm",
        ancho: "45 cm",
        profundidad: "50cm"
    }
}






class Pc {
    constructor(motherboard,
        procesador,
        memoriaram,
        almacenamiento,
        tarjetagrafica,
        fuente,
        estado){
            this.motherboard = motherboard;
            this.procesador = procesador;
            this.memoriaram = memoriaram;
            this.almacenamiento = almacenamiento;
            this.tarjetagrafica = tarjetagrafica;
            this.fuente = fuente;
            this.estado = estado;
    }

    encender(){
        this.estado = "Encendido"
    }

    apagar(){
        this.estado = "Apagado"
    }
}

let pc1 = new Pc("Motherboard Intel® Z790 LGA 1700 ATX",
"Intel i9 9700k",
"Hyperx 16GBx2",
"Unidad Solida Kingston M.2 Nv2 Nvme Pcie 500gb",
"GeForce RTXTM 3060 Ti",
"Atx12v Poder Eps12v 500w",
"Apagado")

let pc2 = new Pc("Motherboard ASUS MH800",
"Intel i12 10700K",
"Hyperx 32GBx2",
"Unidad Solida Kingston M.2 Nv2 Nvme Pcie 2TB",
"GeForce RTXTM 4090 Ti",
"Atx12v Poder Eps12v 800w",
"Encendido")

let compus = []
compus.push(pc1, pc2);

console.log("Computadores")
console.log(compus)



class Bolso{
    constructor(color,
        bolsillos,
        material
        ){
            this.color = color;
            this.bolsillo = bolsillos;
            this.material = material;
    }

    llenarBolsillos(objeto, bolsillo){
        this.contenido.bolsillos[bolsillo] = objeto
    }

}

let bolso1 = new Bolso("Negro", 3, "Cuero")
let bolso2 = new Bolso("Blanco", 13, "Cuero")
let bolso3 = new Bolso("Azul", 2, "Tela")

let bolsos = [];
bolsos.push(bolso1, bolso2, bolso3);

console.log("Bolsos")
console.log(bolsos)


class Silla{
    constructor(color,
        soportelumar,
        estado){
            this.color = color;
            this.soportelumar = soportelumar;
            this.estado = estado;
    }
}

let silla1 = new Silla ("Azul", true, persona1.sentarse());
let silla2 = new Silla ("Azul", false, "Sin usar");

let sillas = [];
sillas.push(silla1, silla2);

console.log("Sillas")
console.log(sillas)

// console.log(silla.estado)
// console.log(persona1.sentarse())
// console.log(silla.estado)



// console.log("Medidas de la silla: Alto: "+"("+silla.medidas.alto+")"+" Ancho: "+"("+silla.medidas.ancho+")"+" Profundidad: "+"("+silla.medidas.profundidad+")"+" Y colores disponibles "+"("+silla.colores[0]+", "+silla.colores[3]+")")

// console.log("Mother Board: "+"("+personalComputer.motherboard+")"+" procesador: "+"("+personalComputer.procesador+")"+" y Tarjeta Grafica de la pc:" + "("+personalComputer.tarjetagrafica+")")

// console.log("Color del bolso "+"("+bolso.color+")"+" Numero de bolsillos "+"("+bolso.bolsillos+")")


///CLASES

class Persona{
    constructor (nombre, edad){
        this.nombre = nombre
        this.edad = edad
    }

    saludar() {
        console.log("Ennove")
    }
}

class Vehiculo{
    constructor ({
        marca: marca,
        color: color
    }){
        this.nombre = nombre
        this.edad = edad
    }



    encender() {
        console.log("Ennove prendio")
    }
}

