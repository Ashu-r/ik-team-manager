import { Table } from 'react-bootstrap';

const PlayersTable = ({ title, data }) => {
	if (!data) return null;
	return (
		<div>
			<h4>{title}</h4>
			<Table striped bordered hover size='sm'>
				<thead>
					<tr>
						<th>Name</th>
						<th>Rank</th>
					</tr>
				</thead>
				<tbody>
					{data.map((p) => (
						<tr>
							<td>{p.name}</td>
							<td>{p.rank}</td>
						</tr>
					))}
				</tbody>
			</Table>
		</div>
	);
};

export default PlayersTable;
