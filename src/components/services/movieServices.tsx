import axios from 'axios';
import type { Movie } from '../../types/movie';

const myKey = import.meta.env.VITE_TMDB_TOKEN;

interface MovieHttpResponse {
  results: Movie[];
  page: number;
}

interface Params {
  query: string;
  include_adult: boolean;
  language: string;
  page: number;
}

type Headers = {
  accept: string;
  Authorization: string;
};

interface Options {
  params: Params;
  headers: Headers;
}

async function fetchMovies(querySearch: string): Promise<MovieHttpResponse> {
  const url = 'https://api.themoviedb.org/3/search/movie';

  const options: Options = {
    params: {
      query: querySearch,
      include_adult: false,
      language: 'en-US',
      page: 1,
    },
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${myKey}`,
    },
  };

  const res = await axios.get<MovieHttpResponse>(url, options);
  return res.data;
}

export default fetchMovies;
