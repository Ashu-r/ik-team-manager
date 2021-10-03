import { useEffect, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import PlayersTable from './PlayersTable';

const ChangeName = ({ teams }) => {
	const [prevName, setPrevName] = useState('');
	const [newName, setNewName] = useState('');
	const [newTeams, setNewTeams] = useState({ A: [], B: [] });
	const changeName = (prevN, newN) => {
		if (newTeams.A.map((p) => p.name).includes(prevN))
			setNewTeams({ ...newTeams, A: newTeams.A.map((p) => (p.name === prevN ? { name: newN, rank: p.rank } : p)) });
		if (newTeams.B.map((p) => p.name).includes(prevN))
			setNewTeams({ ...newTeams, B: newTeams.B.map((p) => (p.name === prevN ? { name: newN, rank: p.rank } : p)) });
	};
	useEffect(() => {
		setNewTeams(teams);
	}, [teams]);
	return (
		<div>
			<h3>Change Player Name</h3>
			<div>
				<label>Enter previous name: </label>
				<input value={prevName} onChange={(e) => setPrevName(e.target.value)}></input>
			</div>
			<div>
				<label>Enter new name: </label>
				<input value={newName} onChange={(e) => setNewName(e.target.value)}></input>
			</div>
			<button onClick={() => changeName(prevName, newName)}>8 Change name</button>
			<Row>
				<Col>
					<PlayersTable title='Team A' data={newTeams.A} />
				</Col>
				<Col>
					<PlayersTable title='Team B' data={newTeams.B} />
				</Col>
			</Row>
		</div>
	);
};

export default ChangeName;
