
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const user = JSON.parse(localStorage.getItem("user"))

const initialState = {
    user: user || true,
    isLoading: false
}

export const login = createAsyncThunk("auth/login", async (_, thunkAPI) => {
    setTimeout(() => {
    }, 1500)
    localStorage.setItem("user", JSON.stringify(true))
    return true
})

export const logout = createAsyncThunk("auth/logout", async (_, thunkAPI) => {
    setTimeout(() => {
    }, 1000)
    localStorage.removeItem('user')
    return null
})

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {

    },

    extraReducers: (builder) => {
        builder
            // login
            .addCase(login.pending, (state) => {
                state.isLoading = true
            })
            .addCase(login.fulfilled, (state, action) => {
                state.isLoading = false
                state.user = action.payload
            })
            .addCase(login.rejected, (state) => {
                state.isLoading = false
                state.user = null
            })

            // logout
            .addCase(logout.pending, (state) => {
                state.isLoading = true
            })
            .addCase(logout.fulfilled, (state, action) => {
                state.user = action.payload
            })
    }
})


export default authSlice.reducer