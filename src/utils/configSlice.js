import {
    createSlice
} from "@reduxjs/toolkit";

const configSlice = createSlice({
    name: "config",
    initialState: {
        lang: "en"
    },
    reducers: {
        setLangauge: (state, action) => {
            state.lang = action.payload
        }
    }
})

export const {
    setLangauge
} = configSlice.actions;
export default configSlice.reducer;