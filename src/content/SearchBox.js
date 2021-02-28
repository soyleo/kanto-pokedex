import './SearchBox.css'

const SearchBox = ({ searchChange }) => {
    return (
        <div>
            <input className='searchbox' type='search' placeholder='Search your Pokémon by his name' onChange={searchChange} />
        </div>
    );
}

export default SearchBox;