
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isSidebarOpen: true,
    sidebarLayoutType: "default",
    sidebarColor: "#041121",
    isCustomizerOpen: false,
    theme: "dark"
}

export const layoutSlice = createSlice({
    name: "layout",
    initialState,
    reducers: {
        handleSidebar: (state) => {
            state.isSidebarOpen = !state.isSidebarOpen
        },
        handleCoverContainer: (state, action) => {
            if (action.payload === false) {
                state.isSidebarOpen = false
            }
        },

        handleTheme: (state, action) => {
            state.theme = action.payload

            if (state.sidebarColor === "#0f0f0f" && state.theme === "dark") {
                state.sidebarColor = "#041121"
            }
            if (state.sidebarColor === "#041121" && state.theme === "light") {
                state.sidebarColor = "#0f0f0f"
            }
        },
        handleCustomizer: (state) => {
            state.isCustomizerOpen = !state.isCustomizerOpen
        },
        handleSidebarLayout: (state, action) => {
            state.sidebarLayoutType = action.payload
            state.isSidebarOpen = true
        },
        handleSidebarColor: (state, action) => {
            if (action.payload === "default") {
                if (state.theme === "light") {
                    state.sidebarColor = "#0f0f0f"
                }
                if (state.theme === "dark") {
                    state.sidebarColor = "#041121"
                }
            }
            else {
                state.sidebarColor = action.payload
            }
        }
    }
})

export const {
    handleSidebar,
    handleTheme,
    handleCoverContainer,
    handleCustomizer,
    handleSidebarLayout,
    handleSidebarColor
} = layoutSlice.actions
export default layoutSlice.reducer