

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    asdas: [
        {
            id: 1,
            img: "https://m.media-amazon.com/images/I/61kV3qWxT-L._AC_UY327_FMwebp_QL65_.jpg",
            name: "asdas",
            role: "admin"
        },
        {
            id: 2,
            img: "https://m.media-amazon.com/images/I/61HWZsE5YNL._AC_UL480_FMwebp_QL65_.jpg",
            name: "ankrom",
            role: "admin"
        },
        {
            id: 3,
            img: "https://m.media-amazon.com/images/I/61UeaSp4DiL._AC_UL480_FMwebp_QL65_.jpg",
            name: "asag",
            role: "admin"
        },
        {
            id: 4,
            img: "https://m.media-amazon.com/images/I/71UaIg8z3jL._AC_UL480_FMwebp_QL65_.jpg",
            name: "dsdasds",
            role: "admin"
        },
        {
            id: 5,
            img: "https://m.media-amazon.com/images/I/61cnWLJBxuL._AC_UL480_FMwebp_QL65_.jpg",
            name: "ukyukuykyu",
            role: "admin"
        },
        {
            id: 6,
            img: "https://m.media-amazon.com/images/I/618zZ7u3sUL._AC_SX679_.jpg",
            name: "armox",
            role: "admin"
        }
    ],
    team: [
        {
            id: 1,
            img: "https://images.unsplash.com/photo-1524250502761-1ac6f2e30d43?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzR8fHdvbWFufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60",
            name: "Riley Jackson",
            position: "admin",
            mail: "@rileyJ"
        },
        {
            id: 2,
            img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDJ8fHdvbWFufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60",
            name: "July Cuffin",
            position: "admin",
            mail: "@julyC"
        },
        {
            id: 3,
            img: "https://images.unsplash.com/photo-1557555187-23d685287bc3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTN8fHdvbWFufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60",
            name: "Mary Black",
            position: "marketing director",
            mail: "@maryB"
        },
        {
            id: 4,
            img: "https://images.unsplash.com/photo-1591084728795-1149f32d9866?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTV8fG1hbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60",
            name: "Adam Renny",
            position: "assistant",
            mail: "@adamR"
        },
        {
            id: 5,
            img: "https://images.unsplash.com/photo-1564564244660-5d73c057f2d2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NzF8fG1hbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60",
            name: "Jimmy Wall",
            position: "assistant",
            mail: "@jimmyW"
        }
    ]
}

export const teamSlice = createSlice({
    name: "team",
    initialState,
})

export default teamSlice.reducer