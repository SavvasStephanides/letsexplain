async function stuffWithData(){
    console.log("Getting user details")
    var userDetails = await getData("http://api.example.com/get-user-details")
    return userDetails
}