export const userColumns = [
    { field: 'id', headerName: 'ID', width: 70 },
    {
        field: "user", 
        headerName: "user", 
        width: 230, 
        rendercell: (params) => {
            return (
                <div className="cellWithImg">
                    <img className="cellImg" src={params.row.img} alt="avatar" />
                    {params.row.username}
                </div>
            );
        },
    },

    {
        field: "email", 
        headerName:"Email",
        width: 230
    },
    {
        field: "age", 
        headerName:"Age",
        width: 100
    },
    {
        field: "status", 
        headerName:"Status",
        width: 160,
        renderCell: (params) => {
            return (
                <div className={`cellWithStatus ${params.row.status}`}> {params.row.status} </div>
            )
        }
    },
];


export const userRows = [
    {
        id: 1,
        username: "iphone",
        img: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fpngtree.com%2Fso%2Fnature&psig=AOvVaw3N-6lO1wkPBZukrbi89X5s&ust=1676098326368000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCNDN6Pyuiv0CFQAAAAAdAAAAABAE",
        status: "active",
        email: "iphone@gmail.com",
        age: 25,
    },
    {
        id: 2,
        username: "iphone",
        img: "https://m.media-amazon.com/images/I/51IzYNd7AaL._SL1080_.jpg",
        status: "pending",
        email: "iphone@gmail.com",
        age: 35,
    },
    {
        id: 3,
        username: "iphone",
        img: "https://m.media-amazon.com/images/I/51IzYNd7AaL._SL1080_.jpg",
        status: "active",
        email: "iphone@gmail.com",
        age: 22,
    },
    {
        id: 4,
        username: "iphone",
        img: "https://m.media-amazon.com/images/I/51IzYNd7AaL._SL1080_.jpg",
        status: "pending",
        email: "iphone@gmail.com",
        age: 32,
    },
    {
        id: 5,
        username: "iphone",
        img: "https://m.media-amazon.com/images/I/51IzYNd7AaL._SL1080_.jpg",
        status: "active",
        email: "iphone@gmail.com",
        age: 42,
    },
    {
        id: 6,
        username: "iphone",
        img: "https://m.media-amazon.com/images/I/51IzYNd7AaL._SL1080_.jpg",
        status: "active",
        email: "iphone@gmail.com",
        age: 33,
    },
    {
        id: 7,
        username: "iphone",
        img: "https://m.media-amazon.com/images/I/51IzYNd7AaL._SL1080_.jpg",
        status: "pending",
        email: "iphone@gmail.com",
        age: 23,
    },
    {
        id: 8,
        username: "iphone",
        img: "https://m.media-amazon.com/images/I/51IzYNd7AaL._SL1080_.jpg",
        status: "active",
        email: "iphone@gmail.com",
        age: 45,
    },
    {
        id: 9,
        username: "iphone",
        img: "https://m.media-amazon.com/images/I/51IzYNd7AaL._SL1080_.jpg",
        status: "active",
        email: "iphone@gmail.com",
        age: 42,
    },
    {
        id: 10,
        username: "iphone",
        img: "https://m.media-amazon.com/images/I/51IzYNd7AaL._SL1080_.jpg",
        status: "pending",
        email: "iphone@gmail.com",
        age: 22,
    },
];