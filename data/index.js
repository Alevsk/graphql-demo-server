export const movies = [
  {
    name: 'Geostorm (2017)',
    score: 5.8,
    year: 2017,
    actors: [{
      name: 'Gerard Butler',
      age: 52,
      country: 'USA',
    },{
      name: 'Jim Sturgess',
      age: 26,
      country: 'Germany',
    },{
      name: 'Abbie Cornish',
      age: 30,
      country: 'Mexico',
    },],
    comments: [{
      user: 'Sassy',
      commentary: 'Me encanto la pelicula',
      timestamp: (new Date()).toString(),
    },
    {
      user: 'Silver',
      commentary: 'Esta palomera',
      timestamp: (new Date()).toString(),
    },
    {
      user: 'Twinkle Toes',
      commentary: 'Mejor vayan a ver coco',
      timestamp: (new Date()).toString(),
    }],
  },
  {
    name: 'Happy Death Day (2017)',
    score: 6.7,
    year: 2017,
    actors: [{
      name: 'Jessica Rothe',
      age: 42,
      country: 'USA',
    },{
      name: 'Israel Broussard',
      age: 16,
      country: 'Germany',
    },{
      name: 'Ruby Modine',
      age: 80,
      country: 'Mexico',
    },{
      name: 'Charles Aitken',
      age: 34,
      country: 'Mexico',
    },],
    comments: [{
      user: 'Sassy',
      commentary: 'Me encanto la pelicula',
      timestamp: (new Date()).toString(),
    },
    {
      user: 'Silver',
      commentary: 'Esta palomera',
      timestamp: (new Date()).toString(),
    },
    {
      user: 'Twinkle Toes',
      commentary: 'Mejor vayan a ver coco',
      timestamp: (new Date()).toString(),
    }],
  },
  {
    name: 'Blade Runner 2049 (2017)',
    score: 8.5,
    year: 2017,
    actors: [{
      name: 'Harrison Ford',
      age: 65,
      country: 'USA',
    },{
      name: 'Ryan Gosling',
      age: 46,
      country: 'Mexico',
    },],
    comments: [{
      user: 'Sassy',
      commentary: 'Me encanto la pelicula',
      timestamp: (new Date()).toString(),
    },
    {
      user: 'Silver',
      commentary: 'Esta palomera',
      timestamp: (new Date()).toString(),
    },
    {
      user: 'Twinkle Toes',
      commentary: 'Mejor vayan a ver coco',
      timestamp: (new Date()).toString(),
    }],
  },
  {
    name: 'It (2017)',
    score: 7.8,
    year: 2017,
    actors: [{
      name: 'Bill Skarsgård',
      age: 52,
      country: 'USA',
    },{
      name: 'Jaeden Lieberher',
      age: 26,
      country: 'Germany',
    },{
      name: 'Finn Wolfhard',
      age: 30,
      country: 'Mexico',
    },],
    comments: [{
      user: 'Sassy',
      commentary: 'Uuuuy que miedo',
      timestamp: (new Date()).toString(),
    },
    {
      user: 'Silver',
      commentary: 'Todos flotamos aqui abajo',
      timestamp: (new Date()).toString(),
    },
    {
      user: 'Twinkle Toes',
      commentary: 'A la derecha o hacia la izquierda -.-?',
      timestamp: (new Date()).toString(),
    }],
  }
];

export default {
  movies,
};
