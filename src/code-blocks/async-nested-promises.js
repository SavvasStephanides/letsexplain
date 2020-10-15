getData("http://api.example.com/get-user-details")
    .then((userDetails) => {
        getData("http://api.example.com/records/" + userDetails.id)
            .then((recordsById) => {
                console.log(recordsById)
            })
    })