export class Todo {
    constructor(
        public readonly id: number | null, 
        public title: string, 
        public completed: boolean,
        public readonly createdAt: Date
    ){}

    markedCompleted() {
         if (this.completed) {
            throw new Error("Todo is already completed");
        }
        this.completed = true;
    }
}