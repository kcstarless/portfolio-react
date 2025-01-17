import { useState, useEffect } from 'react';
import Header from './Header';
import Portfolio from './Portfolio';
import IntroPage from './IntroPage';

//** Content Component */
const Content = () => {
    const [firstLoad, setFirstLoad] = useState(true);
    const [portfolioLoading, setPortfolioLoading] = useState(true); // Track Portfolio loading state

    return (
        <div className="container">
            {firstLoad 
                ? <IntroPage setFirstLoad={setFirstLoad}/> 
                : (
                    <>
                        {/* If portfolio is still loading, show loading state */}
                        {portfolioLoading && <IntroPage />}
                        
                        <Header />
                        <Portfolio setPortfolioLoading={setPortfolioLoading} />
                    </>
                )
            }
        </div>
    );
}

export default Content;
