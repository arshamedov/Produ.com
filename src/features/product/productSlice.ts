import { createSlice } from "@reduxjs/toolkit";
import { Product } from "../../type/type";
import { getCategoriesThunk, getProductsByCategoryThunk, getProductsThunk, getSingleProductThunk } from "./productAPI";
import { RootState } from "../../app/store";


const initialState: { products: Product[], prod: Product, categories: string[], filteredProducts : Product[]} = {
    products: [],
    prod: {} as Product,
    categories: [],
    filteredProducts: []
};


const productSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {


    },
    extraReducers: (builder) => {
        builder.addCase(getProductsThunk.fulfilled, (state, action) => {            
            state.products = action.payload;
        }).addCase(getSingleProductThunk.fulfilled, (state, action) => {
            state.prod = action.payload;
        }).addCase(getCategoriesThunk.fulfilled, (state,action) => {
            state.categories = action.payload;
        }).addCase(getProductsByCategoryThunk.fulfilled, (state,action) => {
            state.products = action.payload;
        })
    }
});

export const selectProduct = (st: RootState) => st.product;

export default productSlice.reducer;