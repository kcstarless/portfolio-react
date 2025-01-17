import { useState, useEffect } from 'react';
import Header from './Header';
import Portfolio from './Portfolio';
import IntroPage from './IntroPage';

// Content Component
const Content = () => {
    const [firstLoad, setFirstLoad] = useState(true);
    const [componentsLoaded, setComponentsLoaded] = useState(false);

    useEffect(() => {
        if (firstLoad) {
            const loadComponentsInBackground = async () => {
                // Simulate the loading of Header and Portfolio
                await new Promise(resolve => setTimeout(resolve, 5000)); // Simulated delay
                setComponentsLoaded(true);
            };

            // Start loading Header and Portfolio in the background
            loadComponentsInBackground();
        }
    }, [firstLoad]);

    return (
        <div className="container">
            {firstLoad 
                ? <IntroPage setFirstLoad={setFirstLoad}/> 
                : componentsLoaded 
                    ? <>
                        <Header />
                        <Portfolio />
                      </>
                    : null
            }
        </div>
    );
}

export default Content;
