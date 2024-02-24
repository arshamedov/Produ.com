import { log } from "console";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { useEffect } from "react";
import { deleteProductThunk, getCategoriesThunk, getProductsByCategoryThunk, getProductsThunk } from "../../features/product/productAPI";
import { Link } from "react-router-dom";
import { selectProduct } from "../../features/product/productSlice";
import St from './style.module.css'

const Products: React.FC = (): JSX.Element => {

    const dispatch = useAppDispatch();

    const {products,categories} = useAppSelector(selectProduct);
    // console.log('products', products);
    
    useEffect(() => {
        dispatch(getProductsThunk());
        dispatch(getCategoriesThunk());
    },[])

    const filterProd = (category:string) => {
        if(category == 'all'){
            dispatch(getProductsThunk());
        }else{
            dispatch(getProductsByCategoryThunk(category));
        }
    }

    return <div className={St.mainDiv}>
        <h1>All Products</h1>

        <br />

        <h4>Filter product by category</h4>

        <select onChange={(e) => filterProd(e.target.value)}>
            <option value="all">All</option>
            {
                categories.map((elm,i) => {
                    return <option key={i} value={elm}>{elm}</option>
                })
            }
        </select>

        <br />
        <br />

        <table border={2} className={St.prodTable}>
            <thead>
                <tr>
                    <th>title</th>
                    <th>price</th>
                    <th>category</th>
                    <th>delete</th>
                    <th>see more</th>
                </tr>
            </thead>
            <tbody>
                {
                    products?.map((elm) => {
                        return <tr key={elm.id}>
                            <td>{elm.title}</td>
                            <td>{elm.price}</td>
                            <td>{elm.category}</td>
                            <td>
                                <button onClick={() => {
                                    dispatch(deleteProductThunk(elm.id))
                                    .unwrap()
                                    .then((res) => {
                                        console.log('product deleted',res);
                                        dispatch(getProductsThunk());
                                    })
                                    .catch(console.warn);
                                }}>delete</button>
                            </td>
                            <td><Link to={'product/' + elm.id}>See more</Link></td>
                        </tr>
                    })
                }
            </tbody>
        </table>

    </div>
}

export default Products;