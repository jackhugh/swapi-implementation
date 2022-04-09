import { usePeople } from './api';
import { usePage } from './hooks/usePage';
import PeoplePageControls from './PeoplePageControls';
import PeopleTable from './PeopleTable';

export default function PeopleBrowser() {
	const page = usePage();
	const { data } = usePeople(page);

	// We should never enter this state as data is prefetched
	if (!data) return null;

	return (
		<div className='flex flex-col gap-2'>
			<PeopleTable people={data.results} />
			<PeoplePageControls page={page} hasPreviousPage={!!data.previous} hasNextPage={!!data.next} />
		</div>
	);
}
