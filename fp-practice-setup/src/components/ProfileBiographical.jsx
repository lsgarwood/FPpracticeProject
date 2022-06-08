const ProfileBiographical = ({data}) => {
    
    console.log(data)
    
    const {citizenID, forenames, surname, homeAddress, dateOfBirth, placeOfBirth, sex} = data;

    return ( 
        <>
            <h3>Citizen Id: {citizenID}</h3>
            <h3>Forenames: {forenames}</h3>
            <h3>Surname: {surname}</h3>
            <h3>Address: {homeAddress}</h3>
            <h3>Date Of Birth: {dateOfBirth}</h3>
            <h3>Place Of Birth: {placeOfBirth}</h3>
            <h3>Gender: {sex}</h3>
            <button type="button">Visit profile</button>
        </>
    );
}
 
export default ProfileBiographical;