


export interface GhibliFilm {
  id: string;
  title: string;
  original_title: string;
  original_title_romanised: string;
  image: string;
  movie_banner:string;
  description: string;
  director: string;
  producer: string;
  release_date: string; // año en formato string
  running_time: string; // duración en minutos como string
  rt_score: string;     // puntuación de Rotten Tomatoes como string
  people: string[];     // URLs o IDs de personajes
  species: string[];    // URLs o IDs de especies
  locations: string[];  // URLs o IDs de locaciones
  vehicles: string[];   // URLs o IDs de vehículos
  url: string;          // URL de la película en la API
}