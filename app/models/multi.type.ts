export type MultiSearchResult = MultiSearchMovie | MultiSearchTvShow | MultiSearchPerson;

export interface MultiSearchTvShow {
    poster_path?: any;
    popularity: number;
    id: number;
    overview: string;
    backdrop_path?: any;
    vote_average: number;
    media_type: string;
    first_air_date: string;
    origin_country: string[];
    genre_ids: any[];
    original_language: string;
    vote_count: number;
    name: string;
    original_name: string;
}
export interface MultiSearchMovie {
    poster_path: string;
    adult: boolean;
    overview: string;
    release_date: string;
    original_title: string;
    genre_ids: any[];
    id: number;
    media_type: string;
    original_language: string;
    title: string;
    backdrop_path: string;
    popularity: number;
    vote_count: number;
    video: boolean;
    vote_average: number;
}

export interface KnownFor {
    poster_path: string;
    adult: boolean;
    overview: string;
    release_date: string;
    original_title: string;
    genre_ids: number[];
    id: number;
    media_type: string;
    original_language: string;
    title: string;
    backdrop_path: string;
    popularity: number;
    vote_count: number;
    video: boolean;
    vote_average: number;
}

export interface MultiSearchPerson {
    profile_path: string;
    adult: boolean;
    id: number;
    media_type: string;
    known_for: KnownFor[];
    name: string;
    popularity: number;
}