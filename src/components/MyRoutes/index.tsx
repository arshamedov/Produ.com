import { useRoutes } from 'react-router-dom';
import Products from '../../pages/Products';
import AddProduct from '../../pages/AddProduct';
import SingleProduct from '../../pages/SingleProduct';
import Home from '../../pages/Home';

const MyRoutes = () => {
    return useRoutes([
        {
            path: '',
            element: <Home/>
        },
        {
            path: '/products',
            element: <Products/>
        },
        {
            path: '/addproduct',
            element: <AddProduct/>
        },
        {
            path: 'product/:id',
            element: <SingleProduct/>
        },
        {
            path: '*',
            element: <h1>Page not found</h1>
        }
    ])
}

export default MyRoutes