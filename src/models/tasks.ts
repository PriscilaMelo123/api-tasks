import { v4 as createUuid } from "uuid";

export class Tasks {
  private _id: string;

  constructor(private _description: string, private _detail: string) {
    this._id = createUuid();
  }

  public get description() {
    return this._description;
  }

  public set description(description: string) {
    this._description = description;
  }

  public get detail() {
    return this._detail;
  }

  public set detail(detail: string) {
    this._detail = detail;
  }

  public get id() {
    return this._id;
  }

  public getTasks() {
    return {
      id: this._id,
      description: this._description,
      detail: this._detail,
    };
  }
}

export class listaTasks extends Tasks {
  listaTasks = Tasks;
}
