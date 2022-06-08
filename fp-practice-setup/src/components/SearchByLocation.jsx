const SearchByLocation = () => {
    return ( 
        <>
            <form className="form">
            <input className="input" type="text" name="query"
                placeholder="Enter Location"/>
            <button className="button" type="submit">Search</button>
        </form>
        </>
     );
}
 
export default SearchByLocation;