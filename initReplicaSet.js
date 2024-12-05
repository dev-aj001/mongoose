rs.initiate({
    _id: "replica01",
    members: [
        { _id: 0, host: "mongo01:27017" },
        { _id: 1, host: "mongo02:27017" },
        { _id: 2, host: "mongo03:27017" },
        { _id: 3, host: "mongo04:27017" },
        { _id: 4, host: "mongo05:27017" }
    ]
})