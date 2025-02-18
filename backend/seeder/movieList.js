const moviesList = [
  {
    title: "Inception",
    description:
      "A skilled thief is given a chance at redemption if he can successfully perform an inception.",
    genre: "Science Fiction",
    poster: "https://image.tmdb.org/t/p/w500/8bxMHkQ36QHmwENG6SDAjQqZQ6L.jpg",
    featured: true,
    releaseDate: "2010-07-16T00:00:00Z",
    bookings: [],
    admin: "603d71df810c19729e8f042f",
  },
  {
    title: "The Dark Knight",
    description:
      "When the menace known as the Joker emerges from his mysterious past, he wreaks havoc and chaos on the people of Gotham.",
    genre: "Action",
    poster: "https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg",
    featured: true,
    releaseDate: "2008-07-18T00:00:00Z",
    bookings: [],
    admin: "603d71df810c19729e8f042f",
  },
  {
    title: "The Matrix",
    description:
      "A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers.",
    genre: "Science Fiction",
    poster: "https://image.tmdb.org/t/p/w500/f89U3ADr1oiB1s9GkdPOEpXUk5H.jpg",
    featured: true,
    releaseDate: "1999-03-31T00:00:00Z",
    bookings: [],
    admin: "603d71df810c19729e8f042f",
  },
  {
    title: "The Shawshank Redemption",
    description:
      "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
    genre: "Drama",
    poster: "https://image.tmdb.org/t/p/w500/q6y0Go1tsGEsmtFryDOJo3dEmqu.jpg",
    featured: false,
    releaseDate: "1994-09-23T00:00:00Z",
    bookings: [],
    admin: "603d71df810c19729e8f042f",
  },
  {
    title: "Pulp Fiction",
    description:
      "The lives of two mob hitmen, a boxer, a gangster's wife, and a pair of diner bandits intertwine in four tales of violence and redemption.",
    genre: "Crime",
    poster: "https://image.tmdb.org/t/p/w500/d5iIlFn5s0ImszYzBPb8JPIfbXD.jpg",
    featured: true,
    releaseDate: "1994-10-14T00:00:00Z",
    bookings: [],
    admin: "603d71df810c19729e8f042f",
  },
  {
    title: "Fight Club",
    description:
      "An insomniac office worker and a devil-may-care soapmaker form an underground fight club that evolves into much more.",
    genre: "Drama",
    poster: "https://image.tmdb.org/t/p/w500/pB8BM7pdSp6B6Ih7QZ4DrQ3PmJK.jpg",
    featured: false,
    releaseDate: "1999-10-15T00:00:00Z",
    bookings: [],
    admin: "603d71df810c19729e8f042f",
  },
  {
    title: "Forrest Gump",
    description:
      "The presidencies of Kennedy and Johnson, the Vietnam War, the Watergate scandal and other historical events unfold from the perspective of an Alabama man with an IQ of 75.",
    genre: "Drama",
    poster: "https://image.tmdb.org/t/p/w500/saHP97rTPS5eLmrLQEcANmKrsFl.jpg",
    featured: true,
    releaseDate: "1994-07-06T00:00:00Z",
    bookings: [],
    admin: "603d71df810c19729e8f042f",
  },
  {
    title: "Interstellar",
    description:
      "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
    genre: "Science Fiction",
    poster: "https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg",
    featured: true,
    releaseDate: "2014-11-07T00:00:00Z",
    bookings: [],
    admin: "603d71df810c19729e8f042f",
  },
  {
    title: "Gladiator",
    description:
      "A former Roman General sets out to exact vengeance against the corrupt emperor who murdered his family and sent him into slavery.",
    genre: "Action",
    poster: "https://image.tmdb.org/t/p/w500/ty8TGRuvJLPUmAR1H1nRIsgwvim.jpg",
    featured: false,
    releaseDate: "2000-05-05T00:00:00Z",
    bookings: [],
    admin: "603d71df810c19729e8f042f",
  },
  {
    title: "The Godfather",
    description:
      "The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.",
    genre: "Crime",
    poster: "https://image.tmdb.org/t/p/w500/3bhkrj58Vtu7enYsRolD1fZdja1.jpg",
    featured: true,
    releaseDate: "1972-03-24T00:00:00Z",
    bookings: [],
    admin: "603d71df810c19729e8f042f",
  },
  {
    title: "Titanic",
    description:
      "A seventeen-year-old aristocrat falls in love with a kind but poor artist aboard the luxurious, ill-fated R.M.S. Titanic.",
    genre: "Romance",
    poster: "https://image.tmdb.org/t/p/w500/9xjZS2rlVxm8SFx8kPC3aIGCOYQ.jpg",
    featured: true,
    releaseDate: "1997-12-19T00:00:00Z",
    bookings: [],
    admin: "603d71df810c19729e8f042f",
  },
  {
    title: "Avatar",
    description:
      "A paraplegic Marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.",
    genre: "Science Fiction",
    poster: "https://image.tmdb.org/t/p/w500/jRXYjXNq0Cs2TcJjLkki24MLp7u.jpg",
    featured: true,
    releaseDate: "2009-12-18T00:00:00Z",
    bookings: [],
    admin: "603d71df810c19729e8f042f",
  },
  {
    title: "Oppenheimer",
    description:
      "The story of American scientist J. Robert Oppenheimer and his role in the development of the atomic bomb.",
    genre: "Drama",
    poster: "https://image.tmdb.org/t/p/w500/8Gxv8gSFCU0XGDykEGv7zR1n2ua.jpg",
    featured: true,
    releaseDate: "2023-07-21T00:00:00Z",
    bookings: [],
    admin: "603d71df810c19729e8f042f",
  },
  {
    title: "Barbie",
    description:
      "Barbie suffers a crisis that leads her to question her world and her existence.",
    genre: "Comedy",
    poster: "https://image.tmdb.org/t/p/w500/iuFNMS8U5cb6xfzi51Dbkovj7vM.jpg",
    featured: true,
    releaseDate: "2023-07-21T00:00:00Z",
    bookings: [],
    admin: "603d71df810c19729e8f042f",
  },
  {
    title: "Dune",
    description:
      "A noble family becomes embroiled in a war for control over the galaxy's most valuable asset while its heir becomes troubled by visions of a dark future.",
    genre: "Science Fiction",
    poster: "https://image.tmdb.org/t/p/w500/d5NXSklXo0qyIYkgV94XAgMIckC.jpg",
    featured: true,
    releaseDate: "2021-10-22T00:00:00Z",
    bookings: [],
    admin: "603d71df810c19729e8f042f",
  },
  {
    title: "Top Gun: Maverick",
    description:
      "After thirty years, Maverick is still pushing the envelope as a top naval aviator, but must confront ghosts of his past when he leads TOP GUN's elite graduates on a mission.",
    genre: "Action",
    poster: "https://image.tmdb.org/t/p/w500/62HCnUTziyWcpDaBO2i1DX17ljH.jpg",
    featured: true,
    releaseDate: "2022-05-27T00:00:00Z",
    bookings: [],
    admin: "603d71df810c19729e8f042f",
  },
  {
    title: "Everything Everywhere All at Once",
    description:
      "An aging Chinese immigrant is swept up in an insane adventure, where she alone can save the world by exploring other universes connecting with the lives she could have led.",
    genre: "Action",
    poster: "https://image.tmdb.org/t/p/w500/w3LxiVYdWWRvEVdn5RYq6jIqkb1.jpg",
    featured: true,
    releaseDate: "2022-03-25T00:00:00Z",
    bookings: [],
    admin: "603d71df810c19729e8f042f",
  },
  {
    title: "The Batman",
    description:
      "When a sadistic serial killer begins murdering key political figures in Gotham, Batman is forced to investigate the city's hidden corruption and question his family's involvement.",
    genre: "Action",
    poster: "https://image.tmdb.org/t/p/w500/74xTEgt7R36Fpooo50r9T25onhq.jpg",
    featured: true,
    releaseDate: "2022-03-04T00:00:00Z",
    bookings: [],
    admin: "603d71df810c19729e8f042f",
  },
  {
    title: "Spider-Man: Across the Spider-Verse",
    description:
      "Miles Morales catapults across the Multiverse, where he encounters a team of Spider-People charged with protecting its very existence.",
    genre: "Animation",
    poster: "https://image.tmdb.org/t/p/w500/8Vt6mWEReuy4Of61Lnj5Xj704m8.jpg",
    featured: true,
    releaseDate: "2023-06-02T00:00:00Z",
    bookings: [],
    admin: "603d71df810c19729e8f042f",
  },
  {
    title: "Poor Things",
    description:
      "The incredible tale about the fantastical evolution of Bella Baxter, a young woman brought back to life by the brilliant and unorthodox scientist Dr. Godwin Baxter.",
    genre: "Science Fiction",
    poster: "https://image.tmdb.org/t/p/w500/kCGlIMHnOm8JPXq3rXM6c5wMxcT.jpg",
    featured: true,
    releaseDate: "2023-12-08T00:00:00Z",
    bookings: [],
    admin: "603d71df810c19729e8f042f",
  },
];

export default moviesList;
