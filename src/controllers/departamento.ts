import { Request, Response } from 'express';
import { Departamentos } from '../models/Departamentos';

const index = async (req: Request, res: Response) => {
  const departamentos = await Departamentos.findAll();
  res.render('departamento/index', {
    departamentos: departamentos.map((d) => d.toJSON()),
  });
};
const create = async (req: Request, res: Response) => {
  if (req.route.methods.get) {
    res.render('departamento/create', {
      csrf: req.csrfToken(),
    });
  } else {
    const departamento = req.body;
    try {
      await Departamentos.create(departamento);
      res.redirect('/departamento');
    } catch (e: any) {
      console.log(e);
      res.render('departamento/create', {
        departamento,
        errors: e.errors,
        csrf: req.csrfToken(),
      });
    }
  }
};
const read = async (req: Request, res: Response) => {};
const update = async (req: Request, res: Response) => {};
const del = async (req: Request, res: Response) => {};

export default { index, create, read, update, del };
