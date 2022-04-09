import { IPerson } from './api';

type PersonProps = { person: IPerson };

export default function PersonRow({ person }: PersonProps) {
	return (
		<tr>
			<td>{person.name}</td>
			<td>{person.height}</td>
			<td>{person.hair_color}</td>
			<td>{person.mass}</td>
		</tr>
	);
}
