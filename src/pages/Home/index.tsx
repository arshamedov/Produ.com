import React from 'react';
import St from './style.module.css';


const Home: React.FC = (): JSX.Element => {
    return (
        <div className={St.mainDiv}>
            <header>
                <h1>Welcome Produ.com</h1>

            </header>
            <main className={St.main}>
                <div>

                </div>
            </main>
            <footer className={St.footer}>
                <p>&copy; 2024 Produ.com</p>
            </footer>   
        </div>
    );
}

export default Home;
