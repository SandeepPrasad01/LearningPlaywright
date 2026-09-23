interface Excetable{
    name: string;
    run(): void;
    getStatus(): string;
}

class testCase implements Excetable{
    name: string;
    constructor(name: string) {
        this.name = name;
    }
    run(): void {
        console.log("[RUN] " + this.name);
    }
    getStatus(): string {
        return "PASS";
    }
}