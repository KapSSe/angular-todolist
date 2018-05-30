export default class Task {
    public name: string;
    public desc: string;
    public status: string;

    constructor(name: string, desc: string, status: string ) {
        this.name = name;
        this.desc = desc;
        this.status = status;
    }
}
