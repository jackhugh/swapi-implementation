import { IPerson } from './api';
import { useMassSort } from './hooks/useMassSort';
import PersonRow from './PersonRow';

type PeopleListProps = { people: IPerson[] };

export default function PeopleTable({ people }: PeopleListProps) {
	const [sortedPeople, currentSortType, cycleSort] = useMassSort(people);

	return (
		<table className='w-full table-fixed text-left'>
			<thead>
				<tr>
					<th>Name</th>
					<th>Height</th>
					<th>Hair Colour</th>
					<th>
						<button className='w-full flex gap-1' onClick={cycleSort}>
							<span className='font-bold'>Mass</span>
							{currentSortType}
						</button>
					</th>
				</tr>
			</thead>

			<tbody>
				{sortedPeople.map((person) => (
					<PersonRow key={person.url} person={person} />
				))}
			</tbody>
		</table>
	);
}
