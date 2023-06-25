import { Request, Response } from 'express';
import { Departamentos } from '../models/Departamentos';
import { ValidationError, ValidationErrorItem } from 'sequelize';

const index = async (req: Request, res: Response) => {
  const departamentos = await Departamentos.findAll();
  // console.log(req.csrfToken());
  res.render('departamento/index', {
    departamentos: departamentos.map((d) => d.toJSON()),
    csrf: req.csrfToken(),
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
const read = async (req: Request, res: Response) => {
  const { id } = req.params;
  const departamento: Departamentos | null = await Departamentos.findByPk(id);
  let action = '/departamento/update/' + id;
  if (req.route.methods.get) {
    console.log('É get');
    try {
      if (!departamento) throw new Error('Departamento não encontrado');
      res.render('departamento/read', {
        csrf: req.csrfToken(),
        departamento: departamento.toJSON(),
        action,
      });
    } catch (error) {
      return res.status(500).json({ error: error?.toString() });
    }
  } else {
    console.log('É post');
    res.redirect('departamento');
  }
};
const update = async (req: Request, res: Response) => {
  const { id } = req.params;
  const departamento: Departamentos | null = await Departamentos.findByPk(id);
  let action = '/departamento/update/' + id;
  if (req.route.methods.get) {
    // console.log('É get');
    try {
      if (!departamento) throw new Error('Departamento não encontrado');
      res.render('departamento/update', {
        csrf: req.csrfToken(),
        departamento: departamento.toJSON(),
        action,
      });
    } catch (error) {
      return res.status(500).json({ error: error?.toString() });
    }
  } else {
    // console.log('É post');
    try {
      if (!departamento) throw new Error('Departamento não encontrado');
      await Departamentos.update({ ...req.body }, { where: { id } });
      res.redirect('/departamento');
    } catch (e: any) {
      console.log(e);
      res.render('departamento/update', {
        csrf: req.csrfToken(),
        departamento: { ...req.body },
        action,
        errors: e.errors,
      });
    }
  }
};
const del = async (req: Request, res: Response) => {
  const { id } = req.params;
  const departamento: Departamentos | null = await Departamentos.findByPk(id);
  if (req.route.methods.get) {
    // console.log('É get');
    res.redirect('/departamento');
  } else if (req.route.methods.post) {
    // console.log('É post');
    try {
      if (!departamento) throw new Error('Departamento não encontrado');
      await Departamentos.destroy({ where: { id } });
    } catch (e: any) {
      console.log(e);
    } finally {
      res.redirect('/departamento');
    }
  }
};

export default { index, create, read, update, del };
