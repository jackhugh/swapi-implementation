import axios from 'axios';
import { GetServerSideProps, NextPage } from 'next';
import { dehydrate, DehydratedState, QueryClient } from 'react-query';
import { fetchPeople } from '../components/people/api';
import PeopleView from '../components/people/PeopleView';

type IndexProps = { dehydratedState: DehydratedState };

// Note: Redirect in place from '/' to '/1' in next.config.js
const Index: NextPage<IndexProps> = () => {
	return <PeopleView />;
};

export default Index;

// We fetch from API on the initial page load to get the benefits of SSR, any further API requests are made client-side. Ideally the paths (pages) would be known in advance so we could utilise SSG.
export const getServerSideProps: GetServerSideProps<IndexProps> = async ({ params }) => {
	const queryClient = new QueryClient();

	try {
		const initialPage = Number(params?.page);
		const initialData = await fetchPeople(initialPage);
		await queryClient.prefetchQuery(['people', initialPage], () => initialData);

		return {
			props: {
				dehydratedState: dehydrate(queryClient),
			},
		};
	} catch (err) {
		if (axios.isAxiosError(err) && err.response?.status === 404) {
			return {
				notFound: true,
			};
		} else {
			throw err;
		}
	}
};
