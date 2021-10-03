import { useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import A2ndIndex from './components/A2ndIndex';
import ChangeName from './components/ChangeName';
import PlayersTable from './components/PlayersTable';
import Search from './components/Search';
import utils from './utils';

function App() {
	const [players, setPlayers] = useState('');
	const [playersArray, setPlayersArray] = useState([]);
	const [teams, setTeams] = useState({ A: [], B: [] });
	const [sortedTeam, setSortedTeam] = useState([]);

	const create = () => {
		setPlayersArray(players.split(',').filter((p) => p.length > 0));
	};
	const convert = () => {
		const A = [];
		const B = [];
		playersArray.forEach((p, i) => {
			i % 2 === 0 ? A.push({ name: p, rank: utils.getRandomInt(1, 77) }) : B.push({ name: p, rank: utils.getRandomInt(1, 77) });
		});
		setTeams({ A, B });
	};
	const sort = () => {
		setSortedTeam(teams.A.concat(teams.B).sort((a, b) => a.rank - b.rank));
	};
	const removeB = () => {
		setPlayersArray(playersArray.filter((p) => teams.A.map((pA) => pA.name).includes(p)));
		setTeams({ ...teams, B: [] });
		setSortedTeam(teams.A.sort((a, b) => a.rank - b.rank));
	};

	return (
		<div className='App'>
			<Container>
				<Row>
					<label htmlFor='name'>Enter players name:</label>
					<input onChange={(e) => setPlayers(e.target.value)} id='name'></input>
				</Row>
				<div>
					<button onClick={create} className='m-1 p-1'>
						1 Create
					</button>
					<button onClick={convert} className='m-1 p-1'>
						2 Convert Array
					</button>
					<button className='m-1 p-1'>3 Team A ranks</button>
					<button onClick={sort} className='m-1 p-1'>
						4 Sort
					</button>
					<button onClick={removeB} className='m-1 p-1'>
						7 Remove Team B
					</button>
				</div>
				<div></div>
				<Row>
					<Col>
						<h3>Players list</h3>
						<ul>
							{playersArray.map((p) => (
								<li>{p}</li>
							))}
						</ul>
					</Col>
					<Col>
						<PlayersTable title='Team A' data={teams.A} />
					</Col>
					<Col>
						<PlayersTable title='Team B' data={teams.B} />
					</Col>
					<Col>
						<h3>Team A Ranks</h3>
						<ul>
							{teams.A.map((p) => (
								<li>{p.rank}</li>
							))}
						</ul>
					</Col>
					<Col>
						<PlayersTable title='Sorted list based on rank' data={sortedTeam} />
					</Col>
				</Row>
				<Search data={teams?.A.concat(teams?.B)} />
				<A2ndIndex teamA={teams?.A} />
				<ChangeName teams={teams} />
			</Container>
		</div>
	);
}

export default App;
