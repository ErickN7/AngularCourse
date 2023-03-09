class Heroe{
    // alterEgo: string;
    // edad: number;
    // nombreReal: string;

    constructor(
        public alterEgo: string,
        public edad: number,
        public nombreReal: string
    ){}
}

const ironman = new Heroe('Ironman', 47, 'Tony');
console.log(ironman);