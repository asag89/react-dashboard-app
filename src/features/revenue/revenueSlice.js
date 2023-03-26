

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    recentRevenues: [
        {
            product: "headphone",
            count: 241,
            revenue: 14457.59,
            lastRevenue: 18169.71

        },
        {
            product: "microphone",
            count: 34,
            revenue: 4419.66,
            lastRevenue: 2319.71

        },
        {
            product: "watch",
            count: 83,
            revenue: 4979.17,
            lastRevenue: 6589.71

        },
        {
            product: "watch",
            count: 129,
            revenue: 4900.71,
            lastRevenue: 3560.71

        },
        {
            product: "table",
            count: 48,
            revenue: 2399.52,
            lastRevenue: 4857.71
        },
        {
            product: "Keyboard",
            count: 22,
            revenue: 9157.71,
            lastRevenue: 9857.71
        }
    ]

}

export const revenueSlice = createSlice({
    name: "revenue",
    initialState,
})


export default revenueSlice.reducer