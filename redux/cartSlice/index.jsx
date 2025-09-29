import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({

    name: "cart",

    initialState: { value: [] },

    reducers: {

        add: (state, action) => {

            state.value.push(action.payload)
            console.log("product added to cart successfully")

        }
    }

})

export default cartSlice