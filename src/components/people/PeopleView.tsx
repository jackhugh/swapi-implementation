import PeopleBrowser from './PeopleBrowser';

export default function PeopleView() {
	return (
		<div className='flex flex-col gap-8 mt-8'>
			<header className='text-center text-3xl font-medium'>Star Wars API Implementation</header>

			<div className='w-[40rem] max-w-full m-auto rounded-3xl bg-gray-100 p-4 shadow-lg'>
				<PeopleBrowser />
			</div>
		</div>
	);
}
