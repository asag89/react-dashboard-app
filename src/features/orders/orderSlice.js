

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    recentOrders: [
        {
            id: "qa34141",
            product: "headphone",
            img: "https://m.media-amazon.com/images/I/61kV3qWxT-L._AC_UY327_FMwebp_QL65_.jpg",
            customer: "Mads Hansen",
            customerImg: "https://images.unsplash.com/photo-1591084728795-1149f32d9866?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTZ8fG1hbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60",
            amount: 59.99,
            status: "pending",

        },
        {
            id: "qa341412",
            img: "https://m.media-amazon.com/images/I/61HWZsE5YNL._AC_UL480_FMwebp_QL65_.jpg",
            customerImg: "https://images.unsplash.com/photo-1600603405959-6d623e92445c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDV8fG1hbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60",
            product: "microphone",
            amount: 129.99,
            status: "pending",
            customer: "Ian Lopez"
        },
        {
            id: "qa341434",
            img: "https://m.media-amazon.com/images/I/61UeaSp4DiL._AC_UL480_FMwebp_QL65_.jpg",
            customerImg: "https://images.unsplash.com/photo-1566492031773-4f4e44671857?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjJ8fG1hbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60",
            product: "watch",
            amount: 59.99,
            status: "delivered",
            customer: "Shane Parker"
        },
        {
            id: "qa341456",

            img: "https://m.media-amazon.com/images/I/71UaIg8z3jL._AC_UL480_FMwebp_QL65_.jpg",
            customerImg: "https://images.unsplash.com/photo-1544717305-2782549b5136?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8ODd8fHdvbWFufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60",
            product: "watch",
            amount: 37.99,
            status: "delivered",
            customer: "Lorena Castro"
        }
        ,
        {
            id: "qa341478",
            img: "https://m.media-amazon.com/images/I/61cnWLJBxuL._AC_UL480_FMwebp_QL65_.jpg",
            customerImg: "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzV8fHdvbWFufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60",
            product: "table",
            amount: 49.99,
            status: "delivered",
            customer: "Kira Shala"

        }
        ,
        {
            id: "qa341490",
            img: "https://m.media-amazon.com/images/I/618zZ7u3sUL._AC_SX679_.jpg",
            customerImg: "https://images.unsplash.com/photo-1534751516642-a1af1ef26a56?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDd8fHdvbWFufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60",
            product: "Keyboard",
            amount: 39.99,
            status: "pending",
            customer: "Juana Rocha"
        }
    ]

}

export const ordersSlice = createSlice({
    name: "orders",
    initialState,
})

export default ordersSlice.reducer