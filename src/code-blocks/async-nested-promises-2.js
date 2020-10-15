getData("http://api.example.com/get-user-details")
    .then((userDetails) => {
        getData("http://api.example.com/records" + userDetails.id)
            .then((recordsById) => {
                post("http://api.example.com/save", recordsById)
                    .then((response) => {
                        console.log(response)
                    })
            })
    })