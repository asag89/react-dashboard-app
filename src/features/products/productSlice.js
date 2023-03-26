

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    products: [
        {
            id: "rge56414",
            img: "https://m.media-amazon.com/images/I/61kV3qWxT-L._AC_UY327_FMwebp_QL65_.jpg",
            product: "headphone",
            price: 59.99,
            totalSales: 248,
            stock: 1257,
        },
        {
            id: "rge56464",
            img: "https://m.media-amazon.com/images/I/61HWZsE5YNL._AC_UL480_FMwebp_QL65_.jpg",
            product: "microphone",
            price: 129.99,
            totalSales: 49,
            stock: 994
        },
        {
            id: "rge56433",
            img: "https://m.media-amazon.com/images/I/61UeaSp4DiL._AC_UL480_FMwebp_QL65_.jpg",
            product: "watch",
            price: 59.99,
            totalSales: 29,
            stock: 1493,
        },
        {
            id: "rge56434",
            img: "https://m.media-amazon.com/images/I/71UaIg8z3jL._AC_UL480_FMwebp_QL65_.jpg",
            product: "watch",
            price: 37.99,
            totalSales: 129,
            stock: 448,
        },
        {
            id: "rge52364",
            img: "https://m.media-amazon.com/images/I/61cnWLJBxuL._AC_UL480_FMwebp_QL65_.jpg",
            product: "table",
            price: 49.99,
            totalSales: 19,
            stock: 447
        },
        {
            id: "rge89464",
            img: "https://m.media-amazon.com/images/I/618zZ7u3sUL._AC_SX679_.jpg",
            product: "Mechanical Keyboard",
            price: 39.99,
            totalSales: 94,
            stock: 426,
        }
    ]
}

export const productsSlice = createSlice({
    name: "products",
    initialState,
    reducers: {
        deleteProduct: (state, action) => {
            state.products = state.products.filter((item) => {
                return item.id !== action.payload
            })
        }
    }
})

export const {
    deleteProduct
} = productsSlice.actions
export default productsSlice.reducer