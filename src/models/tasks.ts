import { v4 as createUuid } from "uuid";

export class Tasks {
  //private _userId: string;
  private _id: string;

  constructor(
    private _description: string,
    private _detail: string,
    private _userName?: string,
    private _tasks?: string[],
    private _token?: string
  ) {
    //this._userId = createUuid();
    this._id = createUuid();
    //this._tasks = this._tasks ?? [];
  }

  // public get userName() {
  //   return this._userName ?? "";
  // }

  // public set userName(userName: string) {
  //   this._userName = userName;
  // }

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

  // public get userId() {
  //   return this._userId;
  // }

  public get id() {
    return this._id;
  }

  // public get tasks(): string[] {
  //     return this._tasks ?? [];
  // }

  // Adapter
  // public user() {
  //   return {
  //     userId: this._userId,
  //     userName: this._userName,
  //     tasks: this._tasks,
  //   };
  // }

  public getTasks() {
    return {
      id: this._id,
      description: this._description,
      detail: this._detail,
    };
  }
}

// import { v4 as createUuid } from "uuid";

// export class Growdever {
//     private _id: string;

//     constructor(
//         private _nome: string,
//         private _cpf: number,
//         private _idade: number,
//         private _skills?: string[]
//     ) {
//         this._id = createUuid();
//         this._skills = this._skills ?? [];
//     }

//     public get cpf() {
//         return this._cpf;
//     }

//     public get nome() {
//         return this._nome;
//     }

//     public set nome(nome: string) {
//         this._nome = nome;
//     }

//     public get idade() {
//         return this._idade;
//     }

//     public set idade(idade: number) {
//         this._idade = idade;
//     }

//     public get id() {
//         return this._id;
//     }

//     public get skills(): string[] {
//         return this._skills ?? [];
//     }

//     // Adapter
//     public getGrowdever() {
//         return {
//             nome: this._nome,
//             idade: this._idade,
//             cpf: this._cpf,
//             id: this._id,
//             skills: this._skills,
//         };
//     }
// }
