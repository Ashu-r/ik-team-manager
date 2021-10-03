import { useEffect, useState } from 'react';
import PlayersTable from './PlayersTable';
import utils from '../utils';

const A2ndIndex = ({ teamA }) => {
	const [newTeamA, setNewTeamA] = useState([]);
	const [name, setName] = useState('');
	const insert = (arr, index, newItem) => [...arr.slice(0, index), newItem, ...arr.slice(index)];
	const addPlayer = () => {
		setNewTeamA(insert(newTeamA, 1, { name, rank: utils.getRandomInt(1, 77) }));
	};
	useEffect(() => {
		console.log(teamA);
		setNewTeamA(teamA);
	}, [teamA]);
	return (
		<div>
			<h3>Add to 2nd index of team A</h3>
			<div>
				<label>Enter player to add </label>
				<input value={name} onChange={(e) => setName(e.target.value)}></input>
			</div>
			<button onClick={addPlayer}>6. Add player</button>

			<PlayersTable title='New Team A' data={newTeamA} />
		</div>
	);
};

export default A2ndIndex;
