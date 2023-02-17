let habilidades:string[] = ['Bash','Counter','Healing'];
// habilidades.push(1);

interface Personaje{
    nombre: string;
    hp: number;
    habilidades: string[];
    puebloNatal?: string;//El ? es para marcar que la propiedad es opcional
}

const personaje:Personaje = {
    nombre: 'Strider',
    hp: 100,
    habilidades: ['Bash','Counter','Healing']
}

personaje.puebloNatal = 'Pueblo Paleta';

console.table(personaje);