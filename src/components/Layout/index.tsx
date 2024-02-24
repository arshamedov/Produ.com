import { Link } from "react-router-dom";

const Layout: React.FC = (): JSX.Element => {
    return <div>
        <header>
            <nav>
                <ul>
                    <li><Link to= '/'>Home</Link></li>
                    <li><Link to= '/products'>Products</Link></li>
                    <li><Link to= '/addproduct'>Add Product</Link></li>
                </ul>
            </nav>
        </header>
    </div>
}

export default Layout;