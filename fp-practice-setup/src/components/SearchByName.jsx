import { useState } from "react";
import axios from 'axios';

const SearchByName = () => {

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
        <form className="form" onSubmit={getByName}>
            <input className="input" type="text" name="query"
                placeholder="Enter Name" value={searchName} onChange={(event) => setSearchName(event.target.value)}/>
            <button className="button" type="submit">Search</button>
        </form>
    );
}
 
export default SearchByName;