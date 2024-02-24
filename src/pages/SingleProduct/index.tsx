import { useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { selectProduct } from "../../features/product/productSlice";
import { useEffect } from "react";
import { getSingleProductThunk } from "../../features/product/productAPI";
import St from './style.module.css'


const SingleProduct: React.FC = (): JSX.Element => {

    const {id} = useParams();

    const dispatch = useAppDispatch();

    const {prod} = useAppSelector(selectProduct); 
    
    useEffect(() => {
        dispatch(getSingleProductThunk(Number(id)));
    },[]);

    return <div className={St.mainDiv}>
        <h1>SingleProduct</h1>

        <div className={St.prodDiv}>
            <h3>tittle - {prod.title}</h3>
            <h5>category - {prod.category}</h5>
            <h5>price - {prod.price}$</h5>
            <p>{prod.description}</p>
            <img src={prod.image} style={{width: '200px', height: '200px'}}/>
        </div>
    </div>
}

export default SingleProduct;