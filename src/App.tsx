import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Layout from './components/Layout';
import MyRoutes from './components/MyRoutes';

function App() {
  return <div className="app" style={{ backgroundImage: `url(${"https://www.amd.com/content/dam/amd/en/images/backgrounds/abstract/1782346-product-security-bg.jpg"})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}>
    <BrowserRouter>
      <Layout/>
      <MyRoutes/>
    </BrowserRouter>
  </div>
}

export default App;

// background - size: cover;
// background - position: center;
// background - repeat: no - repeat