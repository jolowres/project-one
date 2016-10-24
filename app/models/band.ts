export class Band {
    id: number;
    name: string;
    genre: string;

    //TODO sort this out and make genre a drop down!!
    constructor(id: number, name: string, genre: string) {
        this.id = id;
        this.name = name;
        this.genre = genre;
    }
}
