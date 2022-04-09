import { useMemo, useState } from 'react';
import { IPerson } from '../api';

export enum SortType {
	DEFAULT = '',
	ASC = '▲',
	DESC = '▼',
}
const SORT_CYCLE = [SortType.DEFAULT, SortType.ASC, SortType.DESC] as const;

export function useMassSort(people: IPerson[]) {
	const [currentSortType, setCurrentSortType] = useState(SortType.DESC);

	const cycleSort = () => {
		const index = SORT_CYCLE.indexOf(currentSortType);
		const nextIndex = (index + 1) % SORT_CYCLE.length;
		setCurrentSortType(SORT_CYCLE[nextIndex]);
	};

	const sortedPeople = useMemo(() => {
		switch (currentSortType) {
			case SortType.ASC: {
				return [...people].sort((a, b) => getWeightedMass(a.mass) - getWeightedMass(b.mass));
			}
			case SortType.DESC: {
				return [...people].sort((a, b) => getWeightedMass(b.mass) - getWeightedMass(a.mass));
			}
			case SortType.DEFAULT: {
				return people;
			}
		}
	}, [people, currentSortType]);

	return [sortedPeople, currentSortType, cycleSort] as const;
}

function getWeightedMass(val: string) {
	const numeric = Number(val);
	if (isNaN(numeric)) return Infinity;
	return numeric;
}
