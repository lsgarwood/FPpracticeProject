import { useState, useEffect } from "react";
import axios from 'axios';
import ProfileCardManager from './ProfileCardManager';


const SearchResultBrowser = () => {

    // const [loaded, setLoaded] = useState(false);
    const [profileList, setProfileList] = useState([]);

    // useEffect(() => {
    //     setTimeout(getByName, 2000)
    // },[]);

     const getBySurname = () => {

        axios.get('http://localhost:5015/citizen/surname/:surname')
            .then((response) => {
                console.log(response.data);
                setProfileList(response.data);
                console.log(profileList)
                // setLoaded(true);
            });
    }

    // if(loaded){
    return ( 
        <div className="results-div">
            <h3>Your search returned {0} results</h3>
            {
                profileList.map((profile) => {
                    return <ProfileCardManager data={profile}/>
                })
            }
        </div>
    );
    // }else{
    //     return(<h2>Please wait...your name search is loading</h2>)
    // }
}
 
export default SearchResultBrowser;