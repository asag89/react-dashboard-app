

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    recentUserSession: [
        {
            "month": "January",
            "avg": 4000,
            "dl": 2400
        },
        {
            "month": "February",
            "avg": 3000,
            "dl": 1398
        },
        {
            "month": "March",
            "avg": 2000,
            "dl": 9800
        },
        {
            "month": "April",
            "avg": 2780,
            "dl": 3908
        },
        {
            "month": "May",
            "avg": 1890,
            "dl": 4800
        },
        {
            "month": "June",
            "avg": 2390,
            "dl": 3800
        },
        {
            "month": "July",
            "avg": 3490,
            "dl": 4300
        }
    ],
    customers: [
        {
            id: "qc34141",
            customer: "Mads Hansen",
            email: "mads@gmail.com",
            customerImg: "https://images.unsplash.com/photo-1591084728795-1149f32d9866?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTZ8fG1hbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60",
            type: "premium",
            phone: "1 433 591 190",
            address: "67 Catherine Lane Morganton, NC 28655",
            country: "USA"

        },
        {
            id: "qc341412",
            customer: "Ren Lopez",
            email: "ren@gmail.com",
            customerImg: "https://images.unsplash.com/photo-1600603405959-6d623e92445c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDV8fG1hbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60",
            type: "normal",
            phone: "1 201 789 671",
            address: "7438 College Dr. Wisconsin Rapids, WI 54494",
            country: "USA"

        },
        {
            id: "qc341434",
            customer: "Shane Parker",
            email: "shane@gmail.com",
            customerImg: "https://images.unsplash.com/photo-1566492031773-4f4e44671857?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjJ8fG1hbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60",
            type: "normal",
            phone: "1 287 789 196",
            address: "592 Garden Court Calumet City, IL 60409",
            country: "USA"

        },
        {
            id: "qc341456",
            customer: "Lorena Castro",
            email: "lorena@gmail.com",
            customerImg: "https://images.unsplash.com/photo-1544717305-2782549b5136?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8ODd8fHdvbWFufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60",
            type: "premium",
            phone: "1 333 789 192",
            address: "95 Wakehurst Lane Leland, NC 28451",
            country: "USA"

        },
        {
            id: "qc341478",
            customer: "Kira Shala",
            email: "kira@gmail.com",
            customerImg: "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzV8fHdvbWFufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60",
            type: "normal",
            phone: "1 233 789 190",
            address: "25 Orchard St. Munster, IN 46321",
            country: "USA"

        }
        ,
        {
            id: "qc341490",
            customer: "Juana Rocha",
            email: "juana@gmail.com",
            customerImg: "https://images.unsplash.com/photo-1534751516642-a1af1ef26a56?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDd8fHdvbWFufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60",
            type: "premium",
            phone: "1 783 134 090",
            address: "80 Pawnee Lane Fresno, CA 93706",
            country: "USA"

        }
    ],
    currentCustomer: {},
    currentCustomerStats: [
        { month: "January", sessions: 21, sales: 9 },
        { month: "February", sessions: 44, sales: 11 },
        { month: "March", sessions: 38, sales: 26 },
        { month: "May", sessions: 61, sales: 34 },
        { month: "June", sessions: 54, sales: 29 }
    ],
    currentCustomerLatestTransactions: [
        {
            id: "qa34141",
            product: "headphone",
            img: "https://m.media-amazon.com/images/I/61kV3qWxT-L._AC_UY327_FMwebp_QL65_.jpg",
            amount: 59.99,
            status: "pending",

        },
        {
            id: "qa341412",
            img: "https://m.media-amazon.com/images/I/61HWZsE5YNL._AC_UL480_FMwebp_QL65_.jpg",
            product: "microphone",
            amount: 129.99,
            status: "pending",
        },
        {
            id: "qa341434",
            img: "https://m.media-amazon.com/images/I/61UeaSp4DiL._AC_UL480_FMwebp_QL65_.jpg",
            product: "watch",
            amount: 59.99,
            status: "delivered",
        },
        {
            id: "qa341456",

            img: "https://m.media-amazon.com/images/I/71UaIg8z3jL._AC_UL480_FMwebp_QL65_.jpg",
            product: "watch",
            amount: 37.99,
            status: "delivered",
        }
        ,
        {
            id: "qa341478",
            img: "https://m.media-amazon.com/images/I/61cnWLJBxuL._AC_UL480_FMwebp_QL65_.jpg",
            product: "table",
            amount: 49.99,
            status: "delivered",

        }
        ,
        {
            id: "qa341490",
            img: "https://m.media-amazon.com/images/I/618zZ7u3sUL._AC_SX679_.jpg",
            product: "Keyboard",
            amount: 39.99,
            status: "pending",
        }
    ]

}

export const customerSlice = createSlice({
    name: "customer",
    initialState,
    reducers: {
        getCustomer: (state, action) => {
            state.currentCustomer = state.customers.find((item) => {
                return item.id === action.payload
            })
        }
    }
})

export const {
    getCustomer
} = customerSlice.actions
export default customerSlice.reducer