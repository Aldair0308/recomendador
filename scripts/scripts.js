// Base de datos de películas organizadas por género y grupos de edad
const movieDatabase = {
  accion: {
    infantil: [
      // 0-12 años
      {
        title: "Los Increíbles",
        year: 2004,
        rating: "⭐⭐⭐⭐⭐",
        description:
          "Una familia de superhéroes debe salvar el mundo mientras mantiene en secreto sus poderes.",
      },
      {
        title: "Big Hero 6",
        year: 2014,
        rating: "⭐⭐⭐⭐⭐",
        description:
          "Un joven genio y su robot inflable forman un equipo de superhéroes para salvar su ciudad.",
      },
      {
        title: "Spider-Man: Un Nuevo Universo",
        year: 2018,
        rating: "⭐⭐⭐⭐⭐",
        description:
          "Miles Morales se convierte en Spider-Man y conoce a otros Spider-People de dimensiones alternativas.",
      },
    ],
    adolescente: [
      // 13-17 años
      {
        title: "Avengers: Endgame",
        year: 2019,
        rating: "⭐⭐⭐⭐⭐",
        description:
          "Los Vengadores se unen para una batalla final contra Thanos y salvar el universo.",
      },
      {
        title: "Black Panther",
        year: 2018,
        rating: "⭐⭐⭐⭐⭐",
        description:
          "T'Challa regresa a Wakanda para convertirse en rey, pero debe enfrentar a un poderoso enemigo.",
      },
      {
        title: "Wonder Woman",
        year: 2017,
        rating: "⭐⭐⭐⭐",
        description:
          "Diana Prince descubre sus poderes y se convierte en Wonder Woman durante la Primera Guerra Mundial.",
      },
    ],
    adulto: [
      // 18+ años
      {
        title: "John Wick",
        year: 2014,
        rating: "⭐⭐⭐⭐",
        description:
          "Un asesino retirado busca venganza contra los gángsters que mataron a su perro.",
      },
      {
        title: "Mad Max: Fury Road",
        year: 2015,
        rating: "⭐⭐⭐⭐⭐",
        description:
          "En un mundo post-apocalíptico, Max se une a Furiosa para escapar de un tirano.",
      },
      {
        title: "Misión Imposible: Fallout",
        year: 2018,
        rating: "⭐⭐⭐⭐",
        description:
          "Ethan Hunt y su equipo deben recuperar plutonio robado antes de que caiga en manos equivocadas.",
      },
    ],
  },
  comedia: {
    infantil: [
      {
        title: "Toy Story 4",
        year: 2019,
        rating: "⭐⭐⭐⭐⭐",
        description:
          "Woody y sus amigos juguetes viven nuevas aventuras con su nueva dueña Bonnie.",
      },
      {
        title: "Monsters, Inc.",
        year: 2001,
        rating: "⭐⭐⭐⭐⭐",
        description:
          "Dos monstruos descubren que la risa es más poderosa que el miedo.",
      },
      {
        title: "Shrek",
        year: 2001,
        rating: "⭐⭐⭐⭐",
        description:
          "Un ogro verde debe rescatar a una princesa para recuperar su pantano.",
      },
    ],
    adolescente: [
      {
        title: "Spider-Man: Homecoming",
        year: 2017,
        rating: "⭐⭐⭐⭐",
        description:
          "Peter Parker equilibra su vida como estudiante de secundaria y superhéroe.",
      },
      {
        title: "Guardians of the Galaxy",
        year: 2014,
        rating: "⭐⭐⭐⭐⭐",
        description:
          "Un grupo de inadaptados debe salvar la galaxia de un fanático poderoso.",
      },
      {
        title: "Thor: Ragnarok",
        year: 2017,
        rating: "⭐⭐⭐⭐",
        description:
          "Thor debe escapar de un planeta alienígena para salvar Asgard de la destrucción.",
      },
    ],
    adulto: [
      {
        title: "Deadpool",
        year: 2016,
        rating: "⭐⭐⭐⭐",
        description:
          "Un mercenario con poderes de curación busca venganza contra el hombre que arruinó su vida.",
      },
      {
        title: "The Grand Budapest Hotel",
        year: 2014,
        rating: "⭐⭐⭐⭐⭐",
        description:
          "Las aventuras de un conserje legendario y su protegido en un famoso hotel europeo.",
      },
      {
        title: "Knives Out",
        year: 2019,
        rating: "⭐⭐⭐⭐",
        description:
          "Un detective investiga la muerte misteriosa de un novelista en una mansión llena de sospechosos.",
      },
    ],
  },
  drama: {
    infantil: [
      {
        title: "Coco",
        year: 2017,
        rating: "⭐⭐⭐⭐⭐",
        description:
          "Un niño viaja a la Tierra de los Muertos para descubrir la verdad sobre su familia.",
      },
      {
        title: "Inside Out",
        year: 2015,
        rating: "⭐⭐⭐⭐⭐",
        description:
          "Las emociones de una niña luchan por ayudarla a adaptarse a su nueva vida.",
      },
      {
        title: "Up",
        year: 2009,
        rating: "⭐⭐⭐⭐⭐",
        description:
          "Un anciano viudo cumple su sueño de viajar a Sudamérica usando globos en su casa.",
      },
    ],
    adolescente: [
      {
        title: "The Fault in Our Stars",
        year: 2014,
        rating: "⭐⭐⭐⭐",
        description:
          "Dos adolescentes con cáncer se enamoran y enfrentan juntos los desafíos de la vida.",
      },
      {
        title: "Lady Bird",
        year: 2017,
        rating: "⭐⭐⭐⭐⭐",
        description:
          "Una estudiante de secundaria navega por su último año mientras sueña con escapar de su ciudad natal.",
      },
      {
        title: "The Perks of Being a Wallflower",
        year: 2012,
        rating: "⭐⭐⭐⭐",
        description:
          "Un adolescente introvertido encuentra amistad y amor en su primer año de secundaria.",
      },
    ],
    adulto: [
      {
        title: "Parasite",
        year: 2019,
        rating: "⭐⭐⭐⭐⭐",
        description:
          "Una familia pobre se infiltra en la vida de una familia rica con consecuencias inesperadas.",
      },
      {
        title: "Moonlight",
        year: 2016,
        rating: "⭐⭐⭐⭐⭐",
        description:
          "La historia de un joven afroamericano luchando con su identidad y sexualidad.",
      },
      {
        title: "Marriage Story",
        year: 2019,
        rating: "⭐⭐⭐⭐",
        description:
          "Una pareja navega por un divorcio complicado mientras trata de mantener unida a su familia.",
      },
    ],
  },
  terror: {
    adolescente: [
      {
        title: "A Quiet Place",
        year: 2018,
        rating: "⭐⭐⭐⭐",
        description:
          "Una familia vive en silencio para evitar a criaturas que cazan por el sonido.",
      },
      {
        title: "Lights Out",
        year: 2016,
        rating: "⭐⭐⭐",
        description:
          "Una entidad sobrenatural que solo aparece en la oscuridad aterroriza a una familia.",
      },
      {
        title: "Scary Stories to Tell in the Dark",
        year: 2019,
        rating: "⭐⭐⭐",
        description:
          "Un grupo de adolescentes descubre un libro maldito que hace realidad sus historias de terror.",
      },
    ],
    adulto: [
      {
        title: "Hereditary",
        year: 2018,
        rating: "⭐⭐⭐⭐",
        description:
          "Una familia es atormentada por una presencia siniestra después de la muerte de su abuela.",
      },
      {
        title: "Get Out",
        year: 2017,
        rating: "⭐⭐⭐⭐⭐",
        description:
          "Un joven afroamericano descubre secretos perturbadores durante una visita a la familia de su novia.",
      },
      {
        title: "The Conjuring",
        year: 2013,
        rating: "⭐⭐⭐⭐",
        description:
          "Investigadores paranormales ayudan a una familia aterrorizada por una presencia oscura.",
      },
    ],
  },
  "ciencia-ficcion": {
    infantil: [
      {
        title: "WALL-E",
        year: 2008,
        rating: "⭐⭐⭐⭐⭐",
        description:
          "Un robot solitario en la Tierra abandonada encuentra el amor y salva a la humanidad.",
      },
      {
        title: "E.T. the Extra-Terrestrial",
        year: 1982,
        rating: "⭐⭐⭐⭐⭐",
        description: "Un niño ayuda a un alienígena perdido a regresar a casa.",
      },
      {
        title: "The Iron Giant",
        year: 1999,
        rating: "⭐⭐⭐⭐⭐",
        description:
          "Un niño se hace amigo de un robot gigante del espacio exterior.",
      },
    ],
    adolescente: [
      {
        title: "Star Wars: The Force Awakens",
        year: 2015,
        rating: "⭐⭐⭐⭐",
        description:
          "Una nueva generación de héroes se une a la Resistencia para luchar contra la Primera Orden.",
      },
      {
        title: "Ready Player One",
        year: 2018,
        rating: "⭐⭐⭐⭐",
        description:
          "En un mundo virtual, un adolescente busca un tesoro oculto que cambiará su vida.",
      },
      {
        title: "The Maze Runner",
        year: 2014,
        rating: "⭐⭐⭐",
        description:
          "Un grupo de adolescentes atrapados en un laberinto debe encontrar una forma de escapar.",
      },
    ],
    adulto: [
      {
        title: "Blade Runner 2049",
        year: 2017,
        rating: "⭐⭐⭐⭐⭐",
        description:
          "Un blade runner descubre un secreto que lo lleva a buscar a Rick Deckard.",
      },
      {
        title: "Arrival",
        year: 2016,
        rating: "⭐⭐⭐⭐⭐",
        description:
          "Una lingüista debe comunicarse con alienígenas para prevenir una guerra global.",
      },
      {
        title: "Ex Machina",
        year: 2014,
        rating: "⭐⭐⭐⭐",
        description:
          "Un programador evalúa la inteligencia artificial de un robot humanoide.",
      },
    ],
  },
  romance: {
    adolescente: [
      {
        title: "To All the Boys I've Loved Before",
        year: 2018,
        rating: "⭐⭐⭐⭐",
        description:
          "Las cartas de amor secretas de una adolescente son enviadas accidentalmente a sus destinatarios.",
      },
      {
        title: "The Kissing Booth",
        year: 2018,
        rating: "⭐⭐⭐",
        description:
          "Una estudiante de secundaria se enamora del hermano mayor de su mejor amigo.",
      },
      {
        title: "Love, Simon",
        year: 2018,
        rating: "⭐⭐⭐⭐",
        description:
          "Un adolescente gay mantiene en secreto su sexualidad mientras se enamora por correo electrónico.",
      },
    ],
    adulto: [
      {
        title: "La La Land",
        year: 2016,
        rating: "⭐⭐⭐⭐⭐",
        description:
          "Una actriz aspirante y un músico de jazz se enamoran mientras persiguen sus sueños en Los Ángeles.",
      },
      {
        title: "The Shape of Water",
        year: 2017,
        rating: "⭐⭐⭐⭐",
        description:
          "Una mujer muda se enamora de una criatura anfibia en un laboratorio gubernamental.",
      },
      {
        title: "Crazy Rich Asians",
        year: 2018,
        rating: "⭐⭐⭐⭐",
        description:
          "Una mujer descubre que su novio es uno de los solteros más codiciados de Singapur.",
      },
    ],
  },
  animacion: {
    infantil: [
      {
        title: "Frozen II",
        year: 2019,
        rating: "⭐⭐⭐⭐⭐",
        description:
          "Elsa y Anna emprenden un viaje para descubrir el origen de los poderes de Elsa.",
      },
      {
        title: "Moana",
        year: 2016,
        rating: "⭐⭐⭐⭐⭐",
        description:
          "Una joven polinesia navega por el océano para salvar su isla natal.",
      },
      {
        title: "Zootopia",
        year: 2016,
        rating: "⭐⭐⭐⭐⭐",
        description:
          "Una coneja policía y un zorro estafador resuelven un misterio en una ciudad de animales.",
      },
    ],
    adolescente: [
      {
        title: "Your Name",
        year: 2016,
        rating: "⭐⭐⭐⭐⭐",
        description:
          "Dos adolescentes intercambian cuerpos misteriosamente y desarrollan una conexión profunda.",
      },
      {
        title: "Spider-Man: Into the Spider-Verse",
        year: 2018,
        rating: "⭐⭐⭐⭐⭐",
        description:
          "Miles Morales conoce a otros Spider-People de dimensiones alternativas.",
      },
      {
        title: "How to Train Your Dragon",
        year: 2010,
        rating: "⭐⭐⭐⭐⭐",
        description:
          "Un joven vikingo se hace amigo de un dragón y cambia la relación entre su pueblo y los dragones.",
      },
    ],
    adulto: [
      {
        title: "Soul",
        year: 2020,
        rating: "⭐⭐⭐⭐⭐",
        description:
          "Un músico de jazz debe encontrar su camino de regreso a la vida después de un accidente.",
      },
      {
        title: "Spirited Away",
        year: 2001,
        rating: "⭐⭐⭐⭐⭐",
        description:
          "Una niña debe trabajar en un mundo espiritual para salvar a sus padres transformados.",
      },
      {
        title: "The Incredibles 2",
        year: 2018,
        rating: "⭐⭐⭐⭐",
        description:
          "Elastigirl lucha contra el crimen mientras Mr. Incredible cuida a los niños en casa.",
      },
    ],
  },
  aventura: {
    infantil: [
      {
        title: "Finding Nemo",
        year: 2003,
        rating: "⭐⭐⭐⭐⭐",
        description:
          "Un pez payaso busca a su hijo perdido en el vasto océano.",
      },
      {
        title: "The Jungle Book",
        year: 2016,
        rating: "⭐⭐⭐⭐",
        description:
          "Un niño criado por lobos debe enfrentar al tigre Shere Khan con la ayuda de sus amigos animales.",
      },
      {
        title: "Pirates of the Caribbean",
        year: 2003,
        rating: "⭐⭐⭐⭐",
        description:
          "Un herrero se une a un excéntrico pirata para rescatar a la mujer que ama.",
      },
    ],
    adolescente: [
      {
        title: "Indiana Jones: Raiders of the Lost Ark",
        year: 1981,
        rating: "⭐⭐⭐⭐⭐",
        description:
          "Un arqueólogo aventurero busca el Arca de la Alianza antes que los nazis.",
      },
      {
        title: "Jumanji: Welcome to the Jungle",
        year: 2017,
        rating: "⭐⭐⭐⭐",
        description:
          "Cuatro adolescentes son transportados a un videojuego y deben completarlo para escapar.",
      },
      {
        title: "The Mummy",
        year: 1999,
        rating: "⭐⭐⭐⭐",
        description:
          "Un aventurero despierta accidentalmente a una momia antigua en Egipto.",
      },
    ],
    adulto: [
      {
        title: "Mad Max: Fury Road",
        year: 2015,
        rating: "⭐⭐⭐⭐⭐",
        description:
          "En un mundo post-apocalíptico, Max se une a Furiosa para escapar de un tirano.",
      },
      {
        title: "The Revenant",
        year: 2015,
        rating: "⭐⭐⭐⭐",
        description:
          "Un explorador lucha por sobrevivir después de ser atacado por un oso en territorio hostil.",
      },
      {
        title: "Dunkirk",
        year: 2017,
        rating: "⭐⭐⭐⭐",
        description:
          "La evacuación heroica de soldados aliados de las playas de Dunkirk durante la Segunda Guerra Mundial.",
      },
    ],
  },
  fantasia: {
    infantil: [
      {
        title: "Harry Potter and the Sorcerer's Stone",
        year: 2001,
        rating: "⭐⭐⭐⭐⭐",
        description:
          "Un niño descubre que es un mago y asiste a una escuela de magia.",
      },
      {
        title: "The Chronicles of Narnia",
        year: 2005,
        rating: "⭐⭐⭐⭐",
        description:
          "Cuatro hermanos descubren un mundo mágico dentro de un armario.",
      },
      {
        title: "Matilda",
        year: 1996,
        rating: "⭐⭐⭐⭐",
        description:
          "Una niña con poderes telequinéticos enfrenta a adultos crueles con su inteligencia.",
      },
    ],
    adolescente: [
      {
        title: "The Lord of the Rings: Fellowship",
        year: 2001,
        rating: "⭐⭐⭐⭐⭐",
        description:
          "Un hobbit emprende una misión épica para destruir un anillo poderoso.",
      },
      {
        title: "Harry Potter and the Deathly Hallows",
        year: 2011,
        rating: "⭐⭐⭐⭐⭐",
        description:
          "Harry Potter enfrenta a Voldemort en la batalla final entre el bien y el mal.",
      },
      {
        title: "The Hobbit",
        year: 2012,
        rating: "⭐⭐⭐⭐",
        description:
          "Bilbo Baggins se une a un grupo de enanos en una aventura para recuperar su reino.",
      },
    ],
    adulto: [
      {
        title: "Pan's Labyrinth",
        year: 2006,
        rating: "⭐⭐⭐⭐⭐",
        description:
          "Una niña escapa a un mundo de fantasía durante la Guerra Civil Española.",
      },
      {
        title: "The Shape of Water",
        year: 2017,
        rating: "⭐⭐⭐⭐",
        description:
          "Una mujer muda se enamora de una criatura anfibia en un laboratorio gubernamental.",
      },
      {
        title: "Life of Pi",
        year: 2012,
        rating: "⭐⭐⭐⭐",
        description:
          "Un joven sobrevive en el océano con un tigre de Bengala después de un naufragio.",
      },
    ],
  },
  documental: {
    adolescente: [
      {
        title: "Free Solo",
        year: 2018,
        rating: "⭐⭐⭐⭐⭐",
        description:
          "Sigue a Alex Honnold mientras intenta escalar El Capitán sin cuerdas.",
      },
      {
        title: "Won't You Be My Neighbor?",
        year: 2018,
        rating: "⭐⭐⭐⭐⭐",
        description:
          "Un retrato íntimo de Fred Rogers y su programa de televisión para niños.",
      },
      {
        title: "March of the Penguins",
        year: 2005,
        rating: "⭐⭐⭐⭐",
        description:
          "La increíble jornada de los pingüinos emperador en la Antártida.",
      },
    ],
    adulto: [
      {
        title: "The Social Dilemma",
        year: 2020,
        rating: "⭐⭐⭐⭐",
        description:
          "Explora el impacto peligroso de las redes sociales en la humanidad.",
      },
      {
        title: "My Octopus Teacher",
        year: 2020,
        rating: "⭐⭐⭐⭐⭐",
        description:
          "Un cineasta desarrolla una relación única con un pulpo en un bosque de algas marinas.",
      },
      {
        title: "Icarus",
        year: 2017,
        rating: "⭐⭐⭐⭐",
        description:
          "Una investigación sobre el dopaje en el deporte que descubre un escándalo internacional.",
      },
    ],
  },
};

// Función para determinar el grupo de edad
function getAgeGroup(age) {
  if (age <= 12) return "infantil";
  if (age <= 17) return "adolescente";
  return "adulto";
}

// Función para obtener una recomendación aleatoria
function getRandomMovie(genre, ageGroup) {
  const movies = movieDatabase[genre]?.[ageGroup];
  if (!movies || movies.length === 0) {
    return null;
  }
  const randomIndex = Math.floor(Math.random() * movies.length);
  return movies[randomIndex];
}

// Función para mostrar la recomendación
function displayRecommendation(movie) {
  document.getElementById("movieTitle").textContent = movie.title;
  document.getElementById("movieYear").textContent = `(${movie.year})`;
  document.getElementById("movieDescription").textContent = movie.description;
  document.getElementById("movieRating").textContent = movie.rating;

  document.getElementById("recommendation").style.display = "block";
  document
    .getElementById("recommendation")
    .scrollIntoView({ behavior: "smooth" });
}

// Función para mostrar mensaje de error
function showError(message) {
  alert(message);
}

// Event listeners
document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("movieForm");
  const newRecommendationBtn = document.getElementById("newRecommendation");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const age = parseInt(document.getElementById("age").value);
    const genre = document.getElementById("genre").value;

    if (!age || !genre) {
      showError("Por favor, completa todos los campos.");
      return;
    }

    if (age < 1 || age > 120) {
      showError("Por favor, ingresa una edad válida (1-120 años).");
      return;
    }

    const ageGroup = getAgeGroup(age);

    // Verificar si el género tiene contenido para la edad
    if (genre === "terror" && ageGroup === "infantil") {
      showError(
        "Las películas de terror no son recomendadas para niños. Por favor, selecciona otro género."
      );
      return;
    }

    if (genre === "romance" && ageGroup === "infantil") {
      showError(
        "Las películas de romance están más orientadas a adolescentes y adultos. Te recomendamos seleccionar otro género."
      );
      return;
    }

    if (genre === "documental" && ageGroup === "infantil") {
      showError(
        "Los documentales están más orientados a adolescentes y adultos. Te recomendamos seleccionar otro género."
      );
      return;
    }

    const movie = getRandomMovie(genre, ageGroup);

    if (!movie) {
      showError(
        "Lo siento, no tenemos recomendaciones disponibles para esa combinación de edad y género."
      );
      return;
    }

    displayRecommendation(movie);
  });

  newRecommendationBtn.addEventListener("click", function () {
    const age = parseInt(document.getElementById("age").value);
    const genre = document.getElementById("genre").value;

    if (!age || !genre) {
      showError("Por favor, completa todos los campos primero.");
      return;
    }

    const ageGroup = getAgeGroup(age);
    const movie = getRandomMovie(genre, ageGroup);

    if (!movie) {
      showError(
        "Lo siento, no tenemos más recomendaciones disponibles para esa combinación."
      );
      return;
    }

    displayRecommendation(movie);
  });
});
