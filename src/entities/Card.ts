export interface CardAPI {
  id: number;
  name: string;
  alternativeName: string;
  poster: Record<'url', string>;
  year: number;
  rating: Record<'kp' | 'imdb', number>;
  genres: Record<'name', string>[];
  countries: Record<'name', string>[];
  type: string;
  movieLength: number;
  description: string;
  persons: Person[];
  budget: Record<'value', number>;
  productionCompanies: Record<'name', string>[];
  audience: Record<'count', number>[];
  ageRating: number;
}

export interface Person {
  id: number;
  name: string;
  photo: string;
  enName: string;
  description: string;
  profession: string;
  enProfession: string;
}
