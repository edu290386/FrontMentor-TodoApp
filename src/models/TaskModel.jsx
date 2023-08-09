export class TaskModel {
  constructor(id, task, createdAt = null, doneAt = null, deletedAt = null) {
    this.id = id;
    this.task = task;
    console.log(createdAt);
    this.createdAt = createdAt == null ? new Date() : new Date(createdAt)
    this.doneAt = doneAt == null ? null : new Date(doneAt)
    this.deletedAt = deletedAt == null ? null : new Date(deletedAt)
}
}
