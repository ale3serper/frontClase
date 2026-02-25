export type Character = {
  id: number;
  name: string;
  status: 'Alive' | 'Dead' | 'unknown';
  species: string;
  type: string;
  gender: 'Female' | 'Male' | 'Genderless' | 'unknown';
  origin: {
    name: string;
    url: string;
  };
  location: {
    name: string;
    url: string;
  };
  image: string; // URL (300x300px)
  episode: string[]; // Array de URLs
  url: string; // URL del endpoint del personaje
  created: string; // Fecha en formato ISO string
};