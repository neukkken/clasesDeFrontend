eleccion = prompt("Que ejercicio quieres ver?")
if(eleccion==1){
    var lista = [];

    function insertarDatos(num){
        lista.push(num)
    }

    for(let i = 0; i < 10;i+=1){
        num = parseInt(prompt("Digite 10 numeros"))
        insertarDatos(num)
        console.log(lista[i])
    }

    lista.sort();

    console.log("Lista ordenada: "+list)

}else if(eleccion==2){
    arrayNum = [-10,-9,-8,-7,-6,-5,-4,-3,-2,-1,0,1,2,3,4,5,6,7,8,9,10]

    let start=(parseInt(prompt("Digite el inicio")));
    let end=(parseInt(prompt("Digite el final")));

    function imprimir(start, end){
        if(arrayNum.includes(start) & arrayNum.includes(end)){
            for(let i=arrayNum.indexOf(start); i<=arrayNum.indexOf(end); i++){
                console.log(arrayNum[i])
            }
        }else{
            alert("a")
        }
    }

    console.log(imprimir(start, end))
}else if(eleccion==3){

    // 32 | 2
    // 16 | 2
    // 8  | 2
    // 4  | 2
    // 2  | 2
    // 1  |
    
    // 2x2x2x2x2
    
    // 15 | 3
    // 5  | 5
    // 1
    
    // 3x5 
    
    // 2, 3, 5, 7, 11, 13, 17, 19, 23, 29

    let k = 32;

    function des(num){


    for(let i = 0; i<20; i++){
        if(num%2==0){
            num = num/2;
            console.log(num)
        }else if(num%3==0){
            num = num/3;
            console.log(num)
        }else if(num%5==2){
            num = num/5;
            console.log(num)
        }
    }
}

    console.log(des(k))

}else if(eleccion==4){

    let numIngresado = 1;
    let acu = 0;
    let cont = 0;

    while(numIngresado != 0){
        numIngresado = parseInt(prompt("Digite un numero: "))
        acu += numIngresado;
        cont++;
    }

    console.log("Acumulado de los numeros ingresados: "+acu+" Cantidad de numeros ingresados: "+(cont-1))
    
}else if(eleccion==5){

    let maxNum = 2048;
    let acu = 1;
    
    for(let i = 0; i<maxNum; i++){
        acu = acu+acu;
        if(acu<=maxNum){
            console.log(acu)
        }
    }
    
}else if(eleccion==6){

    let texto = "Hola como estamos"
    let busqueda = "o";
    let cont = 0;
    
    
    for(let i = 0; i<texto.length; i++){
        if(texto[i].includes(busqueda)){ // text[i] == busqueda
            cont++
        }
    
    }
    
    (cont>0)?console.log("En la cadena de texto: "+"("+texto+")"+" hay "+cont+" ("+ busqueda+")"): console.log("No hay"+" ("+ busqueda+")");

}
