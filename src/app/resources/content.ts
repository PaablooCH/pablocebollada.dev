export const me = {
    name: "Pablo",
    firstName: "Cebollada Hernández",    
    role: "Software Engineer",
    location: "Spain",
    pageName: "Pablo Cebollada",
    nickname: "πPablo",
    GetFullName(): string {
        return this.name + " " + this.firstName;
    }
}
