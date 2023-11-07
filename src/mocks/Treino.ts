export type Exercicio = {
  nome: string;
  series: number;
  repeticoes: number;
  carga: number;
};

export type Treino = {
  nome: string;
  exercicios: Exercicio[];
};

const treino1: Treino = {
  nome: 'Perna',
  exercicios: [
    {
      nome: 'Agachamento',
      series: 3,
      repeticoes: 10,
      carga: 50,
    },
    {
      nome: 'Leg Press',
      series: 3,
      repeticoes: 10,
      carga: 50,
    },
  ],
};

const treino2: Treino = {
  nome: 'Costa',
  exercicios: [
    {
      nome: 'Remada',
      series: 3,
      repeticoes: 10,
      carga: 50,
    },
    {
      nome: 'Puxada',
      series: 3,
      repeticoes: 10,
      carga: 50,
    },
  ],
};

const treino3: Treino = {
  nome: 'Peito',
  exercicios: [
    {
      nome: 'Supino',
      series: 3,
      repeticoes: 10,
      carga: 50,
    },
    {
      nome: 'Crucifixo',
      series: 3,
      repeticoes: 10,
      carga: 50,
    },
  ],
};

const treino4: Treino = {
  nome: 'Biceps',
  exercicios: [
    {
      nome: 'Rosca',
      series: 3,
      repeticoes: 10,
      carga: 50,
    },
    {
      nome: 'Rosca Inversa',
      series: 3,
      repeticoes: 10,
      carga: 50,
    },
  ],
};

const treino5: Treino = {
  nome: 'Triceps',
  exercicios: [
    {
      nome: 'Triceps Testa',
      series: 3,
      repeticoes: 10,
      carga: 50,
    },
    {
      nome: 'Triceps Frances',
      series: 3,
      repeticoes: 10,
      carga: 50,
    },
  ],
};

const treino6: Treino = {
  nome: 'Ombro',
  exercicios: [
    {
      nome: 'Desenvolvimento',
      series: 3,
      repeticoes: 10,
      carga: 50,
    },
    {
      nome: 'Elevação Frontal',
      series: 3,
      repeticoes: 10,
      carga: 50,
    },
  ],
};

const treino7: Treino = {
  nome: 'Abdomen',
  exercicios: [
    {
      nome: 'Abdominal',
      series: 3,
      repeticoes: 10,
      carga: 50,
    },
    {
      nome: 'Prancha',
      series: 3,
      repeticoes: 10,
      carga: 50,
    },
  ],
};

const treino8: Treino = {
  nome: 'Panturrilha',
  exercicios: [
    {
      nome: 'Panturrilha',
      series: 3,
      repeticoes: 10,
      carga: 50,
    },
    {
      nome: 'Panturrilha Sentado',
      series: 3,
      repeticoes: 10,
      carga: 50,
    },
  ],
};

const treino9: Treino = {
  nome: 'Antebraco',
  exercicios: [
    {
      nome: 'Rosca Punho',
      series: 3,
      repeticoes: 10,
      carga: 50,
    },
    {
      nome: 'Rosca Inversa Punho',
      series: 3,
      repeticoes: 10,
      carga: 50,
    },
  ],
};

const treinos = [
  treino1,
  treino2,
  treino3,
  treino4,
  treino5,
  treino6,
  treino7,
  treino8,
  treino9,
];

export default treinos;
