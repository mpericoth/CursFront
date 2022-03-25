function getAllDirectors() {
  let directors = movies.map((movie) => {
    return movie.director;
  });
  return directors;
}
function getPelisFromDirector(director) {
  let moviesfrom = movies.filter((movie) => movie.director == director);
  return moviesfrom;
}
function pelisAverage(peliculas) {
  let nota = peliculas.reduce((sum, pelicula) => (sum += pelicula.score), 0);
  return parseFloat(nota) / peliculas.length;
}
function ordenarPeliculas() {
  peliculas = movies.slice(0, 20);
  peliculas.sort((a, b) => a.title.localeCompare(b.title));
  return peliculas;
}
function ordenarPeliculasAnio(peliculas) {
  peliculas.sort((a, b) => {
    if (a.year === b.year) {
      // Price is only important when cities are the same
      return b.title - a.title;
    }
    return a.year > b.year ? 1 : -1;
  });
  return peliculas;
}
function millorPelicula(any) {
  let pelicula = movies
    .filter((peli) => {
      return peli.year === any;
    })
    .reduce(function (prev, current) {
      return prev.score > current.score ? prev : current;
    });
  return pelicula;
}
console.table(getAllDirectors());
console.table(getPelisFromDirector("Alfred Hitchcock"));
console.table(getPelisFromDirector("Hayao Miyazaki"));
console.log(pelisAverage(getPelisFromDirector("Hayao Miyazaki")));

console.table(ordenarPeliculas());
console.table(ordenarPeliculasAnio(movies));
console.log(millorPelicula(2003));
let products = [
  {
    id: 0,
    type: "car",
    name: "Halley",
    description:
      "Halley es el resultado de un proceso de perfeccionamiento y consolidación de las características ya existentes, y al mismo tiempo, de desarrollo de nuevas soluciones en términos de presentación y diseño. Pero lo que lo distingue es su velocidad, la capacidad de anticipar los movimientos y escuchar los deseos de quien lo conduce. Halley incorpora soluciones aerodinámicas refinadas manteniéndose fiel al icónico diseño de TheMob.",
    imageUrl: "undifined",
    modelo: "undifined",
    price: 199269.3,
    properties: {
      potenciaMax: "566 kW",
      velocidadMax: ">350 km/h",
      aceleracion: "2,8 s",
      consumoComb: "18,0 l/100km (WLTP)*",
      emisionesC02Comb: "448 g/km (WLTP)*",
      motor: "V12, 60°, inyección multipunto",
      cilindrada: "6498 cm³",
    }
  },
  {
    id: 1,
    type: "car",
    name: "Betelgeuse",
    description:
      "Betelgeuse es un superdeportivo creado con el único objetivo de ofrecer toda la emoción y la tecnología de competición de un auténtico coche de carreras en un modelo legal de carretera.Los amplios conocimientos técnicos de TheMob en el universo de los deportes de motor, sumados a su tradición ganadora, se concentran en el nuevo Betelgeuse con aerodinámica extrema, dinámica de conducción de competición, componentes ligeros y el V10 con mejor rendimiento, está preparados para liberar todas las emociones de la pista en su día a día",
    imageUrl: "undifined",
    modelo: "undifined",
    price: 170069.9,
    properties: {
      potenciaMax: "470KW",
      velocidadMax: "310 km/h",
      aceleracion: "3,0 s",
      consumoComb: "13.9 l/100km (WLTP)",
      emisionesC02Comb: "331 g/km (WLTP)",
      motor: "V10, 90°, MPI",
      cilindrada: "5204 cm³",
    }
  },
  {
    id: 2,
    type: "car",
    name: "Orión",
    description:
      "Orión es el primer vehículo utilitario superdeportivo en todo el mundo que fusiona el alma de un coche superdeportivo y la funcionalidad de un SUV. Impulsado por un motor V8 biturbo de 4,0 litros que genera 650 CV de potencia y un par de 850 Nm, el Orión acelera de 0 a 100 km/h en 3,6 segundos y alcanza una velocidad máxima de 305 km/h. Diseño, rendimiento, dinámica de conducción y emoción al volante confluyen en un enfoque visionario de TheMob",
    imageUrl: "undifined",
    modelo: "undifined",
    price: 148464.6,
    properties: {
      potenciaMax: "458 kW",
      velocidadMax: "305 km/h",
      aceleracion: "3,6 s",
      consumoComb: "12,7 l/100km (WLTP)",
      emisionesC02Comb: "325 g/km (WLTP)",
      motor: "V8, 90°, MPI",
      cilindrada: "3.996 cm",
    }
  },
  {
    id: 3,
    type: "tire",
    name: "SottoZero",
    description:
      "",
    imageUrl: "undifined",
    modelo: "undifined",
    price: 160,
    properties: {
     marca: "Pirelli",
     tecnologia: "Run Flat™",
     medida: '22" -  20"'
    }
  },
  {
    id: 4,
    type: "tire",
    name: "Blizzak",
    description:
      "",
    imageUrl: "undifined",
    modelo: "undifined",
    price: 110,
    properties: {
     marca: "Bridgestone",
     tecnologia: "Invierno",
     medida: '22" -  20"'
    }
  },
  {
    id: 5,
    type: "tire",
    name: "Pzero",
    description:
      "",
    imageUrl: "undifined",
    modelo: "undifined",
    price: 110,
    properties: {
     marca: "Pirelli",
     tecnologia: "Seal Inside™",
     medida: '20"'
    }
  },
  {
    id: 6,
    type: "rim",
    name: "Hek",
    description:
      "",
    imageUrl: "undifined",
    modelo: "undifined",
    price: 720,
    properties: {
     marca: "Butzi",
     tecnologia: "Oro Brillo Selcus",
     medida: '22" -  20"'
    }
  }, {
    id: 7,
    type: "rim",
    name: "Magnesio",
    description:
      "",
    imageUrl: "undifined",
    modelo: "undifined",
    price: 702,
    properties: {
     marca: "Monaco Wheels",
     tecnologia: "Titanio Mate",
     medida: '22" -  20"'
    }
  }, {
    id: 8,
    type: "rim",
    name: "Monotuerca",
    description:
      "",
    imageUrl: "undifined",
    modelo: "undifined",
    price: 693,
    properties: {
     marca: "Mack",
     tecnologia: "Negro Brillo",
     medida: '20"'
    }
  }
  , {
    id: 9,
    type: "wing",
    name: "Carbono Kosei",
    description:
      "",
    imageUrl: "undifined",
    modelo: "undifined",
    price: 590,
    properties: {
     dimensiones: "122 ancho x 15 alto",
     material: "Aluminio",
    }
  },
  {
    id: 10,
    type: "wing",
    name: "Spoiler  Granturismo ",
    description:
      "",
    imageUrl: "undifined",
    modelo: "undifined",
    price: 520,
    properties: {
     dimensiones: "121 ancho x 12 alto",
     material: "Fibra de vidrio y plastico ABS",
    }
  },{
    id: 11,
    type: "wing",
    name: "Zeus Pu Simoni Racing",
    description:
      "",
    imageUrl: "undifined",
    modelo: "undifined",
    price: 490,
    properties: {
     dimensiones: "121 ancho x 10 alto",
     material: "Plástico PUR-IHS",
    }
  }
];
