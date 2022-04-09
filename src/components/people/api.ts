import axios, { AxiosError } from 'axios';
import { useQuery } from 'react-query';

export async function fetchPeople(page: number) {
	const { data } = await axios.get<IPeopleResponse>('https://swapi.dev/api/people', { params: { page } });
	return data;
}

export function usePeople(page: number) {
	return useQuery<IPeopleResponse, AxiosError<IPeopleResponse>>(['people', page], () => fetchPeople(page), {
		keepPreviousData: true,
	});
}

export interface IPerson {
	name: string;
	height: string;
	mass: string;
	hair_color: string;
	skin_color: string;
	eye_color: string;
	birth_year: string;
	gender: string;
	homeworld: string;
	films: string[];
	species: string[];
	vehicles: string[];
	starships: string[];
	created: Date;
	edited: Date;
	url: string;
}

export interface IPeopleResponse {
	count: number;
	next: string;
	previous: string;
	results: IPerson[];
}
