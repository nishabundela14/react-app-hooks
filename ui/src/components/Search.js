import React from 'react';


const Search = ({handleSearch, inputRef}) => {
    const clicked= false;
    return (
        <form>
            <input type="text" ref={inputRef}/>
            {
                clicked === false ?
                <button onClick={(e) => handleSearch(e, inputRef, clicked)}>Go</button>
                : <button>Cancel</button> 
            } 
            

        </form>
    )
}

export default Search
