import React from 'react'

function Search({ inputSearch, search }) {
    return (
        <div className='searchbox-wrap'>
            <input 
            type='text' 
            placeholder='Search for a movie...' 
            className='searchbox' 
            onChange={inputSearch}
            onKeyPress={search}/>
        </div>
    )
}

export default Search
