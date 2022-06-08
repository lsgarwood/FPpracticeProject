import { useState } from 'react';
import axios from 'axios';

const SearchCriteria = () => {

    const [searchName, setSearchName] = useState("");
    const [profileList, setProfileList] = useState([]);

    const getByName = () => {

        axios.get('')
            .then((response) => {
                console.log(response.data);
                setSearchName(response.data);
                console.log(searchName)
            });
    }

    return ( 
        <form className="form">
            <label className="label">Search By Name</label>
            <input className="search-input" type="text" name="query"
                placeholder="Enter Name" value={searchName} onChange={(event) => setSearchName(event.target.value)}/>
            <button className="search-button" type="submit" onSubmit={getByName}>Search</button>
            <label className="label">Search By Plate</label>
            <input className="search-input" type="text" name="query"
                placeholder="Enter Plate"/>
            <button className="search-button" type="submit">Search</button>
            <label className="label">Search By Location</label>
            <input className="search-input" type="text" name="query"
                placeholder="Enter Location"/>
            <button className="search-button" type="submit">Search</button>
        </form>
     );
}
 
export default SearchCriteria;