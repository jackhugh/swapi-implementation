import { useRouter } from 'next/router';

export function usePage() {
	const router = useRouter();
	// Any non numeric values should be caught server side so we just need to coerce to numeric.
	const page = Number(router.query.page);

	return page;
}
