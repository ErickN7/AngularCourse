function sumar(a: number,b: number): number{
    return a + b;
}

const sumarFlecha = (a: number,b: number): number => {
    return a + b;
}

function multiplicar(numero: number, otroNumero?: number, base: number = 2): number{
    return numero * base;
}

// const resultado = sumar(2, 3);
// console.log(resultado);
// const multiplicarResult = multiplicar(3,5);
// console.log(multiplicarResult); 

interface PersonajeLOR{
    nombre: string;
    hp: number;
    mostrarHp: ()=>void;//declar una funcion en la interface
}

function curar(personaje: PersonajeLOR, curarX): void{
    personaje.hp += curarX;
    // console.table(personaje);
}

const nuevoPersonaje: PersonajeLOR={
    nombre: 'Strider',
    hp: 50,
    mostrarHp(){
        console.log('Puntos de vida: ', this.hp);
    }
};

curar(nuevoPersonaje, 20);
nuevoPersonaje.mostrarHp();