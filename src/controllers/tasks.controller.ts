import { Request, Response } from "express";
import { tasksList } from "../data/tasksList";
import { Tasks } from "../models/tasks";

export class TasksController {
  public list(description: string, detail: string) {
    let lista = tasksList;

    if (description) {
      lista = tasksList.filter((item) => item.description === description);
    }

    if (detail) {
      lista = tasksList.filter((item) => item.detail == detail);
    }

    let listaRetorno = lista.map((tasks) => {
      return tasks.getTasks();
    });

    return listaRetorno;
  }

  public update(id: string, description: string, detail: string) {
    const tasks = tasksList.find((item) => item.id === id);

    if (!tasks) {
      return undefined;
    }

    tasks.description = description;
    tasks.detail = detail;

    return tasksList;
  }

  // public createTasks(req: Request, res: Response) {
  //   const { description, detail } = req.body;
  //   const { id } = req.params;

  //   // const tasks = tasksList.find((task) => task.id === id);

  //   // if (!tasks) {
  //   //   return res.status(404).json({ message: "Growdever não encontrado!" });
  //   // }
  //   tasksList.push(description, detail);
  //   // return tasksList;
  // }

  public create(description: string, detail: string) {
    const task = new Tasks(description, detail);
    tasksList.push(task);
    return tasksList;
  }
}

// import { growdeversList } from "./../data/growdeversList";
// import { Request, Response } from "express";
// import { Growdever } from "../models/growdever";

// export class GrowdeverController {
//     public list(nome?: string, idade?: number) {
//         let lista = growdeversList;

//         if (nome) {
//             lista = growdeversList.filter((item) => item.nome === nome);
//         }

//         if (idade) {
//             lista = lista.filter((item) => item.idade == idade);
//         }

//         let listaRetorno = lista.map((growdever) => {
//             return growdever.getGrowdever();
//         });

//         return listaRetorno;
//     }

//     public update(id: string, nome: string, idade: number) {
//         const growdever = growdeversList.find((item) => item.id === id);

//         if (!growdever) {
//             return undefined;
//         }

//         growdever.nome = nome;
//         growdever.idade = idade;

//         return growdeversList;
//     }

//     public createSkill(req: Request, res: Response) {
//         const { skill } = req.body;
//         const { id } = req.params;

//         const growdever = growdeversList.find(
//             (growdever) => growdever.id === id
//         );

//         if (!growdever)
//             return res
//                 .status(404)
//                 .json({ message: "Growdever não encontrado!" });

//         // to-do
//     }

//     public removeSkill() {
//         // to-do
//     }

//     public create(nome: string, cpf: number, idade: number, skills?: string[]) {
//         const growdever = new Growdever(nome, cpf, idade, skills);
//         growdeversList.push(growdever);
//     }

//     public getByCpf(cpf: number) {
//         return growdeversList.find((item) => item.cpf === cpf);
//     }
// }
