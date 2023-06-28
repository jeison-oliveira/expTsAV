export interface MigracaoDB {
  consultas?: Array<{ model: string; query: string }>;
}

const migracoes: Map<number, MigracaoDB> = new Map<number, MigracaoDB>();

/*
migracoes.set(1, {
  consultas: [
    {
      model: 'Dependentes',
      query: `ALTER TABLE Dependentes ADD atributo_adicionado VARCHAR(45);`,
    },
  ],
});

migracoes.set(2, {
  consultas: [
    {
      model: 'Dependentes',
      query: `ALTER TABLE Dependentes ADD atributo_adicionado_2 VARCHAR(45) NOT NULL DEFAULT "";`,
    },
  ],
});
*/

migracoes.set(7, {
  consultas: [
    // {
    //   model: 'Funcionarios',
    //   query: `ALTER TABLE Funcionarios DROP COLUMN idade;`,
    // },
    // {
    //   model: 'Funcionarios',
    //   query: `ALTER TABLE Funcionarios DROP COLUMN fone;`,
    // },
    {
      model: 'Funcionarios',
      query: `ALTER TABLE Funcionarios ADD COLUMN senha char(100) not null AFTER name;`,
    },
  ],
});
// migracoes.set(6, {
//   consultas: [
//     // {
//     //   model: 'Funcionarios',
//     //   query: `ALTER TABLE Funcionarios DROP COLUMN idade;`,
//     // },
//     // {
//     //   model: 'Funcionarios',
//     //   query: `ALTER TABLE Funcionarios DROP COLUMN fone;`,
//     // },
//     {
//       model: 'Funcionarios',
//       query: `ALTER TABLE Funcionarios DROP COLUMN endereco;`,
//     },
//   ],
// });

export { migracoes };
