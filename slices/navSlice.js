import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    origin: null,
    destination: null,
    travelTimeInformation: null,
};

export const navSlice = createSlice({
    name: "nav",
    initialState,
    reducer: {
        setOrigin: (state, action) => {
            state.origin = action.payload;
        },
        setDestinaton: (state, action) => {
            state.destination = action.payload;
        },
        setTravelTimeInformation: (state, action) => {
            state.travelTimeInformation = action.payload;
        },
    },
});

export const { setOrigin, setDestinaton, setTravelTimeInformation } =
    navSlice.actions;

//Selectors

export const selectOrigin = (state) => state.nav.origin;
export const selectDestinaton = (state) => state.nav.destination;
export const selectTravelTimeInformation = (state) =>
    state.nav.travelTimeInformation;

export default navSlice.reducer;
