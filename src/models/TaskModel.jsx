export class TaskModel {
    constructor( task, status, deletedAt, doneAt, createdAt, id ){
        this.task = task;
        this.status = status;
        this.deletedAt = deletedAt;
        this.doneAt = doneAt;
        this.createdAt = createdAt;
        this.id = id;
    }

}