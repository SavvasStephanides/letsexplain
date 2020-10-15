async function stuffWithData(){
    console.log("Getting user details...")
    var userDetails = await getData("http://api.example.com/get-user-details")
    var userRecords = await getData("http://api.example.com/records/" + userDetails.id)
    var response = post("http://api.example.com/save", userRecords)
    return response
}