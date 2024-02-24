import { useForm } from "react-hook-form";
import { Product } from "../../type/type";
import { time } from "console";
import { title } from "process";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { selectProduct } from "../../features/product/productSlice";
import { useEffect } from "react";
import { createProductThunk, getCategoriesThunk } from "../../features/product/productAPI";
import St from './style.module.css'

const AddProduct:React.FC = ():JSX.Element => {

    const {register,handleSubmit,formState:{errors}, reset} = useForm<Product>();

    const {categories} = useAppSelector(selectProduct);

    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(getCategoriesThunk());
    },[])

    const saveProd = (obj:Product) => {
        console.log(obj);

        dispatch(createProductThunk(obj))
        .unwrap()
        .then(console.log)
        .catch(console.warn)
        
    }

    return <div className={St.mainDiv}>
        <h1>AddProduct</h1>

        <form onSubmit={handleSubmit(saveProd)} className={St.form}>
            <div>
                <label>title</label>
                <input type="text" placeholder="enter title"
                {...register('title', {required: 'fill field'})}
                />
                {errors.title && <p>{errors.title.message}</p>}
            </div>
            <div>
                <label>price</label>
                <input type="text" placeholder="enter price"
                    {...register('price', {required: 'fill field'})}
                />
                {errors.price && <p>{errors.price.message}</p>}
            </div>
            <div>
                <label>description</label>
                <input type="text" placeholder="enter description"
                {...register('description', {required: 'fill field'})}
                />
                {errors.description && <p>{errors.description.message}</p>}
            </div>
            <div>
                <label>image</label>
                <input type="text" placeholder="enter image src"
                {...register('image', {required: 'fill field'})}
                />
                {errors.image && <p>{errors.image.message}</p>}
            </div>
            <select {...register('category',{required: 'Fill field'})}>
                {
                    categories.map((elm,i) =>{
                        return <option key={i} value={elm}>{elm}</option>
                    })
                }
            </select>
            {errors.category && <p>{errors.category.message}</p>}

            <button>Save</button>
        </form>
    </div>
}

export default AddProduct;
