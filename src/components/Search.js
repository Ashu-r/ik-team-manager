import { useState } from 'react';

const Search = ({ data }) => {
	const [selectRank, setSelectRank] = useState('even');
	const [searchInput, setSearchInput] = useState('');
	const [filteredPlayers, setFilteredPlayers] = useState([]);

	const searchPlayer = () => {
		setFilteredPlayers(
			data
				.filter((p) => (selectRank === 'even' ? p.rank % 2 === 0 : p.rank % 2 !== 0))
				.filter((p) => {
					if (searchInput.length < 1) return true;
					return p.name.indexOf(searchInput) !== -1;
				})
		);
	};
	return (
		<div>
			<h3>Search</h3>
			<div>
				<label>Select rank type: </label>
				<select onChange={(e) => setSelectRank(e.target.value)}>
					<option value='even'>Even Rank</option>
					<option value='odd'>Odd rank</option>
				</select>
			</div>
			<div>
				<label>Input player name: </label>
				<input value={searchInput} onChange={(e) => setSearchInput(e.target.value)}></input>
			</div>
			<button onClick={searchPlayer}>5 Search</button>
			<div>
				<ul>
					{filteredPlayers.map((p) => (
						<li>
							{p.name} {p.rank}
						</li>
					))}
				</ul>
			</div>
		</div>
	);
};

export default Search;
