import Link from 'next/link';

type PeoplePageControlsProps = {
	page: number;
	hasPreviousPage: boolean;
	hasNextPage: boolean;
};

export default function PeoplePageControls({ page, hasPreviousPage, hasNextPage }: PeoplePageControlsProps) {
	return (
		<div className='flex gap-2 justify-center text-center'>
			<ChangePageButton changeTo={page - 1} text='Previous' disabled={!hasPreviousPage} />

			<span className='flex-1 font-medium'>{page}</span>

			<ChangePageButton changeTo={page + 1} text='Next' disabled={!hasNextPage} />
		</div>
	);
}

type ChangePageButtonProps = { text: string; disabled: boolean; changeTo: number };

function ChangePageButton({ text, disabled, changeTo }: ChangePageButtonProps) {
	return (
		<Link href={`/${changeTo}`} passHref={false} shallow>
			<button className='flex-1 disabled:text-gray-400' disabled={disabled}>
				{text}
			</button>
		</Link>
	);
}
