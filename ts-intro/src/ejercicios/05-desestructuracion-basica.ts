//DESESTRUCTURACION DE OBJETOS

interface Reproductor {
    volumen: number;
    segundo: number;
    cancion: string;
    detalles: Detalles
}

interface Detalles{
    autor: string;
    anio: number;
}

const reproductor: Reproductor ={
    volumen: 90,
    segundo: 36,
    cancion: 'Mess',
    detalles: {
        autor: 'Ed Sheeran',
        anio: 2015,
    }
}

const { volumen, segundo, cancion, detalles } = reproductor;
const {autor} = detalles;//Alternativa 1
const {detalles:{anio}} = reproductor;//Alternativa 2

// console.log('El volumen actual es : ' + volumen);
// console.log('El segundo actual es : ' + segundo);
// console.log('La cancion es : ' + cancion);
// console.log('El autor es : ' + autor);


//DESESTRUCTURACION DE ARRAYS


const dbz: string[] = ['Goku','Vegeta','Trunks'];
const [ goku, vegeta ] = dbz;
const [,,p3] = dbz;


console.log('Personaje 1: ',goku)
console.log('Personaje 2: ',vegeta)
console.log('Personaje 3: ',p3)