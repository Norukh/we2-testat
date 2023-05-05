export class Note {
  public createdAt!: Date;
  public title!: string;
  public importance!: number;
  public dueDate?: Date | string = "Someday";
  public finished!: boolean;
  public description?: string;
  public _id?: string;

  constructor() {
    this.createdAt = new Date();
  }
}
