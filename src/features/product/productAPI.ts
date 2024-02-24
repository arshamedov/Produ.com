import { createAsyncThunk } from "@reduxjs/toolkit";
import { myAxios } from "../../app/store";
import { Product } from "../../type/type";


export const getProductsThunk = createAsyncThunk(
    'get products',

    async() => {
        const {data} = await myAxios.get('products');
        return data;
    }
);

export const createProductThunk = createAsyncThunk(
    'create product',

    async(obj: Product) => {
        const {data} = await myAxios.post('products/', obj)
        return data
    }
);

export const deleteProductThunk = createAsyncThunk(
    'delete product',

    async(id:number) => {
        const{data} = await myAxios.delete(`products/${id}`);
        return data;
    }
);

export const getSingleProductThunk = createAsyncThunk(
    'get single product',

    async(id:number) => {
        const {data} = await myAxios.get(`products/${id}`);
        return data;
    }
);

export const getCategoriesThunk = createAsyncThunk(
    'get categories',

    async() => {
        const {data} = await myAxios.get('products/categories');
        return data;
    }
)

export const getProductsByCategoryThunk = createAsyncThunk(
    'get/products/by/category',

    async(category:string) => {
        const { data } = await myAxios.get(`products/category/${category}`);
        return data;
    }
)
