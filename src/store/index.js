
import { configureStore } from "@reduxjs/toolkit"
import authReducer from "../features/auth/authSlice"
import layoutReducer from "../features/layout/layoutSlice"
import ordersReducer from "../features/orders/orderSlice"
import productsReducer from "../features/products/productSlice"
import teamReducer from "../features/team/teamSlice"
import salesReducer from "../features/sales/salesSlice"
import customerReducer from "../features/customer/customerSlice"
import revenueReducer from "../features/revenue/revenueSlice"

const store = configureStore({
    reducer: {
        auth: authReducer,
        layout: layoutReducer,
        orders: ordersReducer,
        products: productsReducer,
        team: teamReducer,
        sales: salesReducer,
        customer: customerReducer,
        revenue: revenueReducer,
    }
})

export default store
