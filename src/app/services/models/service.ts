export class Service {
    id: number
    title: string
    description: string
    id_category: number

    constructor(id: number, title: string, description: string, id_category:number) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.id_category = id_category;
    }
}